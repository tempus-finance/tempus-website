import React from 'react';
import GSRLogo from '../../icons/gsrLogo';
import DistributedGlobalLogo from '../../icons/distributedGlobalLogo';
import JumpCapitalLogo from '../../icons/jumpCapitalLogo';
import KojiLogo from '../../icons/kojiLogo';
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
      Supported by
    </Typography>
    <Spacer size={56} type="vertical" />
    <div className="tf__investors__cards-container">
      <div className="tf__investors-card">
        <LemniscapLogo />
      </div>
      <div className="tf__investors-card">
        <JumpCapitalLogo />
      </div>
      <div className="tf__investors-card">
        <DistributedGlobalLogo />
      </div>
      <div className="tf__investors-card">
        <GSRLogo />
      </div>
      <div className="tf__investors-card">
        <WintermuteLogo />
      </div>
      <div className="tf__investors-card">
        <TomahawkVCLogo />
      </div>
      <div className="tf__investors-card">
        <LaunchHubLogo />
      </div>
      <div className="tf__investors-card">
        <KojiLogo />
      </div>
      <div className="tf__investors-card">
        <SupernovaLogo />
      </div>
    </div>
    <div className="tf__name-cards-container">
      <div className="tf__name-card">
        <Typography variant="investor-name">Jack Herrick</Typography>
      </div>
      <Spacer size={15} type="horizontal" />
      <div className="tf__name-card">
        <Typography variant="investor-name">Thomas Bailey</Typography>
      </div>
      <Spacer size={15} type="horizontal" />
      <div className="tf__name-card">
        <Typography variant="investor-name">Freddie Farmer</Typography>
      </div>
      <div className="tf__name-card">
        <Typography variant="investor-name">Richard Dai</Typography>
      </div>
      <Spacer size={15} type="horizontal" />
      <div className="tf__name-card">
        <Typography variant="investor-name">David Choi</Typography>
      </div>
      <Spacer size={15} type="horizontal" />
      <div className="tf__name-card">
        <Typography variant="investor-name">beToken Capital</Typography>
      </div>
    </div>
  </div>
);
export default Investors;
