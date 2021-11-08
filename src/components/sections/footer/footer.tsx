import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '../../typography/typography';

import './footer.scss';

const Footer = () => {
  const history = useHistory();

  const onPrivacyPolicyClick = useCallback(() => {
    history.push('/privacy-policy');
  }, []);

  const onTermsOfServiceClick = useCallback(() => {
    history.push('/terms-of-service');
  }, []);

  const onContactClick = useCallback(() => {
    window.open('mailto:contact@tempus.finance', '_blank');
  }, []);

  return (
    <div className="tf__footer__container">
      <Typography variant="join-body" color="inverted" clickable underline onClick={onPrivacyPolicyClick}>
        Privacy Policy
      </Typography>
      <Typography variant="join-body" color="inverted">
        &nbsp;-&nbsp;
      </Typography>
      <Typography variant="join-body" color="inverted" clickable underline onClick={onTermsOfServiceClick}>
        Terms of Service
      </Typography>
      <Typography variant="join-body" color="inverted">
        &nbsp;-&nbsp;
      </Typography>
      <Typography variant="join-body" color="inverted" clickable underline onClick={onContactClick}>
        Contact
      </Typography>
    </div>
  );
};
export default Footer;
