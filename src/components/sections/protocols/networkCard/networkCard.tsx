import React, { ReactNode, useCallback, useMemo } from 'react';
import Button from '../../../button/button';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';
import NumberUtils from '../../../../services/numberUtils';

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

  const onBtnClick = useCallback(() => {
    window.open(appUrl, '_blank');
  }, [appUrl]);

  const formattedAPY = useMemo(() => {
    if (!maxApy) return '-%';

    return NumberUtils.formatPercentage(maxApy, 2);
  }, [maxApy]);

  return (
    <div className={`tf__network-card__content ${className}`}>
      <div className="tf__network-card__mask-layer">
        <div className="tf__network-card__mask-container">
          <div className="tf__network-card__mask-blur" />
        </div>
      </div>
      <div className="tf__network-card__icon">{networkIcon}</div>
      <Spacer size={30} type="vertical" />
      <Typography variant="network-card-title" color="inverted" align="center">
        {networkName}
      </Typography>
      <Spacer size={16} type="vertical" />
      <div className="tf__network-card__protocol-icons">{supportedProtocolIcons}</div>
      <Spacer size={18} type="vertical" />
      <Typography variant="network-card-text" color="inverted" align="center">
        APR up to {formattedAPY}
      </Typography>
      <Spacer size={18} type="vertical" />
      <div className="tf__network-card__action-button-container">
        <Button onClick={onBtnClick}>
          <Typography variant="network-card-button" clickable>
            INVEST NOW
          </Typography>
        </Button>
      </div>
    </div>
  );
};

NetworkCard.defaultProps = {
  className: '',
};

export default NetworkCard;
