import React, { useEffect } from 'react';
import Footer from '../sections/footer/footer';
import Spacer from '../spacer/spacer';
import Typography from '../typography/typography';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tf__privacy-policy">
      <div className="tf__privacy-policy-content">
        <Typography variant="h1" color="inverted">
          Terms of Service
        </Typography>
        <Spacer size={26} orientation="vertical" />
        <Typography variant="h5" color="inverted">
          Last updated: 7 July 2021
        </Typography>
        <Spacer size={129} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Introduction
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          These Tempus - Terms of Service (the “Terms”), is issued by Tempus Labs Inc., a limited company based in the
          BVI (the “Issuer”) in association with Tempus Foundation Company, a foundation company based in Cayman Islands
          (the “Foundation”) (the Issuer and the Foundation together, “Tempus”, “we”, “us”). We own and operate the
          website https://tempus.finance/ (the &quot;Site&quot;) which acts as a front-end to the decentralized Tempus
          Protocol. These Terms apply to you (“You”) as a user of the Site and Tempus front-end, including all the
          products, services, tools and information made available on the Site.
          <br />
          <br />
          Please read these Terms carefully before using the Site. These Terms apply to any person accessing the Site
          and by using the Site you agree to be bound by them. If you don’t want to be bound by them, you should not
          access the Site. By using the Site in any capacity, you agree that you have read and understood these Terms.
          <br />
          <br />
          Please read these Terms carefully to ensure that you understand each provision. This agreement contains a
          mandatory individual arbitration and class action/jury trial waiver provision that requires the use of
          arbitration on an individual basis to resolve disputes, rather than jury trials or class actions.
          <br />
          <br />
          You must be able to form a legally binding contract online either as an individual or on behalf of a legal
          entity. You represent that, if you are agreeing to these Terms on behalf of a legal entity, you have the legal
          authority to bind the company or other legal entity to these Terms and you are at least 18 years old or the
          age of majority where you reside, whichever is older, can form a legally binding contract online, and have the
          full, right, power and authority to enter into and to comply with the obligations under these Terms.
          <br />
          <br />
          You are advised to check these Terms periodically to familiarise yourself with any changes to the Terms.
          Tempus in its sole discretion, reserves the right to make changes to our terms of services. Changes are
          binding on users of the Site and will take effect immediately upon posting. As a user, you agree to be bound
          by any changes, variations, or modifications to our terms of service and your continued use of the Site shall
          constitute acceptance of any such changes, variations, or modifications.
          <br />
          <br />
          Tempus will indicate on the Site of the changes to these Terms. You accept by doing so, we provide you with
          sufficient notice of such change.
          <br />
          <br />
          Our Privacy Policy and Cookie Policy also apply to your use of the Site.
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Site
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          As part of the Site, Tempus provides access to a decentralized finance application (“Application”) on the
          Ethereum blockchain, that allows suppliers and borrowers of certain cryptoassets to earn yields using smart
          contracts (“Smart Contracts”).
          <br />
          <br />
          Using the Tempus Protocol may require that you pay a fee, such as gas charges on the Ethereum network to
          perform a transaction. You acknowledge and agree that Tempus has no control over any transactions, the method
          of payment of any transactions, or any actual payments of transactions. You must ensure that you have a
          sufficient balance to complete any transaction on the Tempus Protocol before initiating such transaction.
          <br />
          <br />
          You acknowledge and agree that Tempus has no control over any transactions over Tempus Protocol, the method of
          payment of any transactions or any actual payments of transactions. Accordingly, you must ensure that you have
          a sufficient balance of the applicable cryptocurrency tokens stored at your Tempus Protocol-compatible wallet
          address (“Cryptocurrency Wallet”) to complete any transaction on the Tempus Protocol or the Ethereum network
          before initiating such transaction.
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Access to the Site
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          Access to the Site is provided “as is” and “as available” basis only. We do not guarantee that the Site, or
          any content on it, will always be available or uninterrupted. From time to time, access may be interrupted,
          suspended or restricted, including because of a fault, error or unforeseen circumstances or because we are
          carrying out planned maintenance.
          <br />
          <br />
          We reserve the right to limit the availability of the site to any person, geographic area or jurisdiction we
          so desire and/or to terminate your access to and use of the site, at any time and in our sole discretion.
          <br />
          <br />
          We may suspend or disable your access to the Site if we consider it reasonable to do so, e.g. you breach these
          Terms.
          <br />
          <br />
          We may remove or amend the content of the Site at any time. However, some of the content may be out of date at
          any given time and we are under no obligation to update it. We do not guarantee that the Site, or any content
          on it, will be free from errors or omissions.
          <br />
          <br />
          We will not be liable to you for any loss or damage you may suffer as a result of the Site being unavailable
          at any time for any reason.
          <br />
          <br />
          You will comply with all applicable domestic and international laws, statutes, ordinances and regulations
          applicable to your use of the site.
          <br />
          <br />
          As a condition to accessing or using the the Site, you:
          <ul>
            <li>Will only use the Services and the Site for lawful purposes and in accordance with these Terms;</li>
            <li>Will ensure that all information that you provide on the Site is current, complete, and accurate;</li>
            <li>Will maintain the security and confidentiality of access to your cryptocurrency wallet address.</li>
          </ul>
          As a condition to accessing or using the Site or the Services, you will not:
          <ul>
            <li>
              Violate any Applicable Law, including, without limitation, any relevant and applicable anti-money
              laundering and anti-terrorist financing laws and any relevant and applicable privacy and data collection
              laws, in each case as may be amended.
            </li>
            <li>Use the Site for any purpose that is unlawful;</li>
            <li>
              Export, reexport, or transfer, directly or indirectly, any Tempus technology in violation of applicable
              export laws or regulations;
            </li>
            <li>
              Infringe on or misappropriate any contract, intellectual property or other third-party right, or commit a
              tort while using the Site;
            </li>
            <li>Misrepresent the truthfulness, sourcing or reliability of any content on the Site;</li>
            <li>
              Use the Site in any manner that could interfere with, disrupt, negatively affect, or inhibit other users
              from fully enjoying the Site or the Tempus Protocol, or that could damage, disable, overburden, or impair
              the functioning of the Site or the Tempus Protocol in any manner;
            </li>

            <li>
              Attempt to circumvent any content filtering techniques or security measures that Tempus employs on the
              Site, or attempt to access any service or area of the Site that you are not authorized to access;
            </li>
            <li>
              Use any robot, spider, crawler, scraper, or other automated means or interface not provided by us, to
              access the Site to extract data;
            </li>
            <li>
              Introduce any malware, virus, Trojan horse, worm, logic bomb, drop-dead device, backdoor, shutdown
              mechanism or other harmful material into the Site;
            </li>
            <li>
              Post content or communications on the Site that are, in our sole discretion, libelous, defamatory,
              profane, obscene, pornographic, sexually explicit, indecent, lewd, vulgar, suggestive, harassing, hateful,
              threatening, offensive, discriminatory, bigoted, abusive, inflammatory, fraudulent, deceptive or otherwise
              objectionable;
            </li>
            <li>
              Post content on the Site containing unsolicited promotions, commercial messages or any chain messages or
              user content designed to deceive or trick the user of the Site;
            </li>
            <li>
              Encourage or induce any third party to engage in any of the activities prohibited under these Terms.
            </li>
          </ul>
          You acknowledge that the Site and your use of the Site contain certain risks, including without limitation the
          following risks:
          <ul>
            <li>
              That any Smart Contracts you interact with are entirely your own responsibility and liability, and that
              Tempus is not party to the Smart Contracts;
            </li>
            <li>
              At any time, your access to your cryptoassets may be suspended or terminated or there may be a delay in
              your access or use of your cryptoassets which may result in the cryptoassets diminishing in value or you
              being unable to complete a Smart Contract;
            </li>
            <li>
              And site and/or application may be suspended or terminated for any or no reason, which may limit your
              access to your cryptoassets.
            </li>
          </ul>
          Accordingly, you expressly agree that:
          <ul>
            <li>
              You assume all risk in connection with your access and use of the Site, the Application and the Smart
              Contracts;
            </li>
            <li>
              That you expressly waive and release Tempus from any and all liability, claims, causes of action, or
              damages arising from or in any way related to your use of the Site, the Application or the Smart
              Contracts.
            </li>
          </ul>
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Third-Party Links
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          The Site may contain hyperlinks or references to third party websites. Any such hyperlinks or references are
          provided for your information and convenience only. We have no control over third party websites and accept no
          legal responsibility for any content, material or information contained in them. The display of any hyperlink
          and reference to any third-party website does not mean that we endorse that third party&apos;s website,
          products or services. Your use of a third-party site may be governed by the terms and conditions of that
          third-party site.
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Privacy Policy and Cookie Policy
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          Certain areas of our website may record and collect information about you. You can find more information about
          how we will process your personal information in our Privacy Policy. When you use the Site, we may collect
          information about your computer and your interaction with the Site. See our Cookie Policy for more
          information.
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Intellectual Property Rights
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          We are the owner of all intellectual property rights in the Site and the material published on them. These
          works are protected by copyright laws and all such rights are reserved. www.tempus.finance is the uniform
          resource locator (‘URL’) of Tempus. You will not make use of this URL (or any other URL owned by us) on
          another website or digital platform without our prior written consent.
          <br />
          <br />
          You agree not to monitor, use or copy our web pages without our prior consent. Any unauthorised use or
          reproduction may be prosecuted.You will retain ownership of all copyright in data you upload or submit to the
          Site. You grant us a worldwide, royalty-free, irrevocable licence to use, copy, distribute or publish and send
          this data in any manner.
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Disclaimers
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          We do not guarantee that the Site will be secure or free from bugs or viruses.
          <br />
          <br />
          You are responsible for configuring your information technology, computer programmes and platform in order to
          access the Site. You should use your own virus protection software.
          <br />
          <br />
          We cannot promise that the use of the Site, or any content taken from the Site, will not infringe the rights
          of any third party.
          <br />
          <br />
          The content and materials available on the Site are for informational purposes only and is not intended to
          address your particular requirements. In particular, the content and materials available on the Site does not
          constitute any form of advice or recommendation by us, should not be regarded as an offer, solicitation,
          invitation or recommendation to buy or sell investments, securities or any other financial services and is not
          intended to be relied upon by you in making any specific investment or other decisions. We recommend that you
          seek independent advice from financial advisory before making any such decision.
          <br />
          <br />
          Nothing included in the site constitutes an offer or solicitation to sell, or distribution of, investments and
          related services to anyone in any jurisdiction. From time to time, reference may be made to data we have
          gathered. These references may be selective or, may be partial. As markets change continuously, previously
          published information and data may not be current and should not be relied upon.
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          General
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          We may perform any of our obligations, and exercise any of the rights granted to us under these Terms, through
          a third-party. We may assign any or all our rights and obligations under these Terms to any third-party.
          <br />
          <br />
          If any clause or part of any clause of these Terms is found to be void, unenforceable or invalid, then it will
          be severed from these Terms, leaving the remainder in full force and effect, provided that the severance has
          not altered the basic nature of these Terms.
          <br />
          <br />
          No single or partial exercise, or failure or delay in exercising any right, power or remedy by us shall
          constitute a waiver by us of, or impair or preclude any further exercise of, that or any right, power or
          remedy arising under these terms and conditions or otherwise.
          <br />
          <br />
          If any of the provisions in these Terms are found to be illegal, invalid or unenforceable by any court of
          competent jurisdiction, the remainder shall continue in full force and effect.
          <br />
          <br />
          All disclaimers, indemnities and exclusions in these Terms shall survive termination of the Terms and shall
          continue to apply during any suspension or any period during which the Site is not available for you to use
          for any reason whatsoever.
          <br />
          <br />
          These Terms and the documents referred to in them set out the entire agreement between you and us with respect
          to your use of the site, Tempus and the services provided via the site and supersede any and all prior or
          contemporaneous representations, communications or agreements (written or oral) made between you or us.
          <br />
          <br />
          Any dispute, controversy, or claim arising out of or in relation to these Terms, including the validity,
          invalidity, breach or termination thereof, shall be settled by arbitration in accordance with the laws of the
          Cayman Islands. The number of arbitrators shall be one or three; the seat of the arbitration shall be
          determined by the arbitrator(s); the arbitral proceedings shall be conducted in English. The applicable law
          shall be Cayman Islands law.
          <br />
          <br />
          With respect to all persons and entities, regardless of whether they have obtained or used the site for
          personal, commercial or other purposes, all disputes, controversies or claims must be brought in the parties’
          individual capacity, and not as a plaintiff or class member in any purported class action, collective action
          or other representative proceeding. This waiver applies to class arbitration, and, unless we agree otherwise,
          the arbitrator may not consolidate more than one person’s claims. You agree that, by entering into this
          agreement, you and Tempus are each waiving the right to a trial by jury or to participate in a class action,
          collective action, or other representative proceeding of any kind.
        </Typography>

        <Spacer size={60} orientation="vertical" />
        <Typography variant="h3" color="inverted">
          Contact Us
        </Typography>
        <Spacer size={20} orientation="vertical" />
        <Typography variant="body-text" color="inverted">
          Should you have any question about these Terms, or wish to contact us for any reason whatsoever, please do so
          by sending us an email at contact@tempus.finance.
        </Typography>
        <Spacer size={200} orientation="vertical" />
      </div>
      <Footer />
    </div>
  );
};
export default TermsOfService;
