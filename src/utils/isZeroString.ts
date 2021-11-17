import { ethers } from 'ethers';

export function isZeroString(value: string): boolean {
  if (!value) {
    return true;
  }
  try {
    return ethers.utils.parseEther(value).isZero();
  } catch (error) {
    return true;
  }
}
