import React from 'react';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';
import EthereumNetworkCard from './networkCard/EthereumNetworkCard';
import FantomNetworkCard from './networkCard/FantomNetworkCard';

import './protocols.scss';

const Protocols = () => (
  <div className="tf__protocols__container">
    <Typography variant="tempus-description-header" align="center">
      Fix your future yield
    </Typography>
    <Spacer size={24} type="vertical" />
    <Typography className="tf__protocols__desc_body" variant="tempus-description-body" align="center">
      Choose your preferred network below to get started.
    </Typography>
    <Spacer size={15} type="vertical" />
    <div className="tf__protocols__networks">
      <EthereumNetworkCard />
      <FantomNetworkCard />
    </div>
  </div>
);
export default Protocols;
