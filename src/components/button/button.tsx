import React, { FC } from 'react';

import './button.scss';

interface ButtonProps {
  width?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { width, onClick, children } = props;

  return (
    <div className="tf__button__container" style={{ width }} onClick={onClick} aria-hidden="true">
      {children}
    </div>
  );
};

Button.defaultProps = {
  width: '',
  onClick: undefined,
};

export default Button;
