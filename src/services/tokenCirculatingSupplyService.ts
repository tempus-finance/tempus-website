import Axios from 'axios';
import { ethers } from 'ethers';

class TokenCirculatingSupplyService {
  static async getCirculatingSupply() {
    const result = await Axios.post<any>(
      'https://us-central1-temp-token-data.cloudfunctions.net/tempCirculatingSupplyDecimal',
    );

    return ethers.utils.parseEther(result.data.circulatingSupply);
  }
}
export default TokenCirculatingSupplyService;
