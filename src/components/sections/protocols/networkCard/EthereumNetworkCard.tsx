import React, { useCallback, useEffect, useState } from 'react';
import getVariableRateService from '../../../../services/getVariableRateService';
import EthereumNetworkIcon from '../../../icons/ethereumNetworkLogo';
import LidoProtocol from '../../../icons/lido-protocol';
import RariCapitalLogo from '../../../icons/rariCapitalLogo';
import NetworkCard from './networkCard';

const EtherueumNetworkCard = () => {
  const [maxApy, setMaxApy] = useState<number>(0);

  useEffect(() => {
    const variableRateService = getVariableRateService('ethereum');
    const fetching = () => variableRateService.getMaxAPY('ethereum').then(setMaxApy);
    fetching();
    setInterval(fetching, 60 * 1000);
  }, []);

  const onLidoClick = useCallback(() => {
    window.open('https://lido.fi/', '_blank');
  }, []);

  const onRariClick = useCallback(() => {
    window.open('https://rari.capital/', '_blank');
  }, []);

  const supportedProtocolIcons = (
    <>
      <div className="tf__protocols__icon-container" title="Lido" onClick={onLidoClick} aria-hidden="true">
        <LidoProtocol />
      </div>

      <div className="tf__protocols__icon-container" title="Rari Capital" onClick={onRariClick} aria-hidden="true">
        <RariCapitalLogo />
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
