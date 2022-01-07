import React, { FC } from 'react';
import Button from '../../../button/button';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './getInvolvedCard.scss';

interface GetInvolvedCardProps {
  title: string;
  description: string;
}

const GetInvolvedCard: FC<GetInvolvedCardProps> = (props) => {
  const { title, description } = props;

  return (
    <div className="tf__get-involved-card__content">
      <div>
        <Typography variant="h4" color="inverted">
          {title}
        </Typography>
        <Spacer size={20} type="vertical" />
        <Typography variant="get-involved-car-text" color="inverted">
          {description}
        </Typography>
      </div>
      <Spacer size={30} type="vertical" />
      <div className="tf__get-involved-card__action-button-container">
        <Button width="180px">
          <Typography variant="get-involved-card-button" clickable>
            Coming soon
          </Typography>
        </Button>
      </div>
    </div>
  );
};
export default GetInvolvedCard;
