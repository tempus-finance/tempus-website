import React, { FC } from 'react';

import './button.scss';

interface ButtonProps {
  width?: string;
  height?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { width, height, onClick, children } = props;

  return (
    <div className="tf__button__container" style={{ width, height }} onClick={onClick} aria-hidden="true">
      {children}
    </div>
  );
};

Button.defaultProps = {
  width: '',
  height: '',
  onClick: undefined,
};

export default Button;
