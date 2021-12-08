import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../sections/footer/footer';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tf__privacy-policy">
      <div className="tf__privacy-policy-content">
        <Typography variant="h1" color="inverted">
          Tempus
        </Typography>
        <Typography variant="h1" color="inverted">
          Protocol Disclaimer
        </Typography>
        <Spacer size={129} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          Tempus Protocol (the “Protocol”) is a decentralized finance application deployed on the Ethereum blockchain
          that allows suppliers and borrowers of certain cryptoassets to earn yields using smart contracts. The Protocol
          is made up of free, public, open-source or source-available software. Your use of the Protocol involves
          various risks, including, but not limited to, losses while cryptoassets are supplied to the Protocol, losses
          due to the fluctuation of prices of tokens in a pool, and losses due to price slippage and cost. Before using
          the Protocol, you should review the relevant documentation from our GitHub to ensure you understand how the
          Protocol works. Additionally, just as you can access email protocols such as SMTP through multiple email
          clients, you can access the Protocol through various web and mobile interfaces. You are responsible for doing
          your own due diligence on these interfaces to understand the fees and risks they present.
          <br />
          <br />
          AS DESCRIBED IN THE TEMPUS <Link to="/terms-of-service">TERMS OF SERVICE</Link>, THE PROTOCOL IS PROVIDED “AS
          IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND. Although Tempus Labs, Inc. (trading as “Tempus”)
          developed much of the code for the Protocol, Tempus does not provide, own, or control the Protocol, which is
          run by smart contracts deployed on the Ethereum blockchain. Upgrades and modifications to the Protocol are
          managed in a community-driven way by governance by holders of the TEMP governance token. No Tempus developer
          or entity involved in creating the Protocol will be liable for any claims or damages whatsoever associated
          with your use, inability to use, or your interaction with other users of, the Protocol, including any direct,
          indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits,
          cryptocurrencies, tokens, or anything else of value.
          <br />
          <br />
          By accessing or using the Protocol, you signify that you have read, understand, and agree with this
          Disclaimer. If you do not agree with this Disclaimer, you are not authorised to access or use the Protocol and
          should not use the Protocol.
        </Typography>

        <Spacer size={200} orientation="vertical" />
      </div>
      <Footer />
    </div>
  );
};
export default Disclaimer;
