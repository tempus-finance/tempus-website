import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import Typography from '../typography/typography';
import Spacer from '../spacer/spacer';

const TokenPriceChartTooltip = (props: TooltipProps<ValueType, NameType>) => {
  const { active, payload } = props;

  const valueFormatted = useMemo(() => {
    if (active && payload && payload[0]) {
      return payload[0].payload.price.toFixed(6);
    }
    return null;
  }, [active, payload]);

  const timeFormatted = useMemo(() => {
    if (active && payload && payload[0]) {
      return format(new Date(payload[0].payload.timestamp * 1000), 'p');
    }
    return null;
  }, [active, payload]);

  const dateFormatted = useMemo(() => {
    if (active && payload && payload[0]) {
      return format(payload[0].payload.timestamp * 1000, 'd MMM yyyy');
    }
    return null;
  }, [active, payload]);

  return (
    <div className="tf__tokenAuction-chart-tooltip">
      <Typography variant="investor-name">
        {valueFormatted}
        &nbsp;USDC
      </Typography>
      <Spacer size={5} orientation="vertical" />
      <Typography variant="body-text" color="gray">
        {timeFormatted}
      </Typography>
      <Spacer size={5} orientation="vertical" />
      <Typography variant="body-text" color="gray">
        {dateFormatted}
      </Typography>
    </div>
  );
};
export default TokenPriceChartTooltip;
