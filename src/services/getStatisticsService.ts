import { Contract } from 'ethers';
import { JsonRpcSigner, JsonRpcProvider } from '@ethersproject/providers';
import StatisticsABI from '../abi/Stats.json';
import { getChainConfig } from '../utils/getConfig';
import { Chain } from '../interfaces/Chain';
import StatisticsService from './StatisticsService';
import getDefaultProvider from './getDefaultProvider';
import getTempusAMMService from './getTempusAMMService';

let statisticsServices = new Map<Chain, StatisticsService>();
const getStatisticsService = (chain: Chain, signerOrProvider?: JsonRpcSigner | JsonRpcProvider) => {
  if (!statisticsServices.get(chain)) {
    const statisticsService = new StatisticsService();
    statisticsService.init({
      Contract: Contract,
      abi: StatisticsABI,
      signerOrProvider: getDefaultProvider(chain),
      tempusAMMService: getTempusAMMService(chain),
      address: getChainConfig(chain).statisticsContract,
    });
    statisticsServices.set(chain, statisticsService);
  }

  const statisticsService = statisticsServices.get(chain);
  if (!statisticsService) {
    throw new Error(`Failed to get StatisticsService for ${chain} chain!`);
  }

  if (signerOrProvider) {
    statisticsService.init({
      Contract: Contract,
      abi: StatisticsABI,
      signerOrProvider: signerOrProvider,
      tempusAMMService: getTempusAMMService(chain, signerOrProvider),
      address: getChainConfig(chain).statisticsContract,
    });
  }

  return statisticsService;
};

export default getStatisticsService;
