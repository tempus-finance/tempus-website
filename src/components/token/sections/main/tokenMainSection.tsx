import Button from '../../../button/button';
import ExternalLink from '../../../common/externalLink';
import CoinGeckoLogo from '../../../icons/coinGeckoLogo';
import CoinMarketCapLogo from '../../../icons/coinMarketCapLogo';
import TokenHero from '../../../icons/tokenHero';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './tokenMainSection.scss';

const TokenMainSection = () => {
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
          <Button className="tf__tokenMainSection-action">
            <ExternalLink href="https://www.coingecko.com/en/coins/tempus">
              <CoinGeckoLogo />
              <Spacer size={10} type="horizontal" />
              <Typography variant="h5" clickable>
                CoinGecko
              </Typography>
            </ExternalLink>
          </Button>
          <Spacer size={20} type="box" />
          <Button className="tf__tokenMainSection-action">
            <ExternalLink href="https://coinmarketcap.com/currencies/tempus/">
              <CoinMarketCapLogo />
              <Spacer size={10} type="horizontal" />
              <Typography variant="h5" clickable>
                CoinMarketCap
              </Typography>
            </ExternalLink>
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
