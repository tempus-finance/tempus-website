import React from 'react';

import TokenMainSection from './sections/main/tokenMainSection';
import TokenStatsSection from './sections/stats/tokenStatsSection';
import TokenomicsSection from './sections/tokenomics/tokenomicsSection';

const TokenPage = () => (
  <>
    <TokenMainSection />
    <TokenStatsSection />
    <TokenomicsSection />
  </>
);
export default TokenPage;
