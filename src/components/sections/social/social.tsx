import React, { useCallback } from 'react';
import Button from '../../button/button';
import DiscordLogo from '../../icons/discordLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './social.scss';

const Social = () => {
  const onDiscordClick = useCallback(() => {
    window.open('https://discord.com/invite/6gauHECShr', '_blank');
  }, []);

  const onSeeOpeningsClick = useCallback(() => {
    window.open('https://angel.co/company/tempusfinance', '_blank');
  }, []);

  return (
    <div className="tf__social__container">
      <Typography variant="footer-header" color="inverted" align="center">
        Be part
      </Typography>
      <Typography variant="footer-header" color="inverted" align="center">
        of Tempus
      </Typography>
      <Spacer size={35} orientation="vertical" />
      <div className="tf__social__sections-container">
        <div className="tf__social-stay-updated">
          <Typography variant="join-header" color="inverted" align="center">
            Stay updated
          </Typography>
          <Typography variant="join-body" color="inverted" align="center">
            Get notified about major developments in Tempus
          </Typography>
          <Spacer size={23} orientation="vertical" />
          <Button width="160px" onClick={onDiscordClick}>
            <DiscordLogo />
            <Spacer size={11} orientation="horizontal" />
            <Typography variant="get-involved-card-button" clickable>
              Discord
            </Typography>
          </Button>
        </div>
        <div className="tf__social-join-the-team">
          <Typography variant="join-header" color="inverted" align="center">
            Join the team
          </Typography>
          <Typography variant="join-body" color="inverted" align="center">
            We’re always looking for talented people to join the team
          </Typography>
          <Spacer size={23} orientation="vertical" />
          <Button width="160px" onClick={onSeeOpeningsClick}>
            <Typography variant="get-involved-card-button" clickable>
              See openings
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Social;
