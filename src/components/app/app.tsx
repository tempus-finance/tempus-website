import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Background from '../background/background';
import Graph from '../graph/graph';
import FooterLogo from '../logo/footer-logo';
import Navbar from '../navbar/navbar';
import PrivacyPolicy from '../privacyPolicy/privacyPolicy';
import FAQ from '../sections/faq/faq';
import Footer from '../sections/footer/footer';
import GetInvolved from '../sections/getInvolved/getInvolved';
import Investors from '../sections/investors/investors';
import Main from '../sections/main/main';
import News from '../sections/news/news';
import Protocols from '../sections/protocols/protocols';
import Security from '../sections/security/security';
import Social from '../sections/social/social';
import TermsOfService from '../termsOfService/termsOfService';

import './app.scss';

const App = () => (
  <div className="tf__app__content">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-of-service">
          <TermsOfService />
        </Route>
        <Route path="/">
          <Background />
          <Main />
          {/* Removed until we go on mainnet <Stats /> */}
          <Protocols />
          <Graph />
          <GetInvolved />
          <FAQ />
          <Security />
          <div className="tf__app__sections-gradient-wrapper">
            <Investors />
            <News />
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
