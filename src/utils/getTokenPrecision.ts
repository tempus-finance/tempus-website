import { DEFAULT_TOKEN_PRECISION } from '../constants';
import { TempusPool } from '../interfaces/TempusPool';
import { TokenTypePrecision } from '../interfaces/TokenPrecision';
import { Chain } from '../interfaces/Chain';
import { getConfig } from './getConfig';

const tokenPrecisionCache: { [address: string]: { [key in TokenTypePrecision]?: number } } = {};

const getTokenPrecision = (poolAddress: string, tokenTypePrecision: TokenTypePrecision): number => {
  if (tokenPrecisionCache?.[poolAddress]?.[tokenTypePrecision] !== undefined) {
    return tokenPrecisionCache?.[poolAddress]?.[tokenTypePrecision] || 0;
  }

  const config = getConfig();

  const tempusPoolsConfig: TempusPool[] = [];
  Object.keys(config).forEach((networkName: string) => {
    tempusPoolsConfig.push(...config[networkName as Chain].tempusPools);
  });

  const pool = tempusPoolsConfig.find((tempusPool) => tempusPool.address === poolAddress);

  if (!pool) {
    return 0;
  }

  if (!tokenPrecisionCache[poolAddress]) {
    tokenPrecisionCache[poolAddress] = {};
  }

  tokenPrecisionCache[poolAddress][tokenTypePrecision] =
    pool.tokenPrecision && pool.tokenPrecision[tokenTypePrecision] !== undefined
      ? pool.tokenPrecision[tokenTypePrecision]
      : DEFAULT_TOKEN_PRECISION;

  return tokenPrecisionCache[poolAddress][tokenTypePrecision] || 0;
};

export default getTokenPrecision;
