import React, { FC } from 'react';
import IconProps from './iconProps';

const MenuIcon: FC<IconProps> = (props) => {
  const { fillColor } = props;

  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 12H0V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z" fill={fillColor || '#222222'} />
    </svg>
  );
};
export default MenuIcon;
