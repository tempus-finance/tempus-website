import React from 'react';
import Button from '../../button/button';
import DiscordLogo from '../../icons/discordLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './main.scss';

const Main = () => {
  const onLaunchAppClick = () => {
    window.open('https://app.tempus.finance', '_blank');
  };

  const onDiscordClick = () => {
    window.open('https://discord.com/invite/6gauHECShr', '_blank');
  };

  return (
    <div className="tf__main__container">
      <div className="tf__main__title">
        <Typography variant="h1" color="inverted" html="Trustless interest rate markets" />
      </div>
      <Spacer size={39} type="vertical" />
      <div className="tf__main__description">
        <Typography
          variant="h2"
          color="inverted"
          html="Tempus is a decentralised secondary market for yields that lets users fix or speculate on their income."
        />
      </div>

      <Spacer size={49} type="vertical" />
      <div className="tf__main-button">
        <Button onClick={onLaunchAppClick} width="206px" height="55px">
          <Typography variant="get-involved-card-button" clickable>
            LAUNCH APP
          </Typography>
        </Button>
      </div>
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
      <div className="tf__main-button-discord" onClick={onDiscordClick} aria-hidden="true">
        <div className="tf__flex-row-center-v">
          <DiscordLogo color="white" />
          <Spacer size={10} type="horizontal" />
          <Typography variant="header-label" color="inverted" clickable>
            Discord
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Main;
