import React, { useCallback, useEffect, useState } from 'react';
import getVariableRateService from '../../../../services/getVariableRateService';
import FantomNetworkIcon from '../../../icons/fantomNetworkLogo';
import YearnProtocol from '../../../icons/yearn-protocol';
import NetworkCard from './networkCard';

const FantomNetworkCard = () => {
  const [maxApy, setMaxApy] = useState<number>(0);

  useEffect(() => {
    const variableRateService = getVariableRateService('fantom');
    const fetching = () => variableRateService.getMaxAPY('fantom').then(setMaxApy);
    fetching();
    setInterval(fetching, 60 * 1000);
  }, []);

  const onYearnClick = useCallback(() => {
    window.open('https://yearn.finance/', '_blank');
  }, []);

  const supportedProtocolIcons = (
    <div className="tf__protocols__icon-container" title="Yearn" onClick={onYearnClick} aria-hidden="true">
      <YearnProtocol />
    </div>
  );

  return (
    <NetworkCard
      className="fantom-network"
      networkIcon={<FantomNetworkIcon />}
      networkName="Fantom"
      supportedProtocolIcons={supportedProtocolIcons}
      maxApy={maxApy}
      appUrl="https://app.tempus.finance/?network=fantom"
    />
  );
};

export default FantomNetworkCard;
