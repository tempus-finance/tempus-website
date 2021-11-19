import React from 'react';
import Button from '../../button/button';
import DiscordLogo from '../../icons/discordLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './main.scss';

const Main = () => {
  const onLaunchAppClick = () => {
    window.open('https://testnet.tempus.finance', '_blank');
  };

  const onDiscordClick = () => {
    window.open('https://discord.com/invite/6gauHECShr', '_blank');
  };

  return (
    <div className="tf__main__container">
      <Typography variant="h1" color="inverted" html="Trustless</br> secondary</br> markets on yield" />
      <Spacer size={50} orientation="vertical" />
      <Typography
        variant="h2"
        color="inverted"
        html="Tempus is a permissionless market for</br>AMM-powered interest rate swaps."
      />
      <Spacer size={50} orientation="vertical" />
      <div className="tf__main-button">
        <Button onClick={onLaunchAppClick}>
          <Typography variant="header-label" clickable>
            LAUNCH TESTNET
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
          <Spacer size={10} orientation="horizontal" />
          <Typography variant="header-label" color="inverted" clickable>
            Discord
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Main;
