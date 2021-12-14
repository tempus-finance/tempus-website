import React, { FC, useState } from 'react';
import Divider from '../../../divider/divider';
import CrossIcon from '../../../icons/cross';
import PlusIcon from '../../../icons/plus';
import Spacer from '../../../spacer/spacer';
import Typography from '../../../typography/typography';

import './expandable.scss';

interface ExpandableProps {
  title: string;
  text: string;
}

const Expandable: FC<ExpandableProps> = (props) => {
  const { title, text } = props;

  const [expanded, setExpanded] = useState<boolean>(false);

  const onToggle = () => {
    setExpanded((prevValue) => !prevValue);
  };

  return (
    <div className="tf__expandable__container">
      <div className="tf__expandable__header" onClick={onToggle} aria-hidden="true">
        <Typography variant="faq-header" color="inverted" clickable>
          {title}
        </Typography>
        <div className="tf__expandable_icon">{expanded ? <CrossIcon /> : <PlusIcon />}</div>
      </div>
      {expanded && (
        <>
          <Spacer size={8} type="vertical" />
          <Typography variant="body-text" html={text} color="inverted" />
        </>
      )}
      <Spacer size={20} type="vertical" />
      <Divider />
      <Spacer size={20} type="vertical" />
    </div>
  );
};
export default Expandable;
