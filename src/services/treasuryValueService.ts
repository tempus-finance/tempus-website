import { AlchemyProvider } from '@ethersproject/providers';
import { BigNumber, ethers } from 'ethers';
import { Pool, Position } from '@uniswap/v3-sdk';
import { Token } from '@uniswap/sdk-core';
import { abi as UniswapPoolABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';
import {
  balancerPoolAddress,
  balancerPoolId,
  balancerVaultAddress,
  wEthAddress,
  tokenAddress,
  treasuryAddress,
  uniswapPoolAddress,
  usdcAddress,
} from '../constants';
import ERC20ABI from '../abi/ERC20.json';
import { ERC20 } from '../abi/ERC20';
import StatsABI from '../abi/Stats.json';
import { Stats } from '../abi/Stats';
import VaultABI from '../abi/Vault.json';
import { Vault } from '../abi/Vault';
import BalancerPoolABI from '../abi/BalancerPoolABI.json';
import UniswapPositionManagerABI from '../abi/UniswapPositionManagerABI.json';
import TokenPriceService from './tokenPriceService';
import { div18f, mul18f } from '../utils/weiMath';
import config from '../config';

class TreasuryValueService {
  async getValue() {
    const [tempTokenValue, tempusPoolsValue, balancerPoolValue, uniswapPoolValue] = await Promise.all([
      this.getTempTokenValue(),
      this.getTempusPoolsValue(),
      this.getBalancerPoolValue(),
      this.getUniswapPoolValue(),
    ]);

    return tempTokenValue.add(tempusPoolsValue).add(balancerPoolValue).add(uniswapPoolValue);
  }

  private async getTempTokenValue() {
    const tokenContract = await this.getTokenContract(tokenAddress);

    const [tokenAmount, tokenPrice] = await Promise.all([
      tokenContract.balanceOf(treasuryAddress),
      this.getTempTokenPrice(),
    ]);

    return mul18f(tokenAmount, tokenPrice);
  }

  private async getTempusPoolsValue() {
    const statsContract = await this.getStatsContract();

    const values = await Promise.all(
      config.tempusPools.map(async (tempusPoolConfig) => {
        const principalsContract = await this.getTokenContract(tempusPoolConfig.principals);
        const yieldsContract = await this.getTokenContract(tempusPoolConfig.yields);
        const lpContract = await this.getTokenContract(tempusPoolConfig.amm);

        const [principalsBalance, yieldsBalance, lpTokenBalance, backingTokenRate] = await Promise.all([
          principalsContract.balanceOf(treasuryAddress),
          yieldsContract.balanceOf(treasuryAddress),
          lpContract.balanceOf(treasuryAddress),
          this.getETHRateToUSD(),
        ]);

        const maxLeftoverShares = principalsBalance.add(yieldsBalance).add(lpTokenBalance).div(BigNumber.from('1000'));
        const estimateExitToBackingToken = true;

        const exitEstimate = await statsContract.estimateExitAndRedeem(
          tempusPoolConfig.amm,
          lpTokenBalance,
          principalsBalance,
          yieldsBalance,
          maxLeftoverShares,
          estimateExitToBackingToken,
        );

        const userPoolBalanceInBackingTokens = exitEstimate.tokenAmount;

        return mul18f(userPoolBalanceInBackingTokens, backingTokenRate);
      }),
    );

    let totalValue = BigNumber.from('0');
    values.forEach((value) => {
      totalValue = totalValue.add(value);
    });

    return totalValue;
  }

  private async getBalancerPoolValue() {
    const balancerVaultContract = await this.getBalancerVaultContract();
    const balancerPoolContract = await this.getBalancerPoolContract();

    const lpTokenBalance = await balancerPoolContract.balanceOf(treasuryAddress);
    const lpTokenTotalSupply = await balancerPoolContract.totalSupply();

    const tempTokenInfo = await balancerVaultContract.getPoolTokenInfo(balancerPoolId, tokenAddress);
    const ethTokenInfo = await balancerVaultContract.getPoolTokenInfo(balancerPoolId, wEthAddress);

    const tempTokenAmount = lpTokenBalance.mul(tempTokenInfo.cash).div(lpTokenTotalSupply);
    const ethTokenAmount = lpTokenBalance.mul(ethTokenInfo.cash).div(lpTokenTotalSupply);

    const [tempPrice, ethPrice] = await Promise.all([this.getTempTokenPrice(), this.getETHRateToUSD()]);

    const tempValue = mul18f(tempPrice, tempTokenAmount);
    const ethValue = mul18f(ethPrice, ethTokenAmount);

    return tempValue.add(ethValue);
  }

  private async getUniswapPoolState() {
    const uniswapPoolContract = await this.getUniswapPoolContract();

    const [liquidity, slot] = await Promise.all([uniswapPoolContract.liquidity(), uniswapPoolContract.slot0()]);

    return {
      liquidity,
      sqrtPriceX96: slot[0],
      tick: slot[1],
      observationIndex: slot[2],
      observationCardinality: slot[3],
      observationCardinalityNext: slot[4],
      feeProtocol: slot[5],
      unlocked: slot[6],
    };
  }

  private async getUniswapPoolValue() {
    const state = await this.getUniswapPoolState();

    const TokenA = new Token(1, usdcAddress, 6, 'USDC', 'USD Coin');
    const TokenB = new Token(1, tokenAddress, 18, 'TEMP', 'Tempus');

    const pool = new Pool(
      TokenA,
      TokenB,
      10000, /// fee
      state.sqrtPriceX96.toString(),
      state.liquidity.toString(),
      state.tick,
    );

    const uniswapPositionManagerContract = await this.getUniswapPositionManagerContract();

    const positionsBalance = await uniswapPositionManagerContract.balanceOf(treasuryAddress);

    const positions = (
      await Promise.all(
        Array.from(Array(positionsBalance.toNumber())).map(async (_, positionIndex) => {
          const positionId = await uniswapPositionManagerContract.tokenOfOwnerByIndex(treasuryAddress, positionIndex);
          const position = await uniswapPositionManagerContract.positions(positionId);

          if (
            position.token0.toLowerCase() !== TokenA.address.toLowerCase() ||
            position.token1.toLowerCase() !== TokenB.address.toLowerCase()
          ) {
            return null;
          }
          return new Position({
            pool,
            liquidity: position.liquidity.toString(),
            tickLower: position.tickLower,
            tickUpper: position.tickUpper,
          });
        }),
      )
    ).filter((position) => position !== null);

    const tempAmount = positions.reduce((totalValue, currPositionValue) => {
      if (!currPositionValue) {
        return totalValue;
      }

      return totalValue.add(currPositionValue.amount1.quotient.toString());
    }, BigNumber.from(0));

    const usdcAmount = positions.reduce((totalValue, currPositionValue) => {
      if (!currPositionValue) {
        return totalValue;
      }

      return totalValue.add(currPositionValue.amount0.quotient.toString());
    }, BigNumber.from(0));

    const tempTokenPrice = await this.getTempTokenPrice();

    const tempValue = mul18f(tempAmount, tempTokenPrice);

    return tempValue.add(usdcAmount);
  }

  private getTempTokenPrice() {
    return TokenPriceService.getPrice();
  }

  private async getETHRateToUSD() {
    const statisticsContract = await this.getStatsContract();

    const ensNameHash = ethers.utils.namehash('eth-usd.data.eth');

    const [rate, rateDenominator] = await statisticsContract.getRate(ensNameHash);

    return div18f(rate, rateDenominator);
  }

  private async getStatsContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(config.statsContract, StatsABI, provider) as Stats;
  }

  private async getBalancerVaultContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(balancerVaultAddress, VaultABI, provider) as Vault;
  }

  private async getBalancerPoolContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(balancerPoolAddress, BalancerPoolABI, provider);
  }

  private async getUniswapPoolContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(uniswapPoolAddress, UniswapPoolABI, provider);
  }

  private async getTokenContract(address: string) {
    const provider = await this.getProvider();

    return new ethers.Contract(address, ERC20ABI, provider) as ERC20;
  }

  private async getUniswapPositionManagerContract() {
    const provider = await this.getProvider();

    return new ethers.Contract('0xC36442b4a4522E871399CD717aBDD847Ab11FE88', UniswapPositionManagerABI, provider);
  }

  private async getProvider(): Promise<any> {
    if ((window as any).ethereum && !(window as any).ethereum.chainId) {
      await this.wait();
      return this.getProvider();
    }

    if ((window as any).ethereum && parseInt((window as any).ethereum.chainId, 16) === 1) {
      return new ethers.providers.Web3Provider((window as any).ethereum, 'any');
    }
    return new AlchemyProvider('homestead', 'Hz57g3uvMUx9K9mCmAODf75Wba8N2Fjp');
  }

  private async wait() {
    return new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  }
}
export default TreasuryValueService;
