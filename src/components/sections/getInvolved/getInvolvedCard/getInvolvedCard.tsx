import React, { FC, useCallback } from 'react';
import Button from '../../../button/button';
import ExternalLink from '../../../common/externalLink';
import LinkIcon from '../../../icons/linkIcon';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './getInvolvedCard.scss';

interface GetInvolvedCardProps {
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
}

const GetInvolvedCard: FC<GetInvolvedCardProps> = (props) => {
  const { title, description, actionText, actionLink } = props;

  const onActionClick = useCallback(() => {
    window.open(actionLink, '_blank');
  }, []);

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
        <Button onClick={onActionClick}>
          <ExternalLink href={actionLink}>
            <Typography variant="get-involved-card-button" clickable>
              {actionText}
            </Typography>
            <Spacer size={10} type="horizontal" />
            <LinkIcon />
          </ExternalLink>
        </Button>
      </div>
    </div>
  );
};
export default GetInvolvedCard;
