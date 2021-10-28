import React, { useCallback } from 'react';
import Typography from '../../typography/typography';

import './footer.scss';

const Footer = () => {
  const onPrivacyPolicyClick = useCallback(() => {
    window.open('https://tempus.finance/privacy-policy', '_blank');
  }, []);

  const onTermsOfServiceClick = useCallback(() => {
    window.open('https://tempus.finance/terms-of-service', '_blank');
  }, []);

  const onContactClick = useCallback(() => {
    window.open('mailto:contact@tempus.finance', '_blank');
  }, []);

  return (
    <div className="tf__footer__container">
      <Typography variant="join-body" color="inverted" clickable onClick={onPrivacyPolicyClick}>
        Privacy Policy
      </Typography>
      <Typography variant="join-body" color="inverted">
        &nbsp;-&nbsp;
      </Typography>
      <Typography variant="join-body" color="inverted" clickable onClick={onTermsOfServiceClick}>
        Terms of Service
      </Typography>
      <Typography variant="join-body" color="inverted">
        &nbsp;-&nbsp;
      </Typography>
      <Typography variant="join-body" color="inverted" clickable onClick={onContactClick}>
        Contact
      </Typography>
    </div>
  );
};
export default Footer;
