import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';
import ChartLabel from './chartLabel/chartLabel';

import './distributionSection.scss';

const DistributionSection = () => {
  const tokenAllocationData = [
    { name: 'Fair Launch Auction', value: 7, color: '#285A95' },
    { name: 'Tempus Treasury', value: 20, color: '#0BB694' },
    { name: 'Investors & Advisors', value: 22, color: '#ED561B' },
    { name: 'Liquidity incentives', value: 25, color: '#00A3FF' },
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
        <Spacer size={160} type="vertical" />
        <Typography variant="h3" color="inverted">
          Distribution
        </Typography>
        <Spacer size={25} type="vertical" />
        <Typography variant="token-section-text" color="inverted">
          The pie chart below sets out the initial three year allocation of the 1 billion TEMP minted at genesis. At
          Tempus, we are strong believers in decentralization and so we have allocated 52% of our initial token supply
          to benefit the whole Tempus ecosystem. In addition, we find it extremely important to properly incentivize the
          early community, users, liquidity providers, and our other partners.
        </Typography>
        <Spacer size={72} type="vertical" />
        <div className="tf__distributionSection-chart-wrapper">
          <ResponsiveContainer maxHeight={430} width="100%">
            <PieChart>
              <Pie
                dataKey="value"
                startAngle={90}
                endAngle={450}
                data={tokenAllocationData}
                innerRadius={140}
                outerRadius={210}
                fill="#82ca9d"
              >
                {tokenAllocationData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ChartLabel x={550} y={50} width={420} orientation="left" label="Fair Launch Auction" value="7.00%" />
          <ChartLabel x={670} y={150} width={300} orientation="left" label="Tempus Treasury" value="20.00%" />
          <ChartLabel x={640} y={330} width={330} orientation="left" label="Investors &amp; Advisors" value="22.00%" />

          <ChartLabel x={50} y={350} width={330} orientation="right" label="Liquidity Incentives" value="25.00%" />
          <ChartLabel x={50} y={120} width={310} orientation="right" label="Tempus Team" value="26.00%" />
        </div>
      </div>
    </div>
  );
};
export default DistributionSection;
