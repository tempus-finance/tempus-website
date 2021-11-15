import Axios from 'axios';
import { format } from 'date-fns';

import {
  balancerSubgraphUrl,
  bucketSize,
  finalLbpEndTimestamp,
  initialPrice,
  initialUSDCBalance,
  lbpStartTimestamp,
  poolId,
} from '../constants';

class TokenSaleService {
  async getPoolData(first: number, skip: number, oldResponse: any): Promise<any> {
    const {
      data: {
        data: { pool },
      },
    } = await Axios.post(balancerSubgraphUrl, {
      query: `
        query {
          pool (id: "${poolId}") {
            id
            swapFee
            tokens {
              id
              symbol
              decimals
              address
              balance
              weight
            }
            swapsCount
            swaps (first: ${first}, skip: ${skip} where: {
              timestamp_gt: ${lbpStartTimestamp / 1000}},
              orderBy: timestamp,
              orderDirection: desc)
            {
              id
              tokenIn
              tokenInSym
              tokenOut
              tokenOutSym
              tokenAmountIn
              tokenAmountOut
              timestamp
              userAddress {
                id
              }
            }
          }
        }
        `,
    });

    const newResponse = oldResponse ? { ...oldResponse, swaps: [...oldResponse.swaps, ...pool.swaps] } : pool;

    if (newResponse.swaps.length < newResponse.swapsCount) {
      return this.getPoolData(first, newResponse.swaps.length, newResponse);
    }
    return newResponse;
  }

  /* async getLatestPrice() {

  } */

  async getPrices(swaps: any[]) {
    const prices = [
      {
        bucket: 0,
        numSwaps: 0,
        price: this.round(initialPrice / (1 - 0.01), 4),
        latestSwap: '',
        volume: 0,
        timestamp: this.timeFromBucket(0),
        date: format(new Date(this.timeFromBucket(0) * 1000), 'd MMM yyyy'),
      },
    ];
    const swapPrices = this.swapsToPrices(swaps);
    const ended = Date.now() > finalLbpEndTimestamp;
    const lastBucket = this.bucketFromTime(ended ? finalLbpEndTimestamp / 1000 : this.getNow());
    for (let bucket = 1; bucket <= lastBucket; bucket++) {
      const pricesInBucket = swapPrices.filter((swap) => swap.bucket === bucket);
      if (pricesInBucket?.length) prices.push(this.groupPrices(pricesInBucket, bucket, this.timeFromBucket(bucket)));
      else prices.push(this.formerPrice(prices, bucket));
    }
    return prices;
  }

  /* getUSDCRaised = (pool: any): number => {
    if (!pool?.tokens) return 0;
    if (pool.tokens[0].symbol === 'USDC') return +pool.tokens[0].balance - initialUSDCBalance;
    return +pool.tokens[1].balance - initialUSDCBalance;
  }; */

  getUSDCRaised = (pool: any): any => {
    let raised = 0;
    pool.swaps.forEach((swap: any) => {
      if (swap.tokenInSym === 'USDC') {
        raised += Number(swap.tokenAmountIn);
      }
      if (swap.tokenOutSym === 'USDC') {
        raised -= Number(swap.tokenAmountOut);
      }
    });

    return raised;
  };

  private swapsToPrices(swaps: any[]) {
    return swaps.map((swap) => ({
      bucket: this.bucketFromTime(swap.timestamp),
      numSwaps: 1,
      latestSwap: swap.id,
      timestamp: swap.timestamp,
      price: this.calculatePrice(swap),
      volume: this.calculateVolume(swap),
      date: format(new Date(swap.timestamp * 1000), 'd MMM yyyy'),
    }));
  }

  private bucketFromTime(time: number): number {
    return Math.trunc((time - lbpStartTimestamp / 1000) / (bucketSize / 1000));
  }

  private calculatePrice(swap: any): number {
    const { tokenInSym, tokenAmountIn, tokenAmountOut } = swap;
    const price = +tokenAmountIn / +tokenAmountOut;
    if (tokenInSym === 'USDC') return price;
    return 1 / price;
  }

  private calculateVolume(swap: any): number {
    const { tokenInSym, tokenAmountIn, tokenAmountOut } = swap;
    if (tokenInSym === 'USDC') return +tokenAmountOut;
    return +tokenAmountIn;
  }

  private round(num: number, decimals: number): number {
    return Math.round(Math.pow(10, decimals) * num) / Math.pow(10, decimals);
  }

  private timeFromBucket(bucket: number): number {
    return (bucketSize / 1000) * bucket + lbpStartTimestamp / 1000;
  }

  private getNow(): number {
    return Math.round(new Date().getTime() / 1000);
  } // seconds

  private groupPrices(prices: any[], bucket: number, timestamp: number) {
    return {
      bucket,
      numSwaps: prices.length,
      price: this.sumKey(prices, 'price') / prices.length,
      latestSwap: prices[0].latestSwap,
      volume: this.sumKey(prices, 'volume'),
      timestamp,
      date: format(new Date(timestamp * 1000), 'd MMM yyyy'),
    };
  }

  private sumKey(arr: any[], key: string) {
    return arr.map((item) => item[key]).reduce((a, b) => +a + +b, 0);
  }

  private formerPrice(prices: any[], bucket: number) {
    return {
      bucket,
      numSwaps: 0,
      price: prices[bucket - 1].price,
      latestSwap: prices[bucket - 1].latestSwap,
      volume: 0,
      timestamp: this.timeFromBucket(bucket),
      date: format(new Date(this.timeFromBucket(bucket) * 1000), 'd MMM yyyy'),
    };
  }
}
export default TokenSaleService;
