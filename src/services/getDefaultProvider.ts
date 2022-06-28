import { AlchemyProvider, JsonRpcProvider } from '@ethersproject/providers';
import { Chain } from '../interfaces/Chain';
import { getChainConfig } from '../utils/getConfig';

const defaultProviderMap = new Map<Chain, JsonRpcProvider>();
const getDefaultProvider = (chain: Chain) => {
  if (!defaultProviderMap.get(chain)) {
    const config = getChainConfig(chain);

    if (config.networkName === 'localhost') {
      defaultProviderMap.set(chain, new JsonRpcProvider('http://127.0.0.1:8545', { chainId: 31337, name: 'unknown' }));
    } else if (config.networkName === 'homestead') {
      try {
        defaultProviderMap.set(chain, new AlchemyProvider(config.networkName, config.alchemyKey));
      } catch (error) {
        console.error('getDefaultProvider - Alchemy not available', error);
      }
    } else if (config.networkName === 'fantom-mainnet') {
      defaultProviderMap.set(
        chain,
        new JsonRpcProvider(config.privateNetworkUrl, { chainId: 250, name: 'Fantom Opera' }),
      );
    }
  }

  const provider = defaultProviderMap.get(chain);
  if (!provider) {
    throw new Error(`Failed to get default provider for ${chain} chain!`);
  }
  return provider;
};

export default getDefaultProvider;
