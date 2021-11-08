import React, { FC } from 'react';

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

const CrossIcon: FC<IconProps> = (props) => {
  const { width, height, color } = props;
  return (
    <svg
      width={width || '14'}
      height={height || '14px'}
      viewBox={`0 0 ${width || '14'} ${height || '14'}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.65565 12.6571L7.3125 7.00023M7.3125 7.00023L12.9694 1.34338M7.3125 7.00023L12.9694 12.6571M7.3125 7.00023L1.65565 1.34338"
        stroke={color || 'white'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
CrossIcon.defaultProps = {
  color: 'white',
  height: '14px',
  width: '14px',
};

export default CrossIcon;
