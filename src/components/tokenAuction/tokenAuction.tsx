import { format } from 'date-fns';
import copy from 'copy-to-clipboard';
import { ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';
import { AreaChart, Tooltip, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { bucketSize, chartMaxDate, finalLbpEndTimestamp, lbpStartTimestamp, tokenAddress } from '../../constants';
import NumberUtils from '../../services/numberUtils';
import TokenHoldersService from '../../services/tokenHoldersService';
import TokenSaleService from '../../services/tokenSaleData';
import CopyIcon from '../icons/copy-icon';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';

import './tokenAuction.scss';
import TokenPriceChartTooltip from './tokenPriceChartTooltip';

function shortenAccount(account: string) {
  return `${account.substring(0, 6)}...${account.substring(account.length - 5, account.length)}`;
}

function timeFromBucket(bucket: number): number {
  return (bucketSize / 1000) * bucket + lbpStartTimestamp / 1000;
}

type Tabs = '10' | '50' | '200';

const TokenAuction = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [holdersData, setHoldersData] = useState<any[]>([]);
  const [filteredHolders, setFilteredHolders] = useState<any[]>([]);
  const [latestPrice, setLatestPrice] = useState<number | null>(null);
  const [usdcRaised, setUSDCRaised] = useState<number | null>(null);
  const [selectedTab, setSelectedTab] = useState<Tabs>('10');

  const onTabClick = useCallback(
    (tab: Tabs) => {
      setSelectedTab(tab);

      setFilteredHolders(holdersData.slice(0, Number(tab)));
    },
    [holdersData],
  );

  useEffect(() => {
    const fetchChartData = async () => {
      const tokenSaleService = new TokenSaleService();

      const poolData = await tokenSaleService.getPoolData(1000, 0, null);
      const prices = await tokenSaleService.getPrices(poolData.swaps);

      setLatestPrice(prices[prices.length - 1].price);
      setChartData(prices);
      setUSDCRaised(tokenSaleService.getUSDCRaised(poolData));
    };
    fetchChartData();
  }, []);

  useEffect(() => {
    const fetchHolders = async () => {
      const tokenHoldersService = new TokenHoldersService();

      const holders = await tokenHoldersService.getHolders();

      setHoldersData(holders);
    };
    fetchHolders();
  }, []);

  useEffect(() => {
    setFilteredHolders(holdersData.slice(0, Number(selectedTab)));
  }, [holdersData]);

  const onAuctionClick = useCallback(() => {
    window.open('https://copperlaunch.com/auctions/0x89d4a55ca51192109bb85083ff7d9a13ab24c8a1', '_blank');
  }, []);

  const onReadMoreClick = useCallback(() => {
    window.open('https://medium.com/tempusfinance/temp-fair-launch-8feb0a91302e', '_blank');
  }, []);

  const onTokenClick = useCallback(() => {
    window.open('https://etherscan.io/token/0xa36fdbbae3c9d55a1d67ee5821d53b50b63a1ab9', '_blank');
  }, []);

  const onAddTokenToWallet = useCallback((event: any) => {
    event.stopPropagation();

    (window as any).ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenAddress,
          symbol: 'TEMP',
          decimals: 18,
          image:
            'https://firebasestorage.googleapis.com/v0/b/tempus-website-972a3.appspot.com/o/tempus-token%2FTemp-token_2.png?alt=media&token=deb6abbb-dd8f-4416-92ac-be8c62d225c0', // A string url of the token logo
        },
      },
    });
  }, []);

  return (
    <div className="tf__tokenAuction-container">
      <div className="tf__tokenAuction-background" />
      <div className="tf__tokenAuction-title">
        <div className="tf__tokenAuction-title-ticker">
          <span>TEMP</span>
          <div className="tf__tokenAuction-title-logo">
            <img width={58} height={58} src="/images/tokenLogo-large.png" alt="token-logo" />
          </div>
        </div>

        <span>Fair Launch</span>
      </div>
      <div className="tf__tokenAuction-chart-section">
        <div className="tf__tokenAuction-chart">
          <ResponsiveContainer width="100%" height={288}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5580AB" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#5580AB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis dataKey="price" />
              <XAxis
                dataKey="timestamp"
                interval="preserveStartEnd"
                minTickGap={150}
                type="number"
                domain={[lbpStartTimestamp / 1000, finalLbpEndTimestamp / 1000]}
                tickFormatter={(label) => format(new Date(label * 1000), 'd MMM yyyy')}
              />
              <Tooltip content={<TokenPriceChartTooltip />} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#5580AB"
                strokeWidth={3}
                fillOpacity={0.8}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="tf__tokenAuction-chart-actions">
          <div className="tf__tokenAuction-button tf__tokenAuction-chart-button-text" onClick={onTokenClick}>
            <img className="tf__tokenAuction-token-logo" src="/images/tokenLogo.png" alt="token logo" />
            <Spacer size={10} orientation="horizontal" />
            <div className="tf__tokenAuction-token-ticker" style={{ color: '#7a7a7a' }}>
              TEMP
            </div>
            <Spacer size={10} orientation="horizontal" />
            {shortenAccount(tokenAddress)}
            <Spacer size={15} orientation="horizontal" />
            <div
              style={{ cursor: 'pointer', height: '24px' }}
              onClick={(event) => {
                event.stopPropagation();
                copy(tokenAddress);
              }}
            >
              <CopyIcon fill="#222222" />
            </div>
            {(window as any).ethereum && (
              <>
                <Spacer size={15} orientation="horizontal" />
                <div onClick={onAddTokenToWallet} style={{ height: '24px' }}>
                  <img width={24} height={24} src="/images/metamask-icon.png" alt="metamask-icon" />
                </div>
              </>
            )}
          </div>
          <div className="tf__tokenAuction-link-actions">
            <div className="tf__tokenAuction-button tf__tokenAuction-chart-button-text" onClick={onReadMoreClick}>
              READ MORE
            </div>
            <Spacer size={20} orientation="horizontal" />
            <div className="tf__tokenAuction-button tf__tokenAuction-chart-button-text" onClick={onAuctionClick}>
              AUCTION
              <Spacer size={10} orientation="horizontal" />
              <img width={18} height={18} src="/images/link.png" alt="link indicator" />
            </div>
          </div>
        </div>
      </div>
      <div className="tf__tokenAuction-cards-section">
        <div className="tf__tokenAuction-card">
          <div className="tf__tokenAuction-card-title">SALE ENDS</div>
          <Spacer size={10} orientation="vertical" />
          <div className="tf__tokenAuction-card-data">{format(new Date(finalLbpEndTimestamp), 'd MMM. p')}</div>
        </div>
        <Spacer size={14} orientation="horizontal" />
        <Spacer size={23} orientation="vertical" />
        <div className="tf__tokenAuction-card">
          <div className="tf__tokenAuction-card-title">LATEST PRICE</div>
          <Spacer size={10} orientation="vertical" />
          <div className="tf__tokenAuction-card-data">
            {latestPrice ? `${NumberUtils.formatToCurrency(latestPrice.toString(), 3)} USDC` : 'loading'}
          </div>
        </div>
        <Spacer size={14} orientation="horizontal" />
        <Spacer size={23} orientation="vertical" />
        <div className="tf__tokenAuction-card">
          <div className="tf__tokenAuction-card-title">TEMP HOLDERS</div>
          <Spacer size={10} orientation="vertical" />
          <div className="tf__tokenAuction-card-data">{holdersData.length || 'loading'}</div>
        </div>
        <Spacer size={14} orientation="horizontal" />
        <Spacer size={23} orientation="vertical" />
        <div className="tf__tokenAuction-card">
          <div className="tf__tokenAuction-card-title">USDC Raised</div>
          <Spacer size={10} orientation="vertical" />
          <div className="tf__tokenAuction-card-data">
            {usdcRaised ? `${NumberUtils.formatToCurrency(usdcRaised.toString(), 3)} USDC` : 'loading'}
          </div>
        </div>
      </div>
      <div className="tf__leaderboard-section">
        <div className="tf__leaderboard">
          <Typography variant="dynamic-number-label">LEADERBOARD</Typography>

          <div className="tf__tokenAuction-tabs">
            <div className="tf__tokenAuction-tabs-container">
              <div
                className={selectedTab === '10' ? 'tf__faq__tab-selected' : 'tf__faq__tab'}
                onClick={() => onTabClick('10')}
                aria-hidden="true"
              >
                <Typography variant="body-text" clickable>
                  Top 10
                </Typography>
              </div>
              <div
                className={selectedTab === '50' ? 'tf__faq__tab-selected' : 'tf__faq__tab'}
                onClick={() => onTabClick('50')}
                aria-hidden="true"
              >
                <Typography variant="body-text" clickable>
                  Top 50
                </Typography>
              </div>
              <div
                className={selectedTab === '200' ? 'tf__faq__tab-selected' : 'tf__faq__tab'}
                onClick={() => onTabClick('200')}
                aria-hidden="true"
              >
                <Typography variant="body-text" clickable>
                  Top 200
                </Typography>
              </div>
            </div>
          </div>

          <Spacer size={35} orientation="vertical" />
          <div className="tf__leaderboard-row">
            <div className="tf__leaderboard-column-rank">Rank</div>
            <div className="tf__leaderboard-column-address">Address</div>
            <div className="tf__leaderboard-column-contributed">Contributed</div>
            <div className="tf__leaderboard-column-value">USDC Value</div>
          </div>
          <Spacer size={15} orientation="vertical" />
          {filteredHolders.map((holder, index) => {
            let className = '';
            if (index === 0) {
              className = 'tf__leaderboard-row-card-main';
            } else if (index > 0 && index < 5) {
              className = 'tf__leaderboard-row-card-secondary';
            } else {
              className = 'tf__leaderboard-row-card-default';
            }

            return (
              <div key={holder.address} className={`tf__leaderboard-row ${className}`}>
                <div className="tf__leaderboard-column-rank">#{index + 1}</div>
                <div className="tf__leaderboard-column-address">
                  {shortenAccount(holder.address)}{' '}
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      copy(`https://etherscan.io/address/${holder.address}`);
                    }}
                  >
                    <CopyIcon fill={index > -1 && index < 5 ? 'white' : '#222222'} />
                  </div>
                </div>
                <div className="tf__leaderboard-column-contributed">
                  TEMP {NumberUtils.formatToCurrency(ethers.utils.formatEther(holder.balance), 2)}
                </div>
                <div className="tf__leaderboard-column-value">
                  {latestPrice
                    ? NumberUtils.formatToCurrency(
                        (Number(ethers.utils.formatEther(holder.balance)) * latestPrice).toString(),
                        2,
                      )
                    : 'loading'}{' '}
                  USDC
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default TokenAuction;
