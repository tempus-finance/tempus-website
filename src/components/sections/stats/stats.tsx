import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import NumberUtils from '../../../services/numberUtils';
import TVLService from '../../../services/tvlService';
import Typography from '../../typography/typography';

import './stats.scss';

const Stats = () => {
  const [tvl, setTVL] = useState<BigNumber | null>(null);

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

  let tvlFormatted: string = '-';
  if (tvl) {
    tvlFormatted = NumberUtils.formatToCurrency(ethers.utils.formatEther(tvl), 2, '$');
  }

  return (
    <div className="tf__stats__container">
      <div className="tf__flex-column-center-h">
        <Typography variant="dynamic-number-label" color="inverted">
          TOTAL VALUE LOCKED
        </Typography>
        <Typography variant="dynamic-number" color="inverted">
          {tvlFormatted}
        </Typography>
      </div>
    </div>
  );
};

export default Stats;
