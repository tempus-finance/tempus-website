import React, { FC } from 'react';

interface SpacerProps {
  size: number;
  type: 'horizontal' | 'vertical' | 'box';
}

const Spacer: FC<SpacerProps> = (props) => {
  const { size, type } = props;

  let width = size;
  let height = size;
  if (type === 'horizontal') {
    height = 0;
  }
  if (type === 'vertical') {
    width = 0;
  }

  return (
    <div
      className="tf__spacer"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};
export default Spacer;
