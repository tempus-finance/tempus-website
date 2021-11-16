import { format } from 'date-fns';
import copy from 'copy-to-clipboard';
import { ethers } from 'ethers';
import React, { useCallback, useEffect, useState } from 'react';
import { AreaChart, Tooltip, Area, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { finalLbpEndTimestamp, tokenAddress } from '../../constants';
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
    window.open('https://copperlaunch.com/auctions/0xe5769603af1c9ec809dd5cfbc7fee36e7f09a3e6', '_blank');
  }, []);

  const onReadMoreClick = useCallback(() => {
    window.open('https://medium.com/tempusfinance/temp-fair-launch-8feb0a91302e', '_blank');
  }, []);

  const onTokenClick = useCallback(() => {
    window.open('https://etherscan.io/token/0x9892843ed7b78E9cA3a15fe3d6fc12C664277c8d', '_blank');
  }, []);

  return (
    <div className="tf__tokenAuction-container">
      <div className="tf__tokenAuction-background" />
      <div className="tf__tokenAuction-title">
        <Typography variant="h1" color="inverted" align="center">
          TEMP Fair Launch
        </Typography>
      </div>
      <div className="tf__tokenAuction-chart-section">
        <div className="tf__tokenAuction-chart">
          <ResponsiveContainer width="100%" height={325}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5580AB" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#5580AB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <YAxis dataKey="price" />
              <XAxis dataKey="date" interval="preserveStartEnd" minTickGap={150} />
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
            <img width={26} height={21} src="/images/tokenLogo.png" alt="token logo" />
            <Spacer size={10} orientation="horizontal" />
            <div style={{ color: '#7a7a7a' }}>TEMP</div>
            <Spacer size={10} orientation="horizontal" />
            {shortenAccount(tokenAddress)}
            <Spacer size={12} orientation="horizontal" />
            <div
              style={{ cursor: 'pointer', height: '24px' }}
              onClick={(event) => {
                event.stopPropagation();
                copy(tokenAddress);
              }}
            >
              <CopyIcon fill="#222222" />
            </div>
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
          <Spacer size={16} orientation="vertical" />
          <div className="tf__tokenAuction-card-data">{format(new Date(finalLbpEndTimestamp), 'd MMM. p')}</div>
        </div>
        <Spacer size={14} orientation="horizontal" />
        <div className="tf__tokenAuction-card">
          <div className="tf__tokenAuction-card-title">LATEST PRICE</div>
          <Spacer size={16} orientation="vertical" />
          <div className="tf__tokenAuction-card-data">
            {latestPrice ? `${NumberUtils.formatToCurrency(latestPrice.toString(), 3)} USDC` : 'loading'}
          </div>
        </div>
        <Spacer size={14} orientation="horizontal" />
        <div className="tf__tokenAuction-card">
          <div className="tf__tokenAuction-card-title">bKRL HOLDERS</div>
          <Spacer size={16} orientation="vertical" />
          <div className="tf__tokenAuction-card-data">{holdersData.length || 'loading'}</div>
        </div>
        <Spacer size={14} orientation="horizontal" />
        <div className="tf__tokenAuction-card">
          <div className="tf__tokenAuction-card-title">USDC Raised</div>
          <Spacer size={16} orientation="vertical" />
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
                      copy(holder.address);
                    }}
                  >
                    <CopyIcon fill={index > -1 && index < 5 ? 'white' : '#222222'} />
                  </div>
                </div>
                <div className="tf__leaderboard-column-contributed">
                  bKRL {NumberUtils.formatToCurrency(ethers.utils.formatEther(holder.balance), 2)}
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
