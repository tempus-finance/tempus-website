import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from '../background/background';
import Disclaimer from '../disclaimer/disclaimer';
import Graph from '../graph/graph';
import FooterLogo from '../logo/footer-logo';
import Navbar from '../navbar/navbar';
import PrivacyPolicy from '../privacyPolicy/privacyPolicy';
import Banner from '../sections/banner/Banner';
import FAQ from '../sections/faq/faq';
import Footer from '../sections/footer/footer';
import GetInvolved from '../sections/getInvolved/getInvolved';
import Investors from '../sections/investors/investors';
import Main from '../sections/main/main';
import News from '../sections/news/news';
import Protocols from '../sections/protocols/protocols';
import Security from '../sections/security/security';
import Social from '../sections/social/social';
import Stats from '../sections/stats/stats';
import TeamPage from '../team/teamPage';
import TermsOfService from '../termsOfService/termsOfService';
import TokenPage from '../token/tokenPage';

import './app.scss';

const App = () => (
  <div className="tf__app__content">
    <Router>
      <Switch>
        <Route path="/team">
          <Navbar showAnnouncement />
          <TeamPage />
          <div className="tf__app__sections-gradient-wrapper">
            <Social />
            <Footer />
            <div className="tf__app__sections-footer-logo">
              <FooterLogo />
            </div>
          </div>
        </Route>
        <Route path={['/token', '/tokenomics']}>
          <Navbar showAnnouncement />
          <TokenPage />
          <div className="tf__app__sections-gradient-wrapper">
            <Social />
            <Footer />
            <div className="tf__app__sections-footer-logo">
              <FooterLogo />
            </div>
          </div>
        </Route>
        <Route path="/disclaimer">
          <Navbar />
          <Disclaimer />
        </Route>
        <Route path="/privacy-policy">
          <Navbar />
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-of-service">
          <Navbar />
          <TermsOfService />
        </Route>
        <Route path="/">
          <Navbar showAnnouncement />
          <Background />
          <Main />
          <div className="tf__mobile-only">
            <Banner />
          </div>
          <Stats />
          <Protocols />
          <Graph />
          <GetInvolved />
          <News />
          <Security />
          <div className="tf__app__sections-gradient-wrapper">
            <Investors />
            <FAQ />
            <Social />
            <Footer />
            <div className="tf__app__sections-footer-logo">
              <FooterLogo />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
