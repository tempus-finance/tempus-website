import { ethers, BigNumber } from 'ethers';
import { tokenAddress, ignoreHolderAddresses } from '../constants';
import ERC20ABI from '../abi/ERC20.json';
import { ERC20 } from '../abi/ERC20';

class TokenHoldersService {
  async getHolders() {
    const contract = this.getTokenContract();

    const transferEvents = await contract.queryFilter(contract.filters.Transfer());

    const holderAddresses = transferEvents.map((transferEvent) => transferEvent.args.to);
    const uniqueHolderAddresses = [...new Set(holderAddresses)];

    let holderBalances: { balance: BigNumber; address: string }[] = [];
    while (uniqueHolderAddresses.length > 0) {
      const batch = uniqueHolderAddresses.splice(0, 2000);

      // eslint-disable-next-line no-await-in-loop
      holderBalances = await this.getHolderBalancesBatch(batch, holderBalances);
    }

    holderBalances.sort((a, b) => {
      if (a.balance.gte(b.balance)) {
        return -1;
      }
      return 1;
    });

    return holderBalances;
  }

  private async getHolderBalancesBatch(
    addresses: string[],
    currentBalances: Array<{ balance: BigNumber; address: string }>,
  ) {
    const balancePromises: Promise<{ balance: BigNumber; address: string }>[] = [];
    addresses.forEach((address) => {
      if (ignoreHolderAddresses.indexOf(address) > -1) {
        return;
      }

      balancePromises.push(this.getHolderBalance(address));
    });
    const balances = await Promise.all(balancePromises);

    return [...balances, ...currentBalances];
  }

  private async getHolderBalance(address: string): Promise<{ balance: BigNumber; address: string }> {
    const contract = this.getTokenContract();

    const balance = await contract.balanceOf(address);

    return {
      balance,
      address,
    };
  }

  private getTokenContract() {
    return new ethers.Contract(tokenAddress, ERC20ABI, this.getProvider()) as ERC20;
  }

  private getProvider() {
    return new ethers.providers.Web3Provider((window as any).ethereum, 'any');
  }
}
export default TokenHoldersService;
