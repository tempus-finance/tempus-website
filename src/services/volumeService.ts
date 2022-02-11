import { BigNumber, ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import StatsABI from '../abi/Stats.json';
import TempusControllerABI from '../abi/TempusController.json';
import VaultABI from '../abi/Vault.json';
import { Stats } from '../abi/Stats';
import { TempusController } from '../abi/TempusController';
import { Vault } from '../abi/Vault';
import { TypedEvent } from '../abi/commons';
import config from '../config/config';
import { BLOCK_DURATION_SECONDS, SECONDS_IN_A_DAY } from '../constants';
import { div18f, mul18f } from '../utils/weiMath';

// I need to define event types like this, because TypeChain plugin for Hardhat does not generate them.
// TODO - Use event types from auto generated contract typings file when TypeChain plugin for Hardhat adds them.
// See: https://github.com/ethereum-ts/TypeChain/issues/454
export type SwapEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber] & {
    poolId: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
  }
>;
export type DepositedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    pool: string;
    depositor: string;
    recipient: string;
    yieldTokenAmount: BigNumber;
    backingTokenValue: BigNumber;
    shareAmounts: BigNumber;
    interestRate: BigNumber;
    fee: BigNumber;
  }
>;
export type RedeemedEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
    pool: string;
    redeemer: string;
    recipient: string;
    principalShareAmount: BigNumber;
    yieldShareAmount: BigNumber;
    yieldTokenAmount: BigNumber;
    backingTokenValue: BigNumber;
    interestRate: BigNumber;
    fee: BigNumber;
    isEarlyRedeem: boolean;
  }
>;

class VolumeService {
  async getVolume() {
    const fetchPromises: Promise<BigNumber>[] = [];

    config.ethereum.tempusPools.forEach((tempusPool) => {
      fetchPromises.push(this.getTempusPoolVolume(tempusPool.address, tempusPool.poolId, tempusPool.principalsAddress));
    });

    const results = await Promise.all(fetchPromises);

    let totalVolume = BigNumber.from('0');
    results.forEach((result) => {
      totalVolume = totalVolume.add(result);
    });

    return totalVolume;
  }

  private async getTempusPoolVolume(tempusPool: string, tempusPoolId: string, principals: string) {
    const provider = await this.getProvider();

    const latestBlock = await provider.getBlock('latest');

    // Get block number from 7 days ago (approximate - we need to find a better way to fetch exact block number)
    // TODO - Maximum number of events returned is 10k if block range is larger then 2k.
    // We need to fetch events in batches to make sure this is going to work when usage of the app goes up and
    // we have more then 10k events per week.
    const fetchFromBlock = latestBlock.number - Math.round(SECONDS_IN_A_DAY / BLOCK_DURATION_SECONDS) * 7;

    const eventsForUser = undefined;
    const [depositEvents, redeemEvents, swapEvents] = await Promise.all([
      this.getDepositedEvents({
        forPool: tempusPool,
        forUser: eventsForUser,
        fromBlock: fetchFromBlock,
      }),
      this.getRedeemedEvents({
        forPool: tempusPool,
        forUser: eventsForUser,
        fromBlock: fetchFromBlock,
      }),
      this.getSwapEvents({ forPoolId: tempusPoolId, fromBlock: fetchFromBlock }),
    ]);

    const poolBackingTokenRate = await this.getETHRateToUSD();

    let totalVolume: BigNumber = BigNumber.from('0');

    const events = [...depositEvents, ...redeemEvents, ...swapEvents];
    events.forEach((event) => {
      const eventBackingTokenValue = this.getEventBackingTokenValue(event, principals);

      totalVolume = totalVolume.add(mul18f(poolBackingTokenRate, eventBackingTokenValue));
    });

    return totalVolume;
  }

  private getEventBackingTokenValue(
    event: DepositedEvent | RedeemedEvent | SwapEvent,
    principalsAddress: string,
  ): BigNumber {
    if (this.isDepositEvent(event) || this.isRedeemEvent(event)) {
      return event.args.backingTokenValue;
    }
    if (this.isSwapEvent(event)) {
      // If tokenIn is principal token, return amountIn as an event value, otherwise return amountOut as an event value.
      return event.args.tokenIn === principalsAddress ? event.args.amountIn : event.args.amountOut;
    }

    throw new Error('EventUtils - getEventBackingTokenValue() - Invalid event type!');
  }

  private async getETHRateToUSD() {
    const statisticsContract = await this.getStatsContract();

    const ensNameHash = ethers.utils.namehash('eth-usd.data.eth');

    const [rate, rateDenominator] = await statisticsContract.getRate(ensNameHash);

    return div18f(rate, rateDenominator);
  }

  private isDepositEvent(event: DepositedEvent | RedeemedEvent | SwapEvent): event is DepositedEvent {
    return 'depositor' in event.args;
  }

  private isRedeemEvent(event: DepositedEvent | RedeemedEvent | SwapEvent): event is RedeemedEvent {
    return 'redeemer' in event.args;
  }

  private isSwapEvent(event: DepositedEvent | RedeemedEvent | SwapEvent): event is SwapEvent {
    return 'tokenIn' in event.args;
  }

  private async getDepositedEvents(filters: {
    forPool?: string;
    forUser?: string;
    fromBlock?: number;
    toBlock?: number;
  }): Promise<DepositedEvent[]> {
    const tempusControllerContract = await this.getTempusControllerContract();

    return tempusControllerContract.queryFilter(
      tempusControllerContract.filters.Deposited(filters.forPool, filters.forUser),
      filters.fromBlock,
      filters.toBlock,
    );
  }

  private async getRedeemedEvents(filters: {
    forPool?: string;
    forUser?: string;
    fromBlock?: number;
    toBlock?: number;
  }): Promise<RedeemedEvent[]> {
    const tempusControllerContract = await this.getTempusControllerContract();

    const fetchEventsForRedeemer = undefined;
    return tempusControllerContract.queryFilter(
      tempusControllerContract.filters.Redeemed(filters.forPool, fetchEventsForRedeemer, filters.forUser),
      filters.fromBlock,
      filters.toBlock,
    );
  }

  private async getSwapEvents(filters: {
    forPoolId?: string;
    fromBlock?: number;
    toBlock?: number;
  }): Promise<SwapEvent[]> {
    const vaultContract = await this.getVaultContract();

    return vaultContract.queryFilter(vaultContract.filters.Swap(filters.forPoolId), filters.fromBlock, filters.toBlock);
  }

  private async getVaultContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(config.ethereum.vaultContract, VaultABI, provider) as Vault;
  }

  private async getTempusControllerContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(
      config.ethereum.tempusControllerContract,
      TempusControllerABI,
      provider,
    ) as TempusController;
  }

  private async getStatsContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(config.ethereum.statisticsContract, StatsABI, provider) as Stats;
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
export default VolumeService;
