import { Contract } from 'ethers';
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import TempusAMMABI from '../abi/TempusAMM.json';
import { getChainConfig } from '../utils/getConfig';
import { Chain } from '../interfaces/Chain';
import TempusAMMService from './TempusAMMService';
import getDefaultProvider from './getDefaultProvider';
import getTempusPoolService from './getTempusPoolService';
import getERC20TokenService from './getERC20TokenService';
import getVaultService from './getVaultService';

const tempusAMMServiceMap = new Map<Chain, TempusAMMService>();
const getTempusAMMService = (chain: Chain, signerOrProvider?: JsonRpcSigner | JsonRpcProvider): TempusAMMService => {
  if (!tempusAMMServiceMap.get(chain)) {
    const tempusAMMService = new TempusAMMService();
    tempusAMMService.init({
      Contract,
      tempusAMMAddresses: getChainConfig(chain).tempusPools.map((tempusPoolConfig) => tempusPoolConfig.ammAddress),
      TempusAMMABI,
      signerOrProvider: getDefaultProvider(chain),
      tempusPoolService: getTempusPoolService(chain),
      vaultService: getVaultService(chain),
      eRC20TokenServiceGetter: getERC20TokenService,
      chain,
    });
    tempusAMMServiceMap.set(chain, tempusAMMService);
  }

  const tempusAMMService = tempusAMMServiceMap.get(chain);
  if (!tempusAMMService) {
    throw new Error(`Failed to get TempusAMMService for ${chain} chain!`);
  }

  if (signerOrProvider) {
    tempusAMMService.init({
      Contract,
      tempusAMMAddresses: getChainConfig(chain).tempusPools.map((tempusPoolConfig) => tempusPoolConfig.ammAddress),
      TempusAMMABI,
      signerOrProvider,
      tempusPoolService: getTempusPoolService(chain, signerOrProvider),
      vaultService: getVaultService(chain),
      eRC20TokenServiceGetter: getERC20TokenService,
      chain,
    });
  }

  return tempusAMMService;
};

export default getTempusAMMService;
