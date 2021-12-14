import React, { useCallback } from 'react';
import Button from '../../button/button';
import AaveProtocol from '../../icons/aave-protocol';
import BalancerLogo from '../../icons/balancerLogo';
import CompoundProtocol from '../../icons/compound-protocol';
import LidoProtocol from '../../icons/lido-protocol';
import RariCapitalLogo from '../../icons/rariCapitalLogo';
import YearnProtocol from '../../icons/yearn-protocol';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './protocols.scss';

const Protocols = () => {
  const onBuiltOnBalancerClick = useCallback(() => {
    window.open('https://docs.tempus.finance/docs/tempusamm', '_blank');
  }, []);

  const onLidoClick = useCallback(() => {
    window.open('https://lido.fi/', '_blank');
  }, []);

  const onCompoundClick = useCallback(() => {
    window.open('https://compound.finance/', '_blank');
  }, []);

  const onAaveClick = useCallback(() => {
    window.open('https://aave.com/', '_blank');
  }, []);

  const onYearnClick = useCallback(() => {
    window.open('https://yearn.finance/', '_blank');
  }, []);

  const onRariClick = useCallback(() => {
    window.open('https://rari.capital/', '_blank');
  }, []);

  return (
    <div className="tf__protocols__container">
      <Typography variant="about-text" align="center">
        Say goodbye to unpredictable variable yields, and hello to capital efficient fixed yields sourced from
        <Typography variant="about-text" gradient>
          the most trusted DeFi protocols
        </Typography>
      </Typography>
      <Spacer size={50} type="vertical" />
      <div className="tf__protocols-icons">
        <div className="tf__protocols__icon-container" onClick={onLidoClick} aria-hidden="true">
          <LidoProtocol />
        </div>
        <Spacer size={10} type="horizontal" />
        <div className="tf__protocols__icon-container" onClick={onCompoundClick} aria-hidden="true">
          <CompoundProtocol />
        </div>
        <Spacer size={10} type="horizontal" />
        <div className="tf__protocols__icon-container" onClick={onAaveClick} aria-hidden="true">
          <AaveProtocol />
        </div>
        <Spacer size={10} type="horizontal" />
        <div className="tf__protocols__icon-container" onClick={onYearnClick} aria-hidden="true">
          <YearnProtocol />
        </div>
        <Spacer size={10} type="horizontal" />
        <div className="tf__protocols__icon-container" onClick={onRariClick} aria-hidden="true">
          <RariCapitalLogo />
        </div>
      </div>
      <Spacer size={50} type="vertical" />
      <Button width="310px" height="72px" onClick={onBuiltOnBalancerClick}>
        <div className="tf__protocols__button-text">Built on Balancer</div>
        <Spacer size={20} type="horizontal" />
        <BalancerLogo />
      </Button>
    </div>
  );
};
export default Protocols;
