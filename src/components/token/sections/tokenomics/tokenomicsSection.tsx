import React from 'react';
import FeesIcon from '../../../icons/feesIcon';
import GovernanceIcon from '../../../icons/governanceIcon';
import StakingIcon from '../../../icons/stakingIcon';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';
import Card from './card/card';

import './tokenomicsSection.scss';

const TokenomicsSection = () => (
  <div className="tf__tokenomicsSection">
    <div className="tf__tokenomicsSection-content">
      <div className="tf__tokenomicsSection-background-title">
        <Typography variant="token-section-background" opacity={0.1}>
          Tokenomics
        </Typography>
      </div>
      <div className="tf__tokenPage-section-header-spacer" />
      <div className="tf__tokenPage-section-header">
        <Typography variant="h3">TEMP tokenomics</Typography>
      </div>
      <Spacer size={25} type="vertical" />
      <Typography variant="token-section-text">
        TEMP is the Tempus ERC-20 native token. It serves three roles: governance, paying fees and staking to receive a
        share in network fees. One billion TEMP tokens were minted at genesis and will become available over the course
        of three years.
      </Typography>
      <Spacer size={40} type="vertical" />
      <div className="tf__tokenomicsSection-cards">
        <Card
          title="Governance"
          headerIcon={<GovernanceIcon />}
          text="
            TEMP holders can propose changes to the protocol, including adjusting protocol-level fees, and either minting or burning TEMP tokens.
            <br />
            <br />
            TEMP holders will also be able to vote on how to spend funds that have accrued to the Tempus Treasury.
          "
        />
        <Card
          title="Staking"
          headerIcon={<StakingIcon />}
          text="
            Tempus will earn fees from underlying trading activity in its pools. TEMP holders will be able to enable fees on deposits, withdrawals, and swaps on Tempus.
            <br />
            <br />
            A portion of these fees will accrue to the Tempus Treasury, while some of them will accrue directly to those who stake their TEMP for xTEMP.
          "
        />
        <Card
          title="Protocol fees"
          headerIcon={<FeesIcon />}
          text="
            If TEMP holders vote to enable fees on deposits, withdrawals, and swaps on Tempus, TEMP holders will also be able to use their TEMP to pay for these fees (instead of paying in e.g. Ethereum).
          "
        />
      </div>
    </div>
  </div>
);
export default TokenomicsSection;
