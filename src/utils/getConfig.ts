import { Config, ChainConfig } from '../interfaces/Config';
import { TempusPool } from '../interfaces/TempusPool';
import config from '../config/config';
import { Chain } from '../interfaces/Chain';
import getCookie from './getCookie';

export function getConfig(): Config {
  const overridingConfig = getCookie('TEMPUS_OVERRIDING_CONFIG');
  // Return default config if cookie config is not specified - empty config for now.
  if (!overridingConfig) {
    return config;
  }

  try {
    return JSON.parse(overridingConfig);
  } catch (error) {
    console.error('Failed to parse environment config from cookie. Using default config as a fallback.');
    return config;
  }
}

export function getChainConfig(chain: Chain): ChainConfig {
  const configData = getConfig();

  return configData[chain];
}

export function getConfigForPoolWithId(poolId: string): TempusPool {
  const configData = getConfig();

  const tempusPoolsConfig: TempusPool[] = [];
  Object.keys(config).forEach((networkName: string) => {
    tempusPoolsConfig.push(...configData[networkName as Chain].tempusPools);
  });

  const poolConfig = tempusPoolsConfig.find((tempusPool) => tempusPool.poolId === poolId);
  if (!poolConfig) {
    throw new Error(`Failed to get pool config with pool id ${poolId}`);
  }

  return poolConfig;
}

export function getConfigForPoolWithAddress(poolAddress: string): TempusPool {
  const configData = getConfig();

  const tempusPoolsConfig: TempusPool[] = [];
  Object.keys(config).forEach((networkName: string) => {
    tempusPoolsConfig.push(...configData[networkName as Chain].tempusPools);
  });

  const poolConfig = tempusPoolsConfig.find((tempusPool) => tempusPool.address === poolAddress);
  if (!poolConfig) {
    throw new Error(`Failed to get pool config with pool address ${poolAddress}`);
  }

  return poolConfig;
}

const poolToChainConfigMap = new Map<string, ChainConfig>();
export function getChainConfigForPool(poolAddress: string): ChainConfig {
  const cachedResult = poolToChainConfigMap.get(poolAddress);
  if (cachedResult) {
    return cachedResult;
  }

  const configData = getConfig();

  const configDataKeys = Object.keys(configData);

  for (let i = 0; i < configDataKeys.length; i++) {
    const chainName = configDataKeys[i];
    const chainConfig = configData[chainName as Chain];

    const poolIndex = chainConfig.tempusPools.findIndex((tempusPoolConfig) => tempusPoolConfig.address === poolAddress);

    if (poolIndex > -1) {
      poolToChainConfigMap.set(poolAddress, chainConfig);

      return chainConfig;
    }
  }

  throw new Error(`Failed to find chain config for pool with address '${poolAddress}'!`);
}
