import React from 'react';
import Typography from '../../../typography/typography';

import './tokenStatsSection.scss';

const TokenStatsSection = () => (
  <div className="tf__tokenStatsSection">
    <div className="tf__tokenStatsSection-content">
      <div className="tf__tokenStatsSection-stat-container">
        <Typography variant="dynamic-number-label" color="inverted">
          CURRENT PRICE
        </Typography>
        <Typography variant="token-stat-value" color="inverted">
          $0.2018
        </Typography>
      </div>

      <div className="tf__tokenStatsSection-stat-container">
        <Typography variant="dynamic-number-label" color="inverted">
          CIRCULATING SUPPLY
        </Typography>
        <Typography variant="token-stat-value" color="inverted">
          60M
        </Typography>
      </div>

      <div className="tf__tokenStatsSection-stat-container">
        <Typography variant="dynamic-number-label" color="inverted">
          MARKET CAP
        </Typography>
        <Typography variant="token-stat-value" color="inverted">
          $12M
        </Typography>
      </div>

      <div className="tf__tokenStatsSection-stat-container">
        <Typography variant="dynamic-number-label" color="inverted">
          TOTAL VALUE LOCKED
        </Typography>
        <Typography variant="token-stat-value" color="inverted">
          50M
        </Typography>
      </div>
    </div>
  </div>
);
export default TokenStatsSection;
