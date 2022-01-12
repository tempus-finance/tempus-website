import React, { FC } from 'react';
import Spacer from '../../../../spacer/spacer';
import Typography from '../../../../typography/typography';

import './card.scss';

interface CardProps {
  title: string;
  headerIcon: React.ReactNode;
  text: string;
}

const Card: FC<CardProps> = (props) => {
  const { title, headerIcon, text } = props;

  return (
    <div className="tf__card">
      <div className="tf__card-header">
        <Typography variant="h3" color="inverted">
          {title}
        </Typography>
        <Spacer size={15} type="vertical" />
        {headerIcon}
      </div>
      <div className="tf__card-body">
        <Typography variant="token-section-text" html={text} />
      </div>
    </div>
  );
};
export default Card;
