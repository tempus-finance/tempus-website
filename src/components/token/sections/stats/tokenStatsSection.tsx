import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import NumberUtils from '../../../../services/numberUtils';
import TokenCirculatingSupplyService from '../../../../services/tokenCirculatingSupplyService';
import TokenPriceService from '../../../../services/tokenPriceService';
import TVLService from '../../../../services/tvlService';
import { mul18f } from '../../../../utils/weiMath';
import Typography from '../../../typography/typography';

import './tokenStatsSection.scss';

const TokenStatsSection = () => {
  const [price, setPrice] = useState<BigNumber | null>(null);
  const [circulatingSupply, setCirculatingSupply] = useState<BigNumber | null>(null);
  const [tvl, setTVL] = useState<BigNumber | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      setPrice(await TokenPriceService.getPrice());
    };
    fetchPrice();
  }, []);

  useEffect(() => {
    const fetchCirculatingSupply = async () => {
      setCirculatingSupply(await TokenCirculatingSupplyService.getCirculatingSupply());
    };
    fetchCirculatingSupply();
  }, []);

  useEffect(() => {
    const fetchTVL = async () => {
      const tvlService = new TVLService();

      try {
        setTVL(await tvlService.getTVL());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch TVL: ', error);
      }
    };
    fetchTVL();
  }, []);

  const priceFormatted = useMemo(() => {
    if (!price) {
      return '-';
    }

    return NumberUtils.formatToCurrency(ethers.utils.formatEther(price), 4, '$');
  }, [price]);

  const circulatingSupplyFormatted = useMemo(() => {
    if (!circulatingSupply) {
      return '-';
    }

    return NumberUtils.formatWithMultiplier(ethers.utils.formatEther(circulatingSupply), 2);
  }, [circulatingSupply]);

  const marketCapFormatted = useMemo(() => {
    if (!price || !circulatingSupply) {
      return '-';
    }

    const marketCap = mul18f(circulatingSupply, price);

    return `$${NumberUtils.formatWithMultiplier(ethers.utils.formatEther(marketCap), 2)}`;
  }, [price, circulatingSupply]);

  const tvlFormatted = useMemo(() => {
    if (!tvl) {
      return '-';
    }

    return NumberUtils.formatWithMultiplier(ethers.utils.formatEther(tvl), 2);
  }, [tvl]);

  return (
    <div className="tf__tokenStatsSection">
      <div className="tf__tokenStatsSection-content">
        <div className="tf__tokenStatsSection-stat-container">
          <Typography variant="dynamic-number-label" color="inverted">
            CURRENT PRICE
          </Typography>
          <Typography variant="token-stat-value" color="inverted">
            {priceFormatted}
          </Typography>
        </div>

        <div className="tf__tokenStatsSection-stat-container">
          <Typography variant="dynamic-number-label" color="inverted">
            CIRCULATING SUPPLY
          </Typography>

          <Typography variant="token-stat-value" color="inverted">
            {circulatingSupplyFormatted}
          </Typography>
        </div>

        <div className="tf__tokenStatsSection-stat-container">
          <Typography variant="dynamic-number-label" color="inverted">
            MARKET CAP
          </Typography>

          <Typography variant="token-stat-value" color="inverted">
            {marketCapFormatted}
          </Typography>
        </div>

        <div className="tf__tokenStatsSection-stat-container">
          <Typography variant="dynamic-number-label" color="inverted">
            TOTAL VALUE LOCKED
          </Typography>
          <Typography variant="token-stat-value" color="inverted">
            ${tvlFormatted}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default TokenStatsSection;
