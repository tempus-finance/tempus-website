import { BigNumber, ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import StatsABI from '../abi/Stats.json';
import { Stats } from '../abi/Stats';
import config from '../config/config';
import { increasePrecision } from '../utils/weiMath';
import { Chain } from '../interfaces/Chain';
import { Ticker } from '../interfaces/Token';
import getStatisticsService from './getStatisticsService';
import NumberUtils from './numberUtils';

class TVLService {
  async getTVL() {
    const fetchPromises: Promise<BigNumber>[] = [];

    Object.keys(config).forEach((key: string) => {
      const chain = key as Chain;
      const chainConfig = config[chain];
      chainConfig.tempusPools.forEach((tempusPool) => {
        const promise = this.getTempusPoolTVL(
          chain,
          tempusPool.address,
          tempusPool.backingToken,
          tempusPool.tokenPrecision.backingToken,
        );
        promise.catch((e) => {
          console.error('TVLService.getTVL()', e);
        });
        fetchPromises.push(promise);
      });
    });

    const results = (await Promise.allSettled(fetchPromises))
      .filter((promise) => promise.status === 'fulfilled')
      .map((promise) => (promise as PromiseFulfilledResult<BigNumber>).value);

    let totalTVL = BigNumber.from('0');
    results.forEach((result) => {
      totalTVL = totalTVL.add(result);
    });

    return totalTVL;
  }

  private async getTempusPoolTVL(chain: Chain, tempusPool: string, backingToken: string, backingPrecision: number) {
    let tvl = BigNumber.from(0);

    const statService = getStatisticsService(chain);
    tvl = await statService.totalValueLockedUSD(chain, tempusPool, backingToken as Ticker);
    tvl = backingPrecision < 18 ? increasePrecision(tvl, 18 - backingPrecision) : tvl;

    return tvl;
  }

  private async getStatsContract(chain: Chain) {
    const provider = await this.getProvider();

    return new ethers.Contract(config[chain].statisticsContract, StatsABI, provider) as Stats;
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
export default TVLService;
