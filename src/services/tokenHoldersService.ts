import { ethers, BigNumber } from 'ethers';
import { AlchemyProvider, JsonRpcProvider } from '@ethersproject/providers';
import { tokenAddress, ignoreHolderAddresses } from '../constants';
import ERC20ABI from '../abi/ERC20.json';
import { ERC20 } from '../abi/ERC20';

class TokenHoldersService {
  async getHolders() {
    const contract = await this.getTokenContract();

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

    return holderBalances.filter((holder) => !holder.balance.isZero());
  }

  private async getHolderBalancesBatch(
    addresses: string[],
    currentBalances: Array<{ balance: BigNumber; address: string }>,
  ) {
    const balancePromises: Promise<{ balance: BigNumber; address: string }>[] = [];
    addresses.forEach((address) => {
      if (ignoreHolderAddresses.indexOf(address.toLowerCase()) > -1) {
        return;
      }

      balancePromises.push(this.getHolderBalance(address));
    });
    const balances = await Promise.all(balancePromises);

    return [...balances, ...currentBalances];
  }

  private async getHolderBalance(address: string): Promise<{ balance: BigNumber; address: string }> {
    const contract = await this.getTokenContract();

    const balance = await contract.balanceOf(address);

    return {
      balance,
      address,
    };
  }

  private async getTokenContract() {
    const provider = await this.getProvider();

    return new ethers.Contract(tokenAddress, ERC20ABI, provider) as ERC20;
  }

  private async getProvider(): Promise<any> {
    if ((window as any).ethereum && !(window as any).ethereum.chainId) {
      await this.wait();
      return this.getProvider();
    }

    if ((window as any).ethereum && parseInt((window as any).ethereum.chainId, 16) === 1) {
      return new ethers.providers.Web3Provider((window as any).ethereum, 'any');
    }
    return new AlchemyProvider('homestead', 'Tw1lpBmMTfBYd2c66jttrj_FNZHrIt0b');
  }

  private async wait() {
    return new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  }
}
export default TokenHoldersService;
