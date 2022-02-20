import Profile from '../../../interfaces/Profile';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';
import GithubBtn from './githubBtn';
import LinkedInBtn from './linkedInBtn';
import ProfilePic from './profilePic';
import TwitterBtn from './twitterBtn';

import './profile.scss';

const ProfileCard = (props: Profile) => {
  const { name, avatar, title, twitter, linkedIn, github, desc } = props;

  return (
    <div className="tf__team-page__profile">
      <ProfilePic url={avatar} />
      <Spacer size={13} type="vertical" />
      <Typography variant="team-member-name" color="inverted">
        {name}
      </Typography>
      <Spacer size={8} type="vertical" />
      <Typography variant="team-member-desc" color="inverted">
        {title}
      </Typography>
      <Spacer size={22} type="vertical" />
      <div className="tf__team-page__profile-social">
        <TwitterBtn url={twitter} />
        <LinkedInBtn url={linkedIn} />
        <GithubBtn url={github} />
      </div>
      <Spacer size={22} type="vertical" />
      <Typography variant="team-member-desc" color="inverted">
        {desc}
      </Typography>
    </div>
  );
};

export default ProfileCard;
