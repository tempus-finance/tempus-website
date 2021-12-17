import React, { FC } from 'react';
import IconProps from './iconProps';

const ArrowDown: FC<IconProps> = (props) => {
  const { fillColor } = props;

  return (
    <svg width="14" height="6" viewBox="0 0 14 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 6L0.937822 0.75L13.0622 0.750001L7 6Z" fill={fillColor || '#222222'} />
    </svg>
  );
};
export default ArrowDown;
