import React from 'react';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './treasurySection.scss';

const TreasurySection = () => (
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
        pools and build a significant treasury of diversified protocol-owned liquidity. This will also be controlled by
        TEMP holders.
      </Typography>
      <Spacer size={32} type="vertical" />
      <div className="tf__treasurySection-value">
        <Typography variant="dynamic-number-label">TREASURY VALUE</Typography>
        <Typography variant="dynamic-number">$80,253,000.34</Typography>
      </div>
    </div>
  </div>
);
export default TreasurySection;
