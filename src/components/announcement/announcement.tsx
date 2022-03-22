import { useCallback, useState } from 'react';
import ExternalLink from '../common/externalLink';
import CrossIcon from '../icons/cross';
import ArrowRight2 from '../icons/arrowRight2';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';

import './announcement.scss';

const Announcement = () => {
  const [showAnnouncement, setShowAnnouncement] = useState<boolean>(true);

  const onClose = useCallback(() => setShowAnnouncement(false), []);

  if (!showAnnouncement) {
    return null;
  }

  return (
    <div className="tf__announcement__container">
      <Typography variant="h5" color="inverted">
        Treasury Management solution now live
      </Typography>
      <Spacer type="horizontal" size={4} />
      <Typography variant="h5" color="inverted">
        🎉
      </Typography>
      <Spacer type="horizontal" size={8} />
      <Typography variant="h5" color="inverted">
        Check out this article for more info
      </Typography>
      <Spacer type="horizontal" size={16} />
      <ExternalLink href="https://medium.com/tempusfinance/introducing-the-tempus-defi-treasury-management-solution-5bf1d8fb3f95">
        <ArrowRight2 />
      </ExternalLink>
      <button onClick={onClose}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default Announcement;
