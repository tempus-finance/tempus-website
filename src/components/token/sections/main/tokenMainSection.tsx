import React, { useCallback } from 'react';
import Button from '../../../button/button';
import CoinGeckoLogo from '../../../icons/coinGeckoLogo';
import CoinMarketCapLogo from '../../../icons/coinMarketCapLogo';
import TokenHero from '../../../icons/tokenHero';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './tokenMainSection.scss';

const TokenMainSection = () => {
  const onCoinGeckoClick = useCallback(() => {
    window.open('https://www.coingecko.com/en/coins/tempus', '_blank');
  }, []);

  const onCoinMarkedCapClick = useCallback(() => {
    window.open('https://coinmarketcap.com/currencies/tempus/', '_blank');
  }, []);

  return (
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
          <Button width="200px" height="48px" onClick={onCoinGeckoClick}>
            <CoinGeckoLogo />
            <Spacer size={10} type="horizontal" />
            <Typography variant="h5" clickable>
              CoinGecko
            </Typography>
          </Button>
          <Spacer size={20} type="box" />
          <Button width="200px" height="48px" onClick={onCoinMarkedCapClick}>
            <CoinMarketCapLogo />
            <Spacer size={10} type="horizontal" />
            <Typography variant="h5" clickable>
              CoinMarketCap
            </Typography>
          </Button>
        </div>
      </div>
      <div className="tf__tokenMainSection-logo">
        <TokenHero />
      </div>
    </div>
  );
};
export default TokenMainSection;
