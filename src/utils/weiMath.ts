import { BigNumber } from 'ethers';
import { ONE_ETH_IN_WEI } from '../constants';

const weiInEth = BigNumber.from(ONE_ETH_IN_WEI);

export function mul18f(a: BigNumber, b: BigNumber, precision?: number): BigNumber {
  const bigNumberPrecision = precision ? BigNumber.from(Math.pow(10, precision).toString()) : weiInEth;
  return a.mul(b).div(bigNumberPrecision);
}

export function div18f(a: BigNumber, b: BigNumber, precision?: number): BigNumber {
  const bigNumberPrecision = precision ? BigNumber.from(Math.pow(10, precision).toString()) : weiInEth;
  return a.mul(bigNumberPrecision).div(b);
}

export function increasePrecision(value: BigNumber, amount: number) {
  const multiplier = BigNumber.from(Math.pow(10, amount).toString());
  return value.mul(multiplier);
}
