import React from 'react';
import GSRLogo from '../../icons/gsrLogo';
import LaunchHubLogo from '../../icons/launchHubLogo';
import LemniscapLogo from '../../icons/lemniscapLogo';
import SupernovaLogo from '../../icons/supernovaLogo';
import TomahawkVCLogo from '../../icons/tomahawkVcLogo';
import WintermuteLogo from '../../icons/wintermuteLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './investors.scss';

const Investors = () => (
  <div className="tf__investors__container">
    <Typography variant="h3" color="inverted">
      Investors
    </Typography>
    <Spacer size={56} orientation="vertical" />
    <div className="tf__investors__cards-container">
      <div className="tf__investors-card">
        <LemniscapLogo />
      </div>
      <div className="tf__investors-card">
        <TomahawkVCLogo />
      </div>
      <div className="tf__investors-card">
        <GSRLogo />
      </div>
      <div className="tf__investors-card">
        <SupernovaLogo />
      </div>
      <div className="tf__investors-card">
        <WintermuteLogo />
      </div>
      <div className="tf__investors-card">
        <LaunchHubLogo />
      </div>
    </div>
  </div>
);
export default Investors;
