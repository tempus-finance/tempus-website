import React from 'react';
import GetInvolvedCard from '../../../sections/getInvolved/getInvolvedCard/getInvolvedCard';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './governanceSection.scss';

const GovernanceSection = () => (
  <div className="tf__governanceSection">
    <div className="tf__governanceSection-content">
      <div className="tf__governanceSection-background-title">
        <Typography variant="token-section-background" opacity={0.1}>
          Governance
        </Typography>
      </div>
      <div className="tf__tokenPage-section-header-spacer" />
      <div className="tf__tokenPage-section-header">
        <Typography variant="h3">Get involved with governance</Typography>
      </div>
      <Spacer size={25} type="vertical" />
      <Typography variant="token-section-text">
        Tempus Protocol is governed by a decentralized community of TEMP token holders and their delegates who propose
        and vote on upgrades to the protocol.
      </Typography>
      <Spacer size={30} type="vertical" />
      <div className="tf__get-involved__cards-grid">
        <div className="tf__get-involved__card tf__get-involved__second-card">
          <GetInvolvedCard
            title="Governance Proposals"
            description="Vote on official Tempus proposals and view current and past governance proposals on Snapshot."
            actionText="Vote on Snapshot"
            actionLink="https://snapshot.org/#/tempusgov.eth"
          />
        </div>
        <div className="tf__get-involved__card tf__get-involved__third-card">
          <GetInvolvedCard
            title="Governance Forum"
            description="Participate in Tempus governance by discussing improvement proposals with the rest of the Tempus community."
            actionText="Go to Forum"
            actionLink="https://forum.tempus.finance"
          />
        </div>
      </div>
    </div>
  </div>
);
export default GovernanceSection;
