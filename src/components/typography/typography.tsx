import React, { CSSProperties, FC } from 'react';
import parse from 'html-react-parser';

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
  | 'get-involved-car-text'
  | 'get-involved-card-button'
  | 'banner-title'
  | 'banner-text'
  | 'banner-large-text'
  | 'investor-name'
  | 'token-description'
  | 'token-stat-value'
  | 'token-section-background'
  | 'token-section-text'
  | 'token-legend-label'
  | 'token-pie-chart-label'
  | 'tempus-description-header'
  | 'tempus-description-body'
  | 'network-card-title'
  | 'network-card-text'
  | 'network-card-button'
  | 'team-title'
  | 'team-company'
  | 'team-member-name'
  | 'team-member-desc';
type TypographyColor = 'default' | 'accent' | 'inverted' | 'link' | 'gray' | 'orange';

const typographyStyleMap = new Map<TypographyVariant, CSSProperties>();
typographyStyleMap.set('h1', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '56px',
  lineHeight: '110%',
});
typographyStyleMap.set('h2', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '28px',
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
  lineHeight: '160%',
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
typographyStyleMap.set('get-involved-car-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '160%',
});
typographyStyleMap.set('get-involved-card-button', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '28px',
});
typographyStyleMap.set('banner-title', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '40px',
  lineHeight: '110%',
});
typographyStyleMap.set('banner-text', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '110%',
});
typographyStyleMap.set('banner-large-text', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '110%',
});
typographyStyleMap.set('investor-name', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '160%',
});
typographyStyleMap.set('token-description', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '44px',
});
typographyStyleMap.set('token-stat-value', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '110%',
});
typographyStyleMap.set('token-section-background', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '160px',
  lineHeight: '120%',
});
typographyStyleMap.set('token-section-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '28px',
});
typographyStyleMap.set('token-legend-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',
});
typographyStyleMap.set('token-pie-chart-label', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '27px',
});
typographyStyleMap.set('tempus-description-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '38.25px',
});
typographyStyleMap.set('tempus-description-body', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '32px',
});
typographyStyleMap.set('network-card-title', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '110%',
});
typographyStyleMap.set('network-card-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '110%',
});
typographyStyleMap.set('network-card-button', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyStyleMap.set('team-title', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '55px',
  lineHeight: '110%',
});
typographyStyleMap.set('team-company', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '50.4px',
});
typographyStyleMap.set('team-member-name', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '38.25px',
});
typographyStyleMap.set('team-member-desc', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '21.86px',
});

const typographyMobileStyleMap = new Map<TypographyVariant, CSSProperties>();
typographyMobileStyleMap.set('h1', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '42px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('h2', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('dynamic-number-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('dynamic-number', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('about-text', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
});
typographyMobileStyleMap.set('h3', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '120%',
});
typographyMobileStyleMap.set('h4', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '28px',
  lineHeight: '110%',
  letterSpacing: '-0.025em',
});
typographyMobileStyleMap.set('h5', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '22px',
});
typographyMobileStyleMap.set('security-card-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('faq-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '22px',
  lineHeight: '30px',
});
typographyMobileStyleMap.set('body-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('date', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('footer-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '120%',
});
typographyMobileStyleMap.set('join-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '22px',
  lineHeight: '30px',
});
typographyMobileStyleMap.set('join-body', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('header-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '20px',
});
typographyMobileStyleMap.set('get-involved-car-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('get-involved-card-button', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '22px',
  lineHeight: '28px',
});
typographyMobileStyleMap.set('banner-title', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('banner-text', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('banner-large-text', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('investor-name', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('token-description', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '26px',
  lineHeight: '36px',
});
typographyMobileStyleMap.set('token-stat-value', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '48px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('token-section-background', {
  display: 'none',
});
typographyMobileStyleMap.set('token-section-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '28px',
});
typographyMobileStyleMap.set('token-legend-label', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',
});
typographyMobileStyleMap.set('token-pie-chart-label', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '27px',
});
typographyMobileStyleMap.set('tempus-description-header', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '38.25px',
});
typographyMobileStyleMap.set('tempus-description-body', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '32px',
});
typographyMobileStyleMap.set('network-card-title', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('network-card-text', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('network-card-button', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '160%',
});
typographyMobileStyleMap.set('team-title', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '38px',
  lineHeight: '110%',
});
typographyMobileStyleMap.set('team-company', {
  fontFamily: "'Source Sans Pro', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  lineHeight: '33.6px',
});
typographyMobileStyleMap.set('team-member-name', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '28px',
  lineHeight: '38.25px',
});
typographyMobileStyleMap.set('team-member-desc', {
  fontFamily: "'Manrope', sans-serif",
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '21.86px',
});

interface TypographyProps {
  className?: string;
  variant: TypographyVariant;
  color?: TypographyColor;
  opacity?: number;
  capitalize?: boolean;
  align?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent' | 'unset';
  html?: string;
  gradient?: boolean;
  clickable?: boolean;
  underline?: boolean;
  desktopOnly?: boolean;
  onClick?: () => void;
}

const Typography: FC<TypographyProps> = (props) => {
  const {
    className,
    color,
    opacity,
    capitalize,
    align,
    variant,
    html,
    gradient,
    clickable,
    underline,
    desktopOnly,
    onClick,
    children,
  } = props;

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
    case 'gray':
      colorCode = '#7A7A7A';
      break;
    case 'orange':
      colorCode = '#FF842C';
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

  let classes = className;
  if (underline) {
    classes += 'tf__typography_underline_hover';
  }
  if (gradient) {
    classes += 'tf__typography__gradient';
  }

  return (
    <>
      <div
        className={`${classes} tf__typography-desktop`}
        style={{
          ...typographyStyleMap.get(variant),
          color: colorCode,
          textTransform: capitalize ? 'capitalize' : 'none',
          textAlign: align,
          backgroundImage: gradient ? 'linear-gradient(97.53deg, #5098A9 0%, #285A95 100%)' : 'unset',
          cursor: clickable ? 'pointer' : 'default',
          opacity: opacity ? opacity.toString() : '1',
        }}
        aria-hidden="true"
        onClick={handleClick}
      >
        {html ? parse(html) : children}
      </div>
      {!desktopOnly && (
        <div
          className={`${classes} tf__typography-mobile`}
          style={{
            ...typographyMobileStyleMap.get(variant),
            color: colorCode,
            textTransform: capitalize ? 'capitalize' : 'none',
            textAlign: align,
            backgroundImage: gradient ? 'linear-gradient(97.53deg, #5098A9 0%, #285A95 100%)' : 'unset',
            cursor: clickable ? 'pointer' : 'default',
          }}
          aria-hidden="true"
          onClick={handleClick}
        >
          {html ? parse(html) : children}
        </div>
      )}
    </>
  );
};

Typography.defaultProps = {
  className: '',
  color: 'default',
  opacity: 1,
  align: 'unset',
  capitalize: false,
  html: '',
  gradient: false,
  clickable: false,
  onClick: undefined,
  underline: false,
  desktopOnly: false,
};

export default Typography;
