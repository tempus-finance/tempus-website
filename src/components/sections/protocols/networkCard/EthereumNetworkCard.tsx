import React, { useEffect, useState } from 'react';
import getVariableRateService from '../../../../services/getVariableRateService';
import EthereumNetworkIcon from '../../../icons/ethereumNetworkLogo';
import TokenUsdcIcon from '../../../icons/tokenUsdcIcon';
import TokenEthIcon from '../../../icons/tokenEthIcon';
import NetworkCard from './networkCard';

const EtherueumNetworkCard = () => {
  const [maxApy, setMaxApy] = useState<number>(0);

  useEffect(() => {
    const variableRateService = getVariableRateService('ethereum');
    const fetching = () => variableRateService.getMaxAPY('ethereum').then(setMaxApy);
    fetching();
    setInterval(fetching, 60 * 1000);
  }, []);

  const supportedProtocolIcons = (
    <>
      <div className="tf__protocols__icon-container" aria-hidden="true">
        <div className="tf__protocols__icon">
          <TokenEthIcon />
        </div>
      </div>
    </>
  );

  return (
    <NetworkCard
      className="ethereum-network"
      networkIcon={<EthereumNetworkIcon />}
      networkName="Ethereum"
      supportedProtocolIcons={supportedProtocolIcons}
      maxApy={maxApy}
      appUrl="https://app.tempus.finance/?network=ethereum"
    />
  );
};

export default EtherueumNetworkCard;
