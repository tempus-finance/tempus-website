import { Contract } from 'ethers';
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import TempusAMMABI from '../abi/TempusAMM.json';
import { getChainConfig } from '../utils/getConfig';
import { Chain } from '../interfaces/Chain';
import TempusAMMService from './TempusAMMService';
import getDefaultProvider from './getDefaultProvider';
import getTempusPoolService from './getTempusPoolService';
import getERC20TokenService from './getERC20TokenService';

let tempusAMMServices = new Map<Chain, TempusAMMService>();
const getTempusAMMService = (chain: Chain, signerOrProvider?: JsonRpcSigner | JsonRpcProvider): TempusAMMService => {
  if (!tempusAMMServices.get(chain)) {
    const tempusAMMService = new TempusAMMService();
    tempusAMMService.init({
      Contract,
      tempusAMMAddresses: getChainConfig(chain).tempusPools.map(tempusPoolConfig => tempusPoolConfig.ammAddress),
      TempusAMMABI: TempusAMMABI,
      signerOrProvider: getDefaultProvider(chain),
      tempusPoolService: getTempusPoolService(chain),
      eRC20TokenServiceGetter: getERC20TokenService,
      chain,
    });
    tempusAMMServices.set(chain, tempusAMMService);
  }

  const tempusAMMService = tempusAMMServices.get(chain);
  if (!tempusAMMService) {
    throw new Error(`Failed to get TempusAMMService for ${chain} chain!`);
  }

  if (signerOrProvider) {
    tempusAMMService.init({
      Contract: Contract,
      tempusAMMAddresses: getChainConfig(chain).tempusPools.map(tempusPoolConfig => tempusPoolConfig.ammAddress),
      TempusAMMABI: TempusAMMABI,
      signerOrProvider: signerOrProvider,
      tempusPoolService: getTempusPoolService(chain, signerOrProvider),
      eRC20TokenServiceGetter: getERC20TokenService,
      chain,
    });
  }

  return tempusAMMService;
};

export default getTempusAMMService;
