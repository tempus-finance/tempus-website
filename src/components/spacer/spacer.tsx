import React, { FC } from 'react';

interface SpacerProps {
  size: number;
  orientation: 'horizontal' | 'vertical';
}

const Spacer: FC<SpacerProps> = (props) => {
  const { size, orientation } = props;

  return (
    <div
      style={
        orientation === 'horizontal'
          ? {
              width: `${size}px`,
              height: '0px',
            }
          : {
              width: '0px',
              height: `${size}px`,
            }
      }
    />
  );
};
export default Spacer;
