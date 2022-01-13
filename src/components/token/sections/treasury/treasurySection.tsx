import { BigNumber, ethers } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import NumberUtils from '../../../../services/numberUtils';
import TreasuryValueService from '../../../../services/treasuryValueService';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './treasurySection.scss';

const TreasurySection = () => {
  const [value, setValue] = useState<BigNumber | null>(null);

  useEffect(() => {
    const fetchValue = async () => {
      const treasuryValueService = new TreasuryValueService();

      setValue(await treasuryValueService.getValue());
    };
    fetchValue();
  }, []);

  const valueFormatted = useMemo(() => {
    if (!value) {
      return '-';
    }
    return NumberUtils.formatToCurrency(ethers.utils.formatEther(value), 2, '$');
  }, [value]);

  return (
    <div className="tf__treasurySection">
      <div className="tf__treasurySection-content">
        <div className="tf__treasurySection-background-title">
          <Typography variant="token-section-background" opacity={0.1}>
            Treasury
          </Typography>
        </div>
        <div className="tf__tokenPage-section-header-spacer" />
        <div className="tf__tokenPage-section-header">
          <Typography variant="h3">Treasury</Typography>
        </div>
        <Spacer size={25} type="vertical" />
        <Typography variant="token-section-text">
          As noted above, TEMP holders will be able to vote on how to spend funds (including fees on trading activity)
          that have accrued to the Tempus Treasury. Tempus will aim to participate as a liquidity provider in its own
          pools and build a significant treasury of diversified protocol-owned liquidity. This will also be controlled
          by TEMP holders.
        </Typography>
        <Spacer size={32} type="vertical" />
        <div className="tf__treasurySection-value">
          <Typography variant="dynamic-number-label">TREASURY VALUE</Typography>
          <Typography variant="dynamic-number">{valueFormatted}</Typography>
        </div>
      </div>
    </div>
  );
};
export default TreasurySection;
