import React, { useCallback } from 'react';
import AaveProtocol from '../../icons/aave-protocol';
import CompoundProtocol from '../../icons/compound-protocol';
import LidoProtocol from '../../icons/lido-protocol';
import RariCapitalLogo from '../../icons/rariCapitalLogo';
import YearnProtocol from '../../icons/yearn-protocol';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './protocols.scss';

const Protocols = () => {
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
      <Typography variant="h2" align="center">
        Integrated with
      </Typography>
      <Spacer size={50} type="vertical" />
      <div className="tf__protocols-icons">
        <div className="tf__protocols-icons__row">
          <div className="tf__protocols__icon-container" onClick={onLidoClick} aria-hidden="true">
            <LidoProtocol />
          </div>
          <Spacer size={40} type="horizontal" />
          <div className="tf__protocols__icon-container" onClick={onCompoundClick} aria-hidden="true">
            <CompoundProtocol />
          </div>
          <Spacer size={40} type="horizontal" />
          <div className="tf__protocols__icon-container" onClick={onAaveClick} aria-hidden="true">
            <AaveProtocol />
          </div>
        </div>
        <div className="tf__protocols-icons__row">
          <div className="tf__protocols__icon-container" onClick={onYearnClick} aria-hidden="true">
            <YearnProtocol />
          </div>
          <Spacer size={40} type="horizontal" />
          <div className="tf__protocols__icon-container" onClick={onRariClick} aria-hidden="true">
            <RariCapitalLogo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Protocols;
