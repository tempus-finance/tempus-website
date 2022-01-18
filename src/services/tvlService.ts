import { BigNumber, ethers } from 'ethers';
import { AlchemyProvider } from '@ethersproject/providers';
import StatsABI from '../abi/Stats.json';
import { Stats } from '../abi/Stats';
import config from '../config';

class TVLService {
  async getTVL() {
    const fetchPromises: Promise<BigNumber>[] = [];

    config.tempusPools.forEach((tempusPool) => {
      fetchPromises.push(this.getTempusPoolTVL(tempusPool.address, tempusPool.backingTokenTicker));
    });

    const results = await Promise.all(fetchPromises);

    let totalTVL = BigNumber.from('0');
    results.forEach((result) => {
      totalTVL = totalTVL.add(result);
    });

    return totalTVL;
  }

  private async getTempusPoolTVL(tempusPool: string, backingToken: string) {
    const statsContract = await this.getStatsContract();

    const chainlinkAggregatorEnsHash = ethers.utils.namehash(`${backingToken.toLowerCase()}-usd.data.eth`);

    return statsContract.totalValueLockedAtGivenRate(tempusPool, chainlinkAggregatorEnsHash);
  }

  private async getStatsContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(config.statsContract, StatsABI, provider) as Stats;
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
