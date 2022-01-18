import React, { FC } from 'react';
import Typography from '../../../../typography/typography';

import './chartLabel.scss';

interface ChartLabelProps {
  x: number;
  y: number;
  width: number;
  label: string;
  value: string;
  orientation: 'left' | 'right';
}

const ChartLabel: FC<ChartLabelProps> = (props) => {
  const { x, y, width, label, value, orientation } = props;

  return (
    <div
      className="tf__chartLabel-line"
      style={{
        right: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
      }}
    >
      <div className="tf__chartLabel-label" style={orientation === 'left' ? { left: '0px' } : { right: '0px' }}>
        <Typography variant="token-pie-chart-label" color="inverted">
          {label}
        </Typography>
      </div>

      <div className="tf__chartLabel-percentage" style={orientation === 'left' ? { left: '0px' } : { right: '0px' }}>
        <Typography variant="token-pie-chart-label" color="inverted">
          {value}
        </Typography>
      </div>
    </div>
  );
};
export default ChartLabel;
