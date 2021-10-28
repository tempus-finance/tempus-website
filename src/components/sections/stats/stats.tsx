import React from 'react';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './stats.scss';

const Stats = () => (
  <div className="tf__stats__container">
    <div className="tf__flex-column-center-h">
      <Typography variant="dynamic-number-label">TOTAL VALUE LOCKED</Typography>
      <Typography variant="dynamic-number" gradient>
        $18,511,253
      </Typography>
    </div>
    <Spacer size={85} orientation="horizontal" />
    <div className="tf__flex-column-center-h">
      <Typography variant="dynamic-number-label">VOLUME (7D)</Typography>
      <Typography variant="dynamic-number" gradient>
        $18,511,253
      </Typography>
    </div>
  </div>
);

export default Stats;
