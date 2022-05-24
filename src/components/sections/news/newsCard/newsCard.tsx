import React, { FC, useCallback } from 'react';
import ExternalLink from '../../../common/externalLink';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './newsCard.scss';

interface NewsCardProps {
  date: Date;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

const NewsCard: FC<NewsCardProps> = (props) => {
  const { date, title, description, link, thumbnail } = props;

  return (
    <ExternalLink className="tf__newsCard" href={link}>
      <div className="tf__newsCard-image" style={{ backgroundImage: `url('${thumbnail}')` }} />
      <div className="tf__newsCard-content">
        <div className="tf__newsCard-date">
          <Typography variant="date" clickable>
            {date}
          </Typography>
        </div>
        <Spacer size={14} type="vertical" />
        <Typography variant="h5" clickable>
          {title}
        </Typography>
        <Spacer size={13} type="vertical" />
        <div className="tf__newsCard-description">
          <Typography variant="body-text" html={description} clickable />
        </div>
        <Spacer size={20} type="vertical" />
        <Typography className="tf__newsCard-readmore" variant="body-text" color="accent" clickable>
          Read More
        </Typography>
      </div>
    </ExternalLink>
  );
};
export default NewsCard;
