import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import NumberUtils from '../../../../services/numberUtils';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './tokenUnlockSection.scss';

const TokenUnlockSection = () => {
  const data = [
    {
      date: 'Nov 2021',
      team: 0,
      investorsAndAdvisors: 0,
      publicSale: 70000000,
    },
    {
      date: 'Dec 2021',
      team: 0,
      investorsAndAdvisors: 0,
      publicSale: 70000000,
    },
    {
      date: 'Jan 2022',
      team: 7222222,
      investorsAndAdvisors: 7333333,
      publicSale: 70000000,
    },
    {
      date: 'Feb 2022',
      team: 14444444,
      investorsAndAdvisors: 14666667,
      publicSale: 70000000,
    },
    {
      date: 'Mar 2022',
      team: 21666667,
      investorsAndAdvisors: 22000000,
      publicSale: 70000000,
    },
    {
      date: 'Apr 2022',
      team: 28888889,
      investorsAndAdvisors: 29333333,
      publicSale: 70000000,
    },
    {
      date: 'May 2022',
      team: 36111111,
      investorsAndAdvisors: 36666667,
      publicSale: 70000000,
    },
    {
      date: 'Jun 2022',
      team: 43333333,
      investorsAndAdvisors: 44000000,
      publicSale: 70000000,
    },
    {
      date: 'Jul 2022',
      team: 50555556,
      investorsAndAdvisors: 51333333,
      publicSale: 70000000,
    },
    {
      date: 'Aug 2022',
      team: 57777778,
      investorsAndAdvisors: 58666667,
      publicSale: 70000000,
    },
    {
      date: 'Sep 2022',
      team: 65000000,
      investorsAndAdvisors: 66000000,
      publicSale: 70000000,
    },
    {
      date: 'Oct 2022',
      team: 72222222,
      investorsAndAdvisors: 73333333,
      publicSale: 70000000,
    },
    {
      date: 'Nov 2022',
      team: 79444444,
      investorsAndAdvisors: 80666667,
      publicSale: 70000000,
    },
    {
      date: 'Dec 2022',
      team: 86666667,
      investorsAndAdvisors: 88000000,
      publicSale: 70000000,
    },
    {
      date: 'Jan 2023',
      team: 93888889,
      investorsAndAdvisors: 95333333,
      publicSale: 70000000,
    },
    {
      date: 'Feb 2023',
      team: 101111111,
      investorsAndAdvisors: 102666667,
      publicSale: 70000000,
    },
    {
      date: 'Mar 2023',
      team: 108333333,
      investorsAndAdvisors: 110000000,
      publicSale: 70000000,
    },
    {
      date: 'Apr 2023',
      team: 115555556,
      investorsAndAdvisors: 117333333,
      publicSale: 70000000,
    },
    {
      date: 'May 2023',
      team: 122777778,
      investorsAndAdvisors: 124666667,
      publicSale: 70000000,
    },
    {
      date: 'Jun 2023',
      team: 130000000,
      investorsAndAdvisors: 132000000,
      publicSale: 70000000,
    },
    {
      date: 'Jul 2023',
      team: 137222222,
      investorsAndAdvisors: 139333333,
      publicSale: 70000000,
    },
    {
      date: 'Aug 2023',
      team: 144444444,
      investorsAndAdvisors: 146666667,
      publicSale: 70000000,
    },
    {
      date: 'Sep 2023',
      team: 151666667,
      investorsAndAdvisors: 154000000,
      publicSale: 70000000,
    },
    {
      date: 'Oct 2023',
      team: 158888889,
      investorsAndAdvisors: 161333333,
      publicSale: 70000000,
    },
    {
      date: 'Nov 2023',
      team: 166111111,
      investorsAndAdvisors: 168666667,
      publicSale: 70000000,
    },
    {
      date: 'Dec 2023',
      team: 173333333,
      investorsAndAdvisors: 176000000,
      publicSale: 70000000,
    },
    {
      date: 'Jan 2024',
      team: 180555556,
      investorsAndAdvisors: 183333333,
      publicSale: 70000000,
    },
    {
      date: 'Feb 2024',
      team: 187777778,
      investorsAndAdvisors: 190666667,
      publicSale: 70000000,
    },
    {
      date: 'Mar 2024',
      team: 195000000,
      investorsAndAdvisors: 198000000,
      publicSale: 70000000,
    },
    {
      date: 'Apr 2024',
      team: 202222222,
      investorsAndAdvisors: 205333333,
      publicSale: 70000000,
    },
    {
      date: 'May 2024',
      team: 209444444,
      investorsAndAdvisors: 212666667,
      publicSale: 70000000,
    },
  ];

  const formatTickValue = (value: number) => NumberUtils.formatWithMultiplier(value);

  return (
    <div className="tf__tokenUnlockSection">
      <div className="tf__tokenUnlockSection-content">
        <div className="tf__tokenUnlockSection-background-title">
          <Typography variant="token-section-background" opacity={0.1} color="inverted">
            Token unlock
          </Typography>
        </div>
        <div className="tf__tokenPage-section-header-spacer" />
        <div className="tf__tokenPage-section-header">
          <Typography variant="h3" color="inverted">
            Token unlock schedule
          </Typography>
        </div>
        <Spacer size={25} type="vertical" />
        <div className="tf__tokenUnlockSection-body">
          <div className="tf__tokenUnlockSection-column">
            <Typography variant="token-section-text" color="inverted">
              Of the 1 billion TEMP minted at genesis, 70M TEMP were sold (and immediately unlocked) in a fair launch
              auction in November 2021. The remaining 930M TEMP will unlock gradually. The Tempus team has a 36-month
              vesting schedule and investorsAndAdvisors have a 30-month vesting schedule starting after Tempus&apos;
              mainnet launch in 15 December 2021.
            </Typography>
          </div>
          <div className="tf__tokenUnlockSection-column">
            <Typography variant="token-section-text" color="inverted">
              The TEMP tokens allocated to the Tempus Treasury (for incentives for the benefit of the Tempus ecosystem)
              will also unlock over a similar timeframe. Token inflation of 2% per year can also be triggered by
              governance after 4 years. This is to ensure there is long-term development and community support available
              for Tempus.
            </Typography>
          </div>
        </div>
        <ResponsiveContainer maxHeight={342} width="100%">
          <AreaChart
            width={500}
            height={342}
            data={data}
            margin={{
              top: 48,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid vertical={false} opacity={1} />
            <XAxis dataKey="date" stroke="#ffffff" dy={20} />
            <YAxis stroke="#ffffff" dx={-15} tickFormatter={formatTickValue} />
            <Area
              type="monotone"
              dataKey="team"
              stackId="1"
              stroke="#FFDF99"
              fill="#FFDF99"
              opacity={1}
              fillOpacity={1}
            />
            <Area
              type="monotone"
              dataKey="investorsAndAdvisors"
              stackId="1"
              stroke="#FF6B00"
              fill="#FF6B00"
              opacity={1}
              fillOpacity={1}
            />
            <Area
              type="monotone"
              dataKey="publicSale"
              stackId="1"
              stroke="#F5AC37"
              fill="#F5AC37"
              opacity={1}
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="tf__tokenUnlockSection-legend-wrapper">
          <div className="tf__tokenUnlockSection-legend">
            <div className="tf__tokenUnlockSection-legend-item">
              <div style={{ width: '10px', height: '10px', backgroundColor: '#F5AC37', borderRadius: '10px' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                Fair Launch Investors
              </Typography>
            </div>
            <Spacer size={25} type="horizontal" />
            <div className="tf__tokenUnlockSection-legend-item">
              <div style={{ width: '10px', height: '10px', backgroundColor: '#FF6B00', borderRadius: '10px' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                Investors &amp; Advisors
              </Typography>
            </div>
            <Spacer size={25} type="horizontal" />
            <div className="tf__tokenUnlockSection-legend-item">
              <div style={{ width: '10px', height: '10px', backgroundColor: '#FFDF99', borderRadius: '10px' }} />
              <Spacer size={10} type="horizontal" />
              <Typography variant="token-legend-label" color="inverted">
                Current &amp; Future Team
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TokenUnlockSection;
