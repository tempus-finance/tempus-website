import { useCallback, useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';
import ProfileCard from './profile/profileCard';
import members from './members';

import companyImg01 from './companies/Allen_and_Overy.png';
import companyImg02 from './companies/Bancor.png';
import companyImg03 from './companies/barclaycard.png';
import companyImg04 from './companies/ethereum_foundation.png';
import companyImg05 from './companies/Goldman_Sachs.png';
import companyImg06 from './companies/lendinvest.png';
import companyImg07 from './companies/Linklaters.png';
import companyImg08 from './companies/microsoft.png';
import companyImg09 from './companies/Swedbank.png';

import './teamPage.scss';

const TeamPage = () => {
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);
  const setInView = useCallback((inView) => setScrolledDown(inView), [setScrolledDown]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`tf__team-page ${scrolledDown ? 'scrolled-down' : ''}`}>
      <div className="tf__team-page-title">
        <Typography variant="team-title">Meet the Tempus Labs team</Typography>
      </div>
      <Spacer size={436} type="vertical" />
      <div className="tf__team-page-profiles">
        {members.map((member) => (
          <ProfileCard {...member} key={member.name.replaceAll(' ', '')} />
        ))}
      </div>
      <Spacer size={50} type="vertical" />
      <div className="tf__team-page-company-title">
        <Typography variant="team-company" align="center" color="inverted">
          Our team has worked with some of the world's leading organizations
        </Typography>
      </div>
      <Spacer size={57} type="vertical" />
      <div className="tf__team-page-companies">
        <div className="tf__team-page-company-images">
          <div className="tf__team-page-company-images-container">
            <div className="tf__team-page-company-slide">
              <img src={companyImg01} />
              <img src={companyImg02} />
              <img src={companyImg03} />
            </div>
            <div className="tf__team-page-company-slide">
              <img src={companyImg04} />
              <img src={companyImg05} />
              <img src={companyImg06} />
            </div>
            <div className="tf__team-page-company-slide">
              <img src={companyImg07} />
              <img src={companyImg08} />
              <img src={companyImg09} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg01} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg02} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg03} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg04} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg05} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg06} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg07} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg08} />
            </div>
            <div className="tf__team-page-company-slide mobile">
              <img src={companyImg09} />
            </div>
          </div>
        </div>
      </div>
      <InView as="div" className="tf__team-page__breakpoint" onChange={setInView} />
    </div>
  );
};

export default TeamPage;
