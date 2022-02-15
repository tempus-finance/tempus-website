import React, { useCallback } from 'react';
import Code423n4Logo from '../../icons/code423n4-logo';
import CoinspectLogo from '../../icons/coinspect-logo';
import HatsLogo from '../../icons/HatsLogo';
import ImmunefiLogo from '../../icons/immunefiLogo';
import SherlockLogo from '../../icons/SherlockLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './security.scss';

const Security = () => {
  const onCoinspectClick = useCallback(() => {
    window.open('https://www.coinspect.com/tempus-audit', '_blank');
  }, []);

  const onCodeArenaClick = useCallback(() => {
    window.open('https://code423n4.com/reports/2021-10-tempus', '_blank');
  }, []);

  const onImmunefiClick = useCallback(() => {
    window.open('https://immunefi.com/bounty/tempus/', '_blank');
  }, []);

  const onHatsClick = useCallback(() => {
    window.open('https://app.hats.finance/vaults', '_blank');
  }, []);

  const onSherlockClick = useCallback(() => {
    window.open(
      'https://medium.com/tempusfinance/tempus-partners-with-sherlock-for-smart-contract-exploit-protection-b51a2b38434',
      '_blank',
    );
  }, []);

  return (
    <div className="tf__security-container">
      <Typography variant="h3">Security</Typography>
      <Spacer size={20} type="vertical" />
      <div className="tf__security-cards-container">
        <div className="tf__security-card" onClick={onCoinspectClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
          <div className="tf__security-logo-container">
            <CoinspectLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label">Security Audit</Typography>
        </div>
        <div className="tf__security-card" onClick={onCodeArenaClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
          <div className="tf__security-logo-container">
            <Code423n4Logo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label">Security Audit</Typography>
        </div>
        <div className="tf__security-card" onClick={onImmunefiClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
          <div className="tf__security-logo-container">
            <ImmunefiLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label">$1,000,000 Bug Bounty</Typography>
        </div>
        <div className="tf__security-card" onClick={onHatsClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
          <div className="tf__security-logo-container">
            <HatsLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label">$150,000 Bug Bounty</Typography>
        </div>
        <div className="tf__security-card" onClick={onSherlockClick} aria-hidden="true" style={{ cursor: 'pointer' }}>
          <div className="tf__security-logo-container">
            <SherlockLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label" align="center">
            $10mm protocol-level exploit coverage
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Security;
