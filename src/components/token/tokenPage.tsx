import React, { useEffect } from 'react';
import DistributionSection from './sections/distribution/distributionSection';
import GovernanceSection from './sections/governance/governanceSection';
import TokenMainSection from './sections/main/tokenMainSection';
import TokenStatsSection from './sections/stats/tokenStatsSection';
import TokenomicsSection from './sections/tokenomics/tokenomicsSection';
import TokenUnlockSection from './sections/tokenUnlock/tokenUnlockSection';
import TreasurySection from './sections/treasury/treasurySection';

import './tokenPage.scss';

const TokenPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TokenMainSection />
      <TokenStatsSection />
      <TokenomicsSection />
      <TokenUnlockSection />
      <GovernanceSection />
      <DistributionSection />
      <TreasurySection />
    </>
  );
};
export default TokenPage;
