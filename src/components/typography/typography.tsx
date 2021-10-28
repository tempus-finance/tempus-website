import React, { CSSProperties, FC } from 'react';
import ReactHTMLParser from 'react-html-parser';

import './typography.scss';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'header-label'
  | 'dynamic-number-label'
  | 'dynamic-number'
  | 'about-text'
  | 'security-card-label'
  | 'faq-header'
  | 'body-text'
  | 'date'
  | 'footer-header'
  | 'join-header'
  | 'join-body'
  | 'get-involved-card-button';
type TypographyColor = 'default' | 'accent' | 'inverted' | 'link';

const typographyStyleMap = new Map<TypographyVariant, CSSProperties>();
typographyStyleMap.set('h1', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '70px',
  lineHeight: '110%',
});
typographyStyleMap.set('h2', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '44px',
});
typographyStyleMap.set('dynamic-number-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '110%',
});
typographyStyleMap.set('dynamic-number', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '110%',
});
typographyStyleMap.set('about-text', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '42px',
  lineHeight: '120%',
});
typographyStyleMap.set('h3', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
});
typographyStyleMap.set('h4', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '28px',
  lineHeight: '110%',
  letterSpacing: '-0.025em',
});
typographyStyleMap.set('h5', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '22px',
});
typographyStyleMap.set('security-card-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyStyleMap.set('faq-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '22px',
  lineHeight: '30px',
});
typographyStyleMap.set('body-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyStyleMap.set('date', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '160%',
});
typographyStyleMap.set('date', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '160%',
});
typographyStyleMap.set('footer-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '80px',
  lineHeight: '120%',
});
typographyStyleMap.set('join-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '22px',
  lineHeight: '30px',
});
typographyStyleMap.set('join-body', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyStyleMap.set('header-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
});
typographyStyleMap.set('get-involved-card-button', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '28px',
});

interface TypographyProps {
  variant: TypographyVariant;
  color?: TypographyColor;
  capitalize?: boolean;
  align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent' | 'unset';
  html?: string;
  gradient?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

const Typography: FC<TypographyProps> = (props) => {
  const { color, capitalize, align, variant, html, gradient, clickable, onClick, children } = props;

  let colorCode: string;
  switch (color) {
    case 'default':
      colorCode = '#222222';
      break;
    case 'inverted':
      colorCode = '#FFFFFF';
      break;
    case 'accent':
      colorCode = '#288195';
      break;
    default:
      colorCode = '#222222';
  }

  if (gradient) {
    colorCode = 'transparent';
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={gradient ? 'tf__typography__gradient' : ''}
      style={{
        ...typographyStyleMap.get(variant),
        color: colorCode,
        textTransform: capitalize ? 'capitalize' : 'none',
        textAlign: align,
        backgroundImage: gradient ? 'linear-gradient(97.53deg, #5098A9 0%, #285A95 100%)' : 'unset',
        cursor: clickable ? 'pointer' : 'default',
      }}
      aria-hidden="true"
      onClick={handleClick}
    >
      {html ? ReactHTMLParser(html) : children}
    </div>
  );
};

Typography.defaultProps = {
  color: 'default',
  align: 'unset',
  capitalize: false,
  html: '',
  gradient: false,
  clickable: false,
  onClick: undefined,
};

export default Typography;
