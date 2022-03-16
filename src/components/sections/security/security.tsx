import ExternalLink from '../../common/externalLink';
import Code423n4Logo from '../../icons/code423n4-logo';
import CoinspectLogo from '../../icons/coinspect-logo';
import HatsLogo from '../../icons/HatsLogo';
import ImmunefiLogo from '../../icons/immunefiLogo';
import SherlockLogo from '../../icons/SherlockLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './security.scss';

const Security = () => {
  return (
    <div className="tf__security-container">
      <Typography variant="h3">Security</Typography>
      <Spacer size={20} type="vertical" />
      <div className="tf__security-cards-container">
        <ExternalLink
          className="tf__security-card"
          href="https://www.coinspect.com/tempus-audit"
          aria-hidden="true"
        >
          <div className="tf__security-logo-container">
            <CoinspectLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label" clickable>Security Audit</Typography>
        </ExternalLink>
        <ExternalLink
          className="tf__security-card"
          href="https://code423n4.com/reports/2021-10-tempus"
          aria-hidden="true"
        >
          <div className="tf__security-logo-container">
            <Code423n4Logo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label" clickable>Security Audit</Typography>
        </ExternalLink>
        <ExternalLink
          className="tf__security-card"
          href="https://immunefi.com/bounty/tempus/"
          aria-hidden="true"
        >
          <div className="tf__security-logo-container">
            <ImmunefiLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label" clickable>$1,000,000 Bug Bounty</Typography>
        </ExternalLink>
        <ExternalLink className="tf__security-card" href="https://app.hats.finance/vaults" aria-hidden="true">
          <div className="tf__security-logo-container">
            <HatsLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label" clickable>$150,000 Bug Bounty</Typography>
        </ExternalLink>
        <ExternalLink
          className="tf__security-card"
          href="https://medium.com/tempusfinance/tempus-partners-with-sherlock-for-smart-contract-exploit-protection-b51a2b38434"
          aria-hidden="true"
        >
          <div className="tf__security-logo-container">
            <SherlockLogo />
          </div>
          <Spacer size={22} type="vertical" />
          <Typography variant="security-card-label" clickable align="center">
            $10,000,000
            <br />
            Exploit Coverage
          </Typography>
        </ExternalLink>
      </div>
    </div>
  );
};
export default Security;
