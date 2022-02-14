import React, { useCallback, useEffect, useState } from 'react';
import getVariableRateService from '../../../../services/getVariableRateService';
import FantomNetworkIcon from '../../../icons/fantomNetworkLogo';
import TokenUsdcIcon from '../../../icons/tokenUsdcIcon';
import TokenEthIcon from '../../../icons/tokenEthIcon';
import TokenUsdtIcon from '../../../icons/tokenUsdtIcon';
import TokenDaiIcon from '../../../icons/tokenDaiIcon';
import TokenYfiIcon from '../../../icons/tokenYfiIcon';
import NetworkCard from './networkCard';

const FantomNetworkCard = () => {
  const [maxApy, setMaxApy] = useState<number>(0);

  useEffect(() => {
    const variableRateService = getVariableRateService('fantom');
    const fetching = () => variableRateService.getMaxAPY('fantom').then(setMaxApy);
    fetching();
    setInterval(fetching, 60 * 1000);
  }, []);

  const supportedProtocolIcons = (
    <>
      <div className="tf__protocols__icon-container" aria-hidden="true">
        <div className="tf__protocols__icon">
          <TokenUsdcIcon />
        </div>
      </div>
      <div className="tf__protocols__icon-container" aria-hidden="true">
        <div className="tf__protocols__icon">
          <TokenEthIcon />
        </div>
      </div>
      <div className="tf__protocols__icon-container" aria-hidden="true">
        <div className="tf__protocols__icon">
          <TokenUsdtIcon />
        </div>
      </div>
      <div className="tf__protocols__icon-container" aria-hidden="true">
        <div className="tf__protocols__icon">
          <TokenDaiIcon />
        </div>
      </div>
      <div className="tf__protocols__icon-container" aria-hidden="true">
        <div className="tf__protocols__icon">
          <TokenYfiIcon />
        </div>
      </div>
    </>
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
