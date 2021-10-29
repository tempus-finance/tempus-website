import React from 'react';
import AaveProtocol from '../../icons/aave-protocol';
import CompoundProtocol from '../../icons/compound-protocol';
import LidoProtocol from '../../icons/lido-protocol';
import RariCapitalLogo from '../../icons/rariCapitalLogo';
import YearnProtocol from '../../icons/yearn-protocol';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './protocols.scss';

const Protocols = () => (
  <div className="tf__protocols__container">
    <Typography variant="about-text" align="center">
      Say goodbye to unpredictable variable yields, and hello to capital efficient fixed yields sourced from
      <Typography variant="about-text" gradient>
        the most trusted DeFi protocols
      </Typography>
    </Typography>
    <Spacer size={52} orientation="vertical" />
    <div className="tf__protocols-icons">
      <div className="tf__protocols__icon-container">
        <LidoProtocol />
      </div>
      <Spacer size={13} orientation="horizontal" />
      <div className="tf__protocols__icon-container">
        <CompoundProtocol />
      </div>
      <Spacer size={13} orientation="horizontal" />
      <div className="tf__protocols__icon-container">
        <AaveProtocol />
      </div>
      <Spacer size={13} orientation="horizontal" />
      <div className="tf__protocols__icon-container">
        <YearnProtocol />
      </div>
      <Spacer size={13} orientation="horizontal" />
      <div className="tf__protocols__icon-container">
        <RariCapitalLogo />
      </div>
    </div>
  </div>
);
export default Protocols;
