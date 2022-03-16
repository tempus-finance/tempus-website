import { Link } from 'react-router-dom';
import ExternalLink from '../../common/externalLink';
import Typography from '../../typography/typography';

import './footer.scss';

const Footer = () => {
  return (
    <div className="tf__footer__container">
      <Link to="/terms-of-service">
        <Typography variant="join-body" color="inverted" clickable underline>
          Terms of Service
        </Typography>
      </Link>
      <Typography variant="join-body" color="inverted" desktopOnly>
        &nbsp;-&nbsp;
      </Typography>
      <Link to="/disclaimer">
        <Typography variant="join-body" color="inverted" clickable underline>
          Disclaimer
        </Typography>
      </Link>
      <Typography variant="join-body" color="inverted" desktopOnly>
        &nbsp;-&nbsp;
      </Typography>
      <Link to="/privacy-policy">
        <Typography variant="join-body" color="inverted" clickable underline>
          Privacy Policy
        </Typography>
      </Link>
      <Typography variant="join-body" color="inverted" desktopOnly>
        &nbsp;-&nbsp;
      </Typography>
      <ExternalLink href="mailto:contact@tempus.finance">
        <Typography variant="join-body" color="inverted" clickable underline>
          Contact
        </Typography>
      </ExternalLink>
    </div>
  );
};
export default Footer;
