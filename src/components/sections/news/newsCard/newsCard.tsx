import React, { FC, useCallback } from 'react';
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

  const onReadMoreClick = useCallback(() => {
    window.open(link, '_blank');
  }, []);

  return (
    <div className="tf__newsCard">
      <div className="tf__newsCard-image" style={{ backgroundImage: `url('${thumbnail}')` }} />
      <div className="tf__newsCard-content">
        <div className="tf__newsCard-date">
          <Typography variant="date">{date}</Typography>
        </div>
        <Spacer size={14} type="vertical" />
        <Typography variant="h5">{title}</Typography>
        <Spacer size={13} type="vertical" />
        <div className="tf__newsCard-description">
          <Typography variant="body-text" html={description} />
        </div>
        <Spacer size={20} type="vertical" />
        <div className="tf__newsCard-action">
          <Typography variant="body-text" color="accent" clickable onClick={onReadMoreClick}>
            Read More
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
