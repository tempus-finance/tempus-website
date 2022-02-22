import React, { useCallback, useEffect, useState } from 'react';
import { useState as useHookState } from '@hookstate/core';
import { dynamicPoolDataState } from '../../../../state/PoolDataState';
import { getChainConfig } from '../../../../utils/getConfig';
import getVariableRateService from '../../../../services/getVariableRateService';
import FantomNetworkIcon from '../../../icons/fantomNetworkLogo';
import TokenUsdcIcon from '../../../icons/tokenUsdcIcon';
import TokenEthIcon from '../../../icons/tokenEthIcon';
import TokenUsdtIcon from '../../../icons/tokenUsdtIcon';
import TokenDaiIcon from '../../../icons/tokenDaiIcon';
import TokenYfiIcon from '../../../icons/tokenYfiIcon';
import NetworkCard from './networkCard';

const FantomNetworkCard = () => {
  const dynamicPoolData = useHookState(dynamicPoolDataState);
  const [maxVarApy, setMaxVarApy] = useState<number>(0);
  const [maxFixedApy, setMaxFixedApy] = useState<number>(0);

  useEffect(() => {
    const variableRateService = getVariableRateService('fantom');
    const fetching = () => variableRateService.getMaxAPY('fantom').then(setMaxVarApy);
    fetching();
    setInterval(fetching, 60 * 1000);
  }, []);

  useEffect(() => {
    const fixedAPRs = getChainConfig('fantom')
      .tempusPools.map((tempusPool) => dynamicPoolData[tempusPool.address].fixedAPR.get())
      .map((apr) => (!apr || apr === 'fetching' ? 0 : apr));
    setMaxFixedApy(Math.max(...fixedAPRs));
  }, [dynamicPoolData]);

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
      maxApy={Math.max(maxVarApy, maxFixedApy)}
      appUrl="https://app.tempus.finance/?network=fantom"
    />
  );
};

export default FantomNetworkCard;
