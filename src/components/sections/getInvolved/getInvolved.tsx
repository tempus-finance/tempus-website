import React from 'react';
import GetInvolvedLogo from '../../logo/get-involved-logo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './getInvolved.scss';
import GetInvolvedCard from './getInvolvedCard/getInvolvedCard';

const GetInvolved = () => (
  <div className="tf__get-involved__container">
    <Typography variant="h3">Get involved</Typography>
    <Spacer size={45} type="vertical" />
    <div className="tf__get-involved__cards-grid">
      <div className="tf__get-involved__card tf__get-involved__first-card">
        <GetInvolvedCard
          title="Community Governance"
          description="Tempus Protocol is governed by a decentralized community of TEMP token holders and their delegates who propose and vote on upgrades to the protocol."
        />
        <div className="tf__get-involved__card-logo">
          <GetInvolvedLogo />
        </div>
      </div>
      <div className="tf__get-involved__card tf__get-involved__second-card">
        <GetInvolvedCard
          title="Governance Forum"
          description="Participate in Tempus governance by discussing improvement proposals with the rest of the Tempus community."
        />
      </div>
      <div className="tf__get-involved__card tf__get-involved__third-card">
        <GetInvolvedCard
          title="Governance Proposals"
          description="Vote on official Tempus proposals and view current and past governance proposals on Snapshot."
        />
      </div>
    </div>
  </div>
);
export default GetInvolved;
