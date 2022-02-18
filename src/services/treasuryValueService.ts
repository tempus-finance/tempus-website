import { AlchemyProvider, JsonRpcProvider } from '@ethersproject/providers';
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
  spookySwapPoolAddress,
} from '../constants';
import ERC20ABI from '../abi/ERC20.json';
import { ERC20 } from '../abi/ERC20';
import StatsABI from '../abi/Stats.json';
import { Stats } from '../abi/Stats';
import VaultABI from '../abi/Vault.json';
import { Vault } from '../abi/Vault';
import BalancerPoolABI from '../abi/BalancerPoolABI.json';
import UniswapPositionManagerABI from '../abi/UniswapPositionManagerABI.json';
import SpookySwapABI from '../abi/SpookySwapABI.json';
import TokenPriceService from './tokenPriceService';
import { div18f, mul18f } from '../utils/weiMath';
import config from '../config/config';
import { Chain } from '../interfaces/Chain';
import { Ticker } from '../interfaces/Token';
import getChainlinkFeed from './getChainlinkFeed';

class TreasuryValueService {
  async getValue() {
    const [tempTokenValue, tempusPoolsValue, balancerPoolValue, uniswapPoolValue, spookySwapPoolValue] =
      await Promise.all([
        this.getTempTokenValue(),
        this.getTempusPoolsValue(),
        this.getBalancerPoolValue(),
        this.getUniswapPoolValue(),
        this.getSpookySwapLPTempValue(),
      ]);

    return tempTokenValue.add(tempusPoolsValue).add(balancerPoolValue).add(uniswapPoolValue).add(spookySwapPoolValue);
  }

  /**
   * Calculates TEMP token value in USD across all chains that Tempus Treasuries are holding.
   * We have one treasury per chain.
   * @returns TEMP Token value in USD stored in Tempus Treasuries across all chains.
   */
  private async getTempTokenValue(): Promise<BigNumber> {
    const tokenPrice = await this.getTempTokenPrice();

    const results = await Promise.all(
      Object.keys(config).map(async (key) => {
        const chain = key as Chain;

        const tokenContract = await this.getTokenContract(chain, config[chain].tempusTokenAddress);

        const tokenAmount = await tokenContract.balanceOf(config[chain].treasuryAddress);

        return mul18f(tokenAmount, tokenPrice);
      }),
    );

    let totalValue = BigNumber.from('0');
    results.forEach((result) => {
      totalValue = totalValue.add(result);
    });

    return totalValue;
  }

  /**
   * Calculates USD value (TVL) of all Tempus Pool across all chains.
   * @returns Tempus Pools combined value (TVL) in USD across all chains.
   */
  private async getTempusPoolsValue() {
    const chainValues = await Promise.all(
      Object.keys(config).map(async (key: string) => {
        const chain = key as Chain;

        const statsContract = await this.getStatsContract(chain);

        const tempusPoolsValue = await Promise.all(
          config[chain].tempusPools.map(async (tempusPoolConfig) => {
            const principalsContract = await this.getTokenContract(chain, tempusPoolConfig.principalsAddress);
            const yieldsContract = await this.getTokenContract(chain, tempusPoolConfig.yieldsAddress);
            const lpContract = await this.getTokenContract(chain, tempusPoolConfig.ammAddress);

            const [principalsBalance, yieldsBalance, lpTokenBalance, backingTokenRate] = await Promise.all([
              principalsContract.balanceOf(config[chain].treasuryAddress),
              yieldsContract.balanceOf(config[chain].treasuryAddress),
              lpContract.balanceOf(config[chain].treasuryAddress),
              this.getTokenRateToUSD(chain, tempusPoolConfig.backingToken),
            ]);

            const maxLeftoverShares = principalsBalance
              .add(yieldsBalance)
              .add(lpTokenBalance)
              .div(BigNumber.from('1000'));

            const exitEstimate = await statsContract.estimateExitAndRedeem(
              tempusPoolConfig.ammAddress,
              lpTokenBalance,
              principalsBalance,
              yieldsBalance,
              maxLeftoverShares,
              true,
            );

            return mul18f(exitEstimate.tokenAmount, backingTokenRate);
          }),
        );

        let totalValue = BigNumber.from('0');
        tempusPoolsValue.forEach((tempusPoolValue) => {
          totalValue = totalValue.add(tempusPoolValue);
        });

        return totalValue;
      }),
    );

    let totalValue = BigNumber.from('0');
    chainValues.forEach((chainValue) => {
      totalValue = totalValue.add(chainValue);
    });

    return totalValue;
  }

  private async getBalancerPoolValue() {
    const balancerVaultContract = await this.getBalancerVaultContract('ethereum');
    const balancerPoolContract = await this.getBalancerPoolContract('ethereum');

    const lpTokenBalance = await balancerPoolContract.balanceOf(treasuryAddress);
    const lpTokenTotalSupply = await balancerPoolContract.totalSupply();

    const tempTokenInfo = await balancerVaultContract.getPoolTokenInfo(balancerPoolId, tokenAddress);
    const ethTokenInfo = await balancerVaultContract.getPoolTokenInfo(balancerPoolId, wEthAddress);

    const tempTokenAmount = lpTokenBalance.mul(tempTokenInfo.cash).div(lpTokenTotalSupply);
    const ethTokenAmount = lpTokenBalance.mul(ethTokenInfo.cash).div(lpTokenTotalSupply);

    const [tempPrice, ethPrice] = await Promise.all([
      this.getTempTokenPrice(),
      this.getTokenRateToUSD('ethereum', 'ETH'),
    ]);

    const tempValue = mul18f(tempPrice, tempTokenAmount);
    const ethValue = mul18f(ethPrice, ethTokenAmount);

    return tempValue.add(ethValue);
  }

  private async getUniswapPoolState() {
    const uniswapPoolContract = await this.getUniswapPoolContract('ethereum');

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

    const uniswapPositionManagerContract = await this.getUniswapPositionManagerContract('ethereum');

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

  private async getSpookySwapLPTempValue() {
    const spookySwapPoolContract = await this.getSpookySwapPoolContract('fantom');

    const treasuryTokenBalance = await spookySwapPoolContract.balanceOf(config.fantom.treasuryAddress);
    const tokenTotalSupply = await spookySwapPoolContract.totalSupply();

    const fantomTempTokenContract = await this.getTokenContract('fantom', config.fantom.tempusTokenAddress);

    const poolTempBalance = await fantomTempTokenContract.balanceOf(spookySwapPoolContract.address);

    const valueInTemp = treasuryTokenBalance.mul(poolTempBalance).div(tokenTotalSupply);

    const tempTokenPrice = await this.getTempTokenPrice();

    return mul18f(valueInTemp, tempTokenPrice);
  }

  private getTempTokenPrice() {
    return TokenPriceService.getPrice();
  }

  private async getTokenRateToUSD(chain: Chain, token: Ticker) {
    const statisticsContract = await this.getStatsContract(chain);

    const chainLinkAggregator = getChainlinkFeed(chain, token);

    const [rate, rateDenominator] = await statisticsContract.getRate(chainLinkAggregator);

    return div18f(rate, rateDenominator);
  }

  private async getStatsContract(chain: Chain) {
    const provider = await this.getProvider(chain);

    return new ethers.Contract(config[chain].statisticsContract, StatsABI, provider) as Stats;
  }

  private async getBalancerVaultContract(chain: Chain) {
    const provider = await this.getProvider(chain);

    return new ethers.Contract(balancerVaultAddress, VaultABI, provider) as Vault;
  }

  private async getSpookySwapPoolContract(chain: Chain) {
    const provider = await this.getProvider(chain);

    return new ethers.Contract(spookySwapPoolAddress, SpookySwapABI, provider);
  }

  private async getBalancerPoolContract(chain: Chain) {
    const provider = await this.getProvider(chain);

    return new ethers.Contract(balancerPoolAddress, BalancerPoolABI, provider);
  }

  private async getUniswapPoolContract(chain: Chain) {
    const provider = await this.getProvider(chain);

    return new ethers.Contract(uniswapPoolAddress, UniswapPoolABI, provider);
  }

  private async getTokenContract(chain: Chain, address: string) {
    const provider = await this.getProvider(chain);

    return new ethers.Contract(address, ERC20ABI, provider) as ERC20;
  }

  private async getUniswapPositionManagerContract(chain: Chain) {
    const provider = await this.getProvider(chain);

    return new ethers.Contract('0xC36442b4a4522E871399CD717aBDD847Ab11FE88', UniswapPositionManagerABI, provider);
  }

  private async getProvider(chain: Chain): Promise<any> {
    if (chain === 'fantom') {
      return new JsonRpcProvider('https://rpc.ftm.tools/', { chainId: 250, name: 'Fantom Opera' });
    }

    const browserProvider = (window as any).ethereum;

    if (browserProvider && browserProvider.chainId && parseInt(browserProvider.chainId, 16) === 1) {
      return new ethers.providers.Web3Provider(browserProvider, 'any');
    }
    return new AlchemyProvider('homestead', 'Hz57g3uvMUx9K9mCmAODf75Wba8N2Fjp');
  }
}
export default TreasuryValueService;
