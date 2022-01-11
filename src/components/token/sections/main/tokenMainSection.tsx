import React from 'react';
import Button from '../../../button/button';
import CoinGeckoLogo from '../../../icons/coinGeckoLogo';
import CoinMarketCapLogo from '../../../icons/coinMarketCapLogo';
import TokenHero from '../../../icons/tokenHero';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './tokenMainSection.scss';

const TokenMainSection = () => (
  <div className="tf__tokenMainSection">
    <div className="tf__tokenMainSection-content">
      <Typography variant="h1" color="inverted">
        TEMP token
      </Typography>
      <div className="tf__tokenMainSection-description">
        <Typography variant="token-description" color="inverted">
          TEMP is the core governance and utility token powering the Tempus protocol.
        </Typography>
      </div>
      <div className="tf__tokenMainSection-actions">
        <Button width="168px" height="48px">
          <CoinGeckoLogo />
          <Spacer size={10} type="horizontal" />
          <Typography variant="h5">CoinGecko</Typography>
        </Button>
        <Spacer size={20} type="horizontal" />
        <Button width="203px" height="48px">
          <CoinMarketCapLogo />
          <Spacer size={10} type="horizontal" />
          <Typography variant="h5">CoinMarketCap</Typography>
        </Button>
      </div>
    </div>
    <div className="tf__tokenMainSection-logo">
      <TokenHero />
    </div>
  </div>
);
export default TokenMainSection;
