import React from 'react';
import Typography from '../typography/typography';
import HedgeGraph from '../icons/hedge-graph';

import './graph.scss';

const Graph = () => (
  <>
    <div className="tf__graph-title">
      <Typography variant="h2">What does Tempus do?</Typography>
    </div>
    <div className="tf__graph">
      <HedgeGraph />
    </div>
    <div className="tf__graph__text">
      <Typography variant="investor-name" color="gray">
        Tempus allows you to get fixed interest on a variety of crypto assets.
      </Typography>
    </div>
  </>
);

export default Graph;
