import React from 'react';
import Background from '../background/background';
import Navbar from '../navbar/navbar';
import FAQ from '../sections/faq/faq';
import Footer from '../sections/footer/footer';
import GetInvolved from '../sections/getInvolved/getInvolved';
import Investors from '../sections/investors/investors';
import Main from '../sections/main/main';
import News from '../sections/news/news';
import Protocols from '../sections/protocols/protocols';
import Security from '../sections/security/security';
import Social from '../sections/social/social';

import './app.scss';

const App = () => (
  <div className="tf__app__content">
    <Navbar />
    <Background />
    <Main />
    {/* Removed until we go on mainnet <Stats /> */}
    <Protocols />
    <GetInvolved />
    <FAQ />
    <Security />
    <div className="tf__app__sections-gradient-wrapper">
      <Investors />
      <News />
      <Social />
      <Footer />
    </div>
  </div>
);

export default App;
