import { ReactNode, useMemo } from 'react';
import Button from '../../../button/button';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';
import NumberUtils from '../../../../services/numberUtils';
import ExternalLink from '../../../common/externalLink';

import './networkCard.scss';

type NetworkCardProps = {
  className?: string;
  networkIcon: ReactNode;
  networkName: string;
  supportedProtocolIcons: ReactNode;
  maxApy: number;
  appUrl: string;
};

const NetworkCard = (props: NetworkCardProps) => {
  const { className, networkIcon, networkName, supportedProtocolIcons, maxApy, appUrl } = props;

  const formattedAPY = useMemo(() => {
    if (!maxApy) return '-%';

    return NumberUtils.formatPercentage(maxApy, 2);
  }, [maxApy]);

  return (
    <div className={`tf__network-card__content ${className}`}>
      <div className="tf__network-card__mask-layer" />
      <div className="tf__network-card__icon">{networkIcon}</div>
      <Spacer size={30} type="vertical" />
      <Typography variant="network-card-title" color="inverted" align="left">
        {networkName}
      </Typography>
      <Spacer size={15} type="vertical" />
      <Typography variant="network-card-text" color="inverted" align="left">
        Up to {formattedAPY} APR
      </Typography>
      <Spacer size={22} type="vertical" />
      <div className="tf__network-card__protocol-icons">{supportedProtocolIcons}</div>
      <Spacer size={18} type="vertical" />
      <div className="tf__network-card__action-button-container">
        <Button width="206px" height="55px">
          <ExternalLink href="https://app.tempus.finance">
            <Typography variant="network-card-button" clickable>
              INVEST NOW
            </Typography>
          </ExternalLink>
        </Button>
      </div>
    </div>
  );
};

NetworkCard.defaultProps = {
  className: '',
};

export default NetworkCard;
