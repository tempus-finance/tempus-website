import { JsonRpcSigner } from '@ethersproject/providers';
import { Vaults as RariVault } from 'rari-sdk';
import getTempusPoolService from './getTempusPoolService';
import getTempusAMMService from './getTempusAMMService';
import getVaultService from './getVaultService';
import { getChainConfig } from '../utils/getConfig';
import getProviderFromSignerOrProvider from '../utils/getProviderFromSignerOrProvider';
import { Chain } from '../interfaces/Chain';
import VariableRateService from './VariableRateService';
import getDefaultProvider from './getDefaultProvider';

let variableRateServices = new Map<Chain, VariableRateService>();
const getVariableRateService = (chain: Chain, signer?: JsonRpcSigner): VariableRateService => {
  if (!variableRateServices.get(chain)) {
    const variableRateService = new VariableRateService();
    variableRateService.init(
      getDefaultProvider(chain),
      getTempusPoolService(chain),
      getVaultService(chain),
      getTempusAMMService(chain),
      new RariVault(getDefaultProvider(chain)),
      getChainConfig(chain),
    );
    variableRateServices.set(chain, variableRateService);
  }

  const variableRateService = variableRateServices.get(chain);
  if (!variableRateService) {
    throw new Error(`Failed to get VariableRateService for ${chain} chain!`);
  }

  if (signer) {
    variableRateService.init(
      signer,
      getTempusPoolService(chain, signer),
      getVaultService(chain, signer),
      getTempusAMMService(chain, signer),
      new RariVault(getProviderFromSignerOrProvider(signer)),
      getChainConfig(chain),
    );
  }

  return variableRateService;
};

export default getVariableRateService;
