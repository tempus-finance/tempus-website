import Button from '../../button/button';
import ExternalLink from '../../common/externalLink';
import DiscordLogo from '../../icons/discordLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './social.scss';

const Social = () => {
  return (
    <div className="tf__social__container">
      <Typography variant="footer-header" color="inverted" align="center">
        Be part
      </Typography>
      <Typography variant="footer-header" color="inverted" align="center">
        of Tempus
      </Typography>
      <div className="tf__social__sections-container">
        <div className="tf__social-stay-updated">
          <Typography variant="join-header" color="inverted" align="center">
            Stay updated
          </Typography>
          <Typography variant="join-body" color="inverted" align="center">
            Get notified about major developments in Tempus
          </Typography>
          <Spacer size={23} type="vertical" />
          <Button className="tf__social-action-button">
            <ExternalLink href="https://discord.com/invite/6gauHECShr">
              <DiscordLogo />
              <Spacer size={11} type="horizontal" />
              <Typography variant="get-involved-card-button" clickable>
                Discord
              </Typography>
            </ExternalLink>
          </Button>
        </div>
        <div className="tf__social-join-the-team">
          <Typography variant="join-header" color="inverted" align="center">
            Join the team
          </Typography>
          <Typography variant="join-body" color="inverted" align="center">
            We’re always looking for talented people to join the team
          </Typography>
          <Spacer size={23} type="vertical" />
          <Button className="tf__social-action-button">
            <ExternalLink href="https://angel.co/company/tempusfinance/jobs">
              <Typography variant="get-involved-card-button" clickable>
                See openings
              </Typography>
            </ExternalLink>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Social;
