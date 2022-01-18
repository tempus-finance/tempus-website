import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';
import ChartLabel from './chartLabel/chartLabel';

import './distributionSection.scss';

const DistributionSection = () => {
  const tokenAllocationData = [
    { name: 'Fair Launch Auction', value: 7, color: '#285A95' },
    { name: 'Treasury (Unallocated)', value: 20, color: '#0BB694' },
    { name: 'Treasury (Liquidity Incentives)', value: 25, color: '#00A3FF' },
    { name: 'Investors & Advisors', value: 22, color: '#ED561B' },
    { name: 'Tempus Team', value: 26, color: '#FFDF99' },
  ];

  return (
    <div className="tf__distributionSection">
      <div className="tf__distributionSection-content">
        <div className="tf__distributionSection-background-title">
          <Typography variant="token-section-background" opacity={0.1} color="inverted">
            Distribution
          </Typography>
        </div>
        <div className="tf__tokenPage-section-header-spacer" />
        <div className="tf__tokenPage-section-header">
          <Typography variant="h3" color="inverted">
            Distribution
          </Typography>
        </div>
        <Spacer size={25} type="vertical" />
        <Typography variant="token-section-text" color="inverted">
          The pie chart below sets out the initial three year allocation of the 1 billion TEMP minted at genesis. At
          Tempus, we are strong believers in decentralization and so we have allocated 52% of our initial token supply
          to benefit the whole Tempus ecosystem. In addition, we find it extremely important to properly incentivize the
          early community, users, liquidity providers, and our other partners.
        </Typography>
        <div className="tf__distributionSection-chart-wrapper">
          <ResponsiveContainer width="100%">
            <PieChart>
              <Pie
                dataKey="value"
                startAngle={90}
                endAngle={450}
                data={tokenAllocationData}
                innerRadius="64%"
                outerRadius="100%"
                fill="#82ca9d"
              >
                {tokenAllocationData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ChartLabel x={560} y={50} width={450} orientation="left" label="Fair Launch Auction" value="7.00%" />
          <ChartLabel x={680} y={150} width={330} orientation="left" label="Treasury (Unallocated)" value="20.00%" />
          <ChartLabel
            x={640}
            y={350}
            width={370}
            orientation="left"
            label="Treasury (Liquidity Incentives)"
            value="25.00%"
          />

          <ChartLabel x={30} y={330} width={320} orientation="right" label="Investors &amp; Advisors" value="22.00%" />
          <ChartLabel x={30} y={120} width={330} orientation="right" label="Tempus Team" value="26.00%" />
        </div>
        <div className="tf__distributionSection-mobile-legend">
          <div className="tf__distributionSection-mobile-legend-content">
            <div className="tf__distributionSection-mobile-legend-item">
              <div className="tf__distributionSection-mobile-legend-item-tick" style={{ backgroundColor: '#FFDF99' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                26.00% Tempus Team
              </Typography>
            </div>
            <div className="tf__distributionSection-mobile-legend-item">
              <div className="tf__distributionSection-mobile-legend-item-tick" style={{ backgroundColor: '#00A3FF' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                25.00% Treasury (Liquidity Incentives)
              </Typography>
            </div>
            <div className="tf__distributionSection-mobile-legend-item">
              <div className="tf__distributionSection-mobile-legend-item-tick" style={{ backgroundColor: '#ED561B' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                22.00% Investors &amp; Advisors
              </Typography>
            </div>
            <div className="tf__distributionSection-mobile-legend-item">
              <div className="tf__distributionSection-mobile-legend-item-tick" style={{ backgroundColor: '#0BB694' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                20.00% Treasury (Unallocated)
              </Typography>
            </div>
            <div className="tf__distributionSection-mobile-legend-item">
              <div className="tf__distributionSection-mobile-legend-item-tick" style={{ backgroundColor: '#285A95' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                7.00% Fair Launch Auction
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DistributionSection;
