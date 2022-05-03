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
        Tempus DAO is broadening its horizons beyond just fixed income. 🏜️ Check out our our&nbsp;
        <ExternalLink href="https://medium.com/tempusfinance/tempus-the-road-ahead-6acffd441d6a">
          recent blog post
        </ExternalLink>
        &nbsp;to find out more.
      </Typography>
      <Spacer type="horizontal" size={16} />
      <ExternalLink href="https://medium.com/tempusfinance/tempus-the-road-ahead-6acffd441d6a">
        <ArrowRight2 />
      </ExternalLink>
      <button onClick={onClose}>
        <CrossIcon />
      </button>
    </div>
  );
};

export default Announcement;
