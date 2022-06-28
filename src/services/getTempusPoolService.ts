import { Contract } from 'ethers';
import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';

import TempusPoolABI from '../abi/TempusPool.json';
import { getChainConfig } from '../utils/getConfig';
import { Chain } from '../interfaces/Chain';
import TempusPoolService from './TempusPoolService';
import getDefaultProvider from './getDefaultProvider';
import getERC20TokenService from './getERC20TokenService';

const tempusPoolServiceMap = new Map<Chain, TempusPoolService>();
const getTempusPoolService = (chain: Chain, signerOrProvider?: JsonRpcSigner | JsonRpcProvider) => {
  if (!tempusPoolServiceMap.get(chain)) {
    const defaultProvider = getDefaultProvider(chain);

    const tempusPoolService = new TempusPoolService();
    tempusPoolService.init({
      Contract,
      tempusPoolAddresses: getChainConfig(chain).tempusPools.map((tempusPoolConfig) => tempusPoolConfig.address),
      TempusPoolABI,
      signerOrProvider: defaultProvider,
      eRC20TokenServiceGetter: getERC20TokenService,
      chain,
    });
    tempusPoolServiceMap.set(chain, tempusPoolService);
  }

  const tempusPoolService = tempusPoolServiceMap.get(chain);
  if (!tempusPoolService) {
    throw new Error(`Failed to get TempusPoolService for ${chain} chain!`);
  }

  if (signerOrProvider) {
    tempusPoolService.init({
      Contract,
      tempusPoolAddresses: getChainConfig(chain).tempusPools.map((tempusPoolConfig) => tempusPoolConfig.address),
      TempusPoolABI,
      signerOrProvider,
      eRC20TokenServiceGetter: getERC20TokenService,
      chain,
    });
  }

  return tempusPoolService;
};

export default getTempusPoolService;
