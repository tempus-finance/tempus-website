import React, { useEffect } from 'react';
import Button from '../../button/button';
import ExternalLink from '../../common/externalLink';
import DiscordLogo from '../../icons/discordLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './main.scss';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tf__main__container">
      <div className="tf__main__title">
        <Typography variant="h1" color="inverted" html="Multi-Chain Fixed Income" />
      </div>
      <Spacer size={39} type="vertical" />

      <Button className="tf__main-button">
        <ExternalLink href="https://app.tempus.finance">
          <Typography variant="get-involved-card-button" clickable>
            INVEST NOW
          </Typography>
        </ExternalLink>
      </Button>
      <div className="tf__main-button-mobile">
        <div>
          <Typography variant="header-label" clickable>
            App
          </Typography>
          <Typography variant="header-label" clickable>
            Available on Desktop
          </Typography>
        </div>
      </div>
      <ExternalLink
        className="tf__main-button-discord"
        href="https://discord.com/invite/6gauHECShr"
        aria-hidden="true"
      >
        <div className="tf__flex-row-center-v">
          <DiscordLogo color="white" />
          <Spacer size={10} type="horizontal" />
          <Typography variant="header-label" color="inverted" clickable>
            Discord
          </Typography>
        </div>
      </ExternalLink>
    </div>
  );
};
export default Main;
