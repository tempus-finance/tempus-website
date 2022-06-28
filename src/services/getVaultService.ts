import { Contract } from 'ethers';
import { JsonRpcSigner } from '@ethersproject/providers';
import VaultABI from '../abi/Vault.json';
import VaultService from './VaultService';
import getDefaultProvider from './getDefaultProvider';
import { getChainConfig } from '../utils/getConfig';
import { Chain } from '../interfaces/Chain';

const vaultServiceMap = new Map<Chain, VaultService>();
const getVaultService = (chain: Chain, signerOrProvider?: JsonRpcSigner): VaultService => {
  if (!vaultServiceMap.get(chain)) {
    const vaultService = new VaultService();
    vaultService.init({
      Contract,
      address: getChainConfig(chain).vaultContract,
      abi: VaultABI,
      signerOrProvider: getDefaultProvider(chain),
      chain,
    });
    vaultServiceMap.set(chain, vaultService);
  }

  const vaultService = vaultServiceMap.get(chain);
  if (!vaultService) {
    throw new Error(`Failed to get VaultService for ${chain} chain!`);
  }

  if (signerOrProvider) {
    vaultService.init({
      Contract,
      address: getChainConfig(chain).vaultContract,
      abi: VaultABI,
      signerOrProvider,
      chain,
    });
  }

  return vaultService;
};

export default getVaultService;
