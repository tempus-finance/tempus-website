import React, { useEffect, useState } from 'react';
import { useState as useHookState } from '@hookstate/core';
import { dynamicPoolDataState } from '../../../../state/PoolDataState';
import { getChainConfig } from '../../../../utils/getConfig';
import getVariableRateService from '../../../../services/getVariableRateService';
import EthereumNetworkIcon from '../../../icons/ethereumNetworkLogo';
import TokenEthIcon from '../../../icons/tokenEthIcon';
import NetworkCard from './networkCard';

const EtherueumNetworkCard = () => {
  const dynamicPoolData = useHookState(dynamicPoolDataState);
  const [maxVarApy, setMaxVarApy] = useState<number>(0);
  const [maxFixedApy, setMaxFixedApy] = useState<number>(0);

  useEffect(() => {
    const variableRateService = getVariableRateService('ethereum');
    const fetching = () => variableRateService.getMaxAPY('ethereum').then((apy) => setMaxVarApy(apy));
    fetching();
    setInterval(fetching, 60 * 1000);
  }, []);

  useEffect(() => {
    const fixedAPRs = getChainConfig('ethereum')
      .tempusPools.map((tempusPool) => dynamicPoolData[tempusPool.address].fixedAPR.get())
      .map((apr) => (!apr || apr === 'fetching' ? 0 : apr));
    setMaxFixedApy(Math.max(...fixedAPRs));
  }, [dynamicPoolData]);

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
      maxApy={Math.max(maxVarApy, maxFixedApy)}
      appUrl="https://app.tempus.finance/?network=ethereum"
    />
  );
};

export default EtherueumNetworkCard;
