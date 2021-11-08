import React, { useCallback } from 'react';
import Code423n4Logo from '../../icons/code423n4-logo';
import CoinspectLogo from '../../icons/coinspect-logo';
import HatsLogo from '../../icons/HatsLogo';
import ImmunefiLogo from '../../icons/immunefiLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './security.scss';

const Security = () => {
  const onCoinspectClick = useCallback(() => {
    window.open('https://www.coinspect.com/tempus-audit', '_blank');
  }, []);

  return (
    <div className="tf__security-container">
      <Typography variant="h3">Security</Typography>
      <Spacer size={20} orientation="vertical" />
      <div className="tf__security-cards-container">
        <div className="tf__security-card" onClick={onCoinspectClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
          <div className="tf__security-logo-container">
            <CoinspectLogo />
          </div>
          <Spacer size={22} orientation="vertical" />
          <Typography variant="security-card-label">Security Audit</Typography>
        </div>
        <div className="tf__security-card">
          <div className="tf__security-logo-container">
            <Code423n4Logo />
          </div>
          <Spacer size={22} orientation="vertical" />
          <Typography variant="security-card-label">Security Audit</Typography>
          <Typography variant="security-card-label">(Coming soon)</Typography>
        </div>
        <div className="tf__security-card">
          <div className="tf__security-logo-container">
            <ImmunefiLogo />
          </div>
          <Spacer size={22} orientation="vertical" />
          <Typography variant="security-card-label">$150,000 Bug Bounty</Typography>
          <Typography variant="security-card-label">(Coming soon)</Typography>
        </div>
        <div className="tf__security-card">
          <div className="tf__security-logo-container">
            <HatsLogo />
          </div>
          <Spacer size={22} orientation="vertical" />
          <Typography variant="security-card-label">$150,000 Bug Bounty</Typography>
          <Typography variant="security-card-label">(Coming soon)</Typography>
        </div>
      </div>
    </div>
  );
};
export default Security;
