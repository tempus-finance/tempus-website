import Axios from 'axios';
import { ethers } from 'ethers';

class TokenPriceService {
  static async getPrice() {
    const result = await Axios.get<any>('https://api.coingecko.com/api/v3/simple/price?ids=tempus&vs_currencies=usd');

    return ethers.utils.parseEther(result.data.tempus.usd.toString());
  }
}
export default TokenPriceService;
