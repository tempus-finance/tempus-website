import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import NumberUtils from '../../../services/numberUtils';
import TVLService from '../../../services/tvlService';
import VolumeService from '../../../services/volumeService';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './stats.scss';

const Stats = () => {
  const [tvl, setTVL] = useState<BigNumber | null>(null);
  const [volume, setVolume] = useState<BigNumber | null>(null);

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

  useEffect(() => {
    const fetchVolume = async () => {
      const volumeService = new VolumeService();

      try {
        setVolume(await volumeService.getVolume());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Failed to fetch Volume: ', error);
      }
    };
    fetchVolume();
  }, []);

  let tvlFormatted: string | null = null;
  if (tvl) {
    tvlFormatted = NumberUtils.formatToCurrency(ethers.utils.formatEther(tvl), 2, '$');
  }

  let volumeFormatted: string | null = null;
  if (volume) {
    volumeFormatted = NumberUtils.formatToCurrency(ethers.utils.formatEther(volume), 2, '$');
  }

  return (
    <div className="tf__stats__container">
      {tvlFormatted && (
        <div className="tf__flex-column-center-h">
          <Typography variant="dynamic-number-label">TOTAL VALUE LOCKED</Typography>
          <Typography variant="dynamic-number" gradient>
            {tvlFormatted}
          </Typography>
        </div>
      )}
      <Spacer size={85} orientation="horizontal" />
      {volumeFormatted && (
        <div className="tf__flex-column-center-h">
          <Typography variant="dynamic-number-label">VOLUME (7D)</Typography>
          <Typography variant="dynamic-number" gradient>
            {volumeFormatted}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Stats;
