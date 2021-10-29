import React, { useCallback, useState } from 'react';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';
import Expandable from './expandable/expandable';

import './faq.scss';

type Tabs = 'general' | 'primitives' | 'rates' | 'integrations' | 'security';

const FAQ = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>('general');

  const onTabClick = useCallback((tab: Tabs) => {
    setSelectedTab(tab);
  }, []);

  return (
    <div className="tf__faq__container">
      <div className="tf__faq__content">
        <Typography variant="h3" color="inverted" align="center">
          Frequently asked questions
        </Typography>
        <Spacer size={46} orientation="vertical" />
        <div className="tf__faq__tabs-container">
          <div
            className={selectedTab === 'general' ? 'tf__faq__tab-selected' : 'tf__faq__tab'}
            onClick={() => onTabClick('general')}
            aria-hidden="true"
          >
            <Typography variant="body-text" clickable>
              General
            </Typography>
          </div>
          <div
            className={selectedTab === 'primitives' ? 'tf__faq__tab-selected' : 'tf__faq__tab'}
            onClick={() => onTabClick('primitives')}
            aria-hidden="true"
          >
            <Typography variant="body-text" clickable>
              Primitives
            </Typography>
          </div>
          <div
            className={selectedTab === 'rates' ? 'tf__faq__tab-selected' : 'tf__faq__tab'}
            onClick={() => onTabClick('rates')}
            aria-hidden="true"
          >
            <Typography variant="body-text" clickable>
              Rates
            </Typography>
          </div>
          <div
            className={selectedTab === 'integrations' ? 'tf__faq__tab-selected' : 'tf__faq__tab'}
            onClick={() => onTabClick('integrations')}
            aria-hidden="true"
          >
            <Typography variant="body-text" clickable>
              Integrations
            </Typography>
          </div>
          <div
            className={
              selectedTab === 'security' ? 'tf__faq__tab-no-border tf__faq__tab-selected' : 'tf__faq__tab-no-border'
            }
            onClick={() => onTabClick('security')}
            aria-hidden="true"
          >
            <Typography variant="body-text" clickable>
              Security
            </Typography>
          </div>
        </div>
        <Spacer size={36} orientation="vertical" />
        {selectedTab === 'general' && (
          <>
            <Expandable
              title="What is Tempus?"
              text="Tempus is a future yield tokenization and fixed rate protocol built on the Ethereum network. Tempus also functions as a yield aggregation tool that aims to deliver additional returns on yield bearing tokens."
            />
            <Expandable
              title="How does Tempus work?"
              text="Tempus allows users to deposit various yield bearing tokens (YBT) such as stETH (Lido Staked ETH) or aDAI (Aave Interest Bearing Dai) into contracts with select maturities. For ease, users will also be allowed to deposit the Backing Token (BT) such as ETH for direct deposit onto another platform through Tempus.<br /><br /> Tempus then separates the YBT into a Principals and Yields and allows users to:
            <ol>
              <li>Buy and sell interest rate protection using any supported Yield Bearing Token (such as stETH, cDai).</li>
              <li>Earn swap fees as a liquidity provider by depositing any supported Yield Bearing Token (on top of yield earned through yield farming protocols).</li>
            </ol>"
            />
            <Expandable
              title="How do I join the Tempus community?"
              text="You can join our Discord, follow us on Twitter or subscribe to our Medium."
            />
          </>
        )}
        {selectedTab === 'primitives' && (
          <>
            <Expandable
              title="What are yield bearing tokens (YBT)?"
              text="Yield bearing tokens (YBT) are derivatives that appreciate in value as a result of their participation in some form of yield farming. Some examples of YBT are aDai (Aave Interest Bearing Dai), XSushi (staked Sushi) or stETH (Lido staked ETH)."
            />
            <Expandable
              title="What are Principals?"
              text="Principals are split out of YBT together with the Yields. The Principal is a zero-coupon bond that is redeemable for face value on maturity."
            />
            <Expandable
              title="What are Yields?"
              text="Yields are split out of YBT together with the Principals. The Yield is a zero-coupon bond that is redeemable for the amount of yield that accrues on each unit of Principals on maturity."
            />
          </>
        )}
        {selectedTab === 'rates' && (
          <>
            <Expandable
              title="How are rates on Tempus determined?"
              text="The exchange rate (ratio of reserves on both sides) between the Principals and the Yields in each TempusAMM determines the market implied APY for each pool."
            />
            <Expandable
              title="What are the fees for using Tempus?"
              text="Tempus does not charge any protocol fees. However, there are two kinds of fees that users pay. The first one is swap fees, all of which go to liquidity providers (LPs) who provide liquidity to each TempusAMM. The second one is gas fees you generally pay for using the Ethereum network."
            />
          </>
        )}
        {selectedTab === 'integrations' && (
          <>
            <Expandable
              title="What tokens are available on Tempus?"
              text="Tempus will first integrate with Lido, Aave, Compound, Yearn, and Rari, but we are always working on further integrations. Please join our Discord for updates."
            />
            <Expandable
              title="Will new tokens be added in the future?"
              text="Yes, we will be monitoring demand for new integrations and will be introducing new pairs. Please join our Discord for updates."
            />
          </>
        )}
        {selectedTab === 'security' && (
          <>
            <Expandable
              title="Is Tempus audited?"
              text="Tempus has been audited by Coinspect and Code4rena. The audit reports will be published on this website in the Security section below."
            />
            <Expandable
              title="How can Tempus provide minimal counterparty risk?"
              text="Tempus does not use leverage in the traditional sense and doesn’t require the use of collateral - what happens is that users redistribute risk among each other by trading two derivatives (the Principals and the Yields) of the yield bearing token (YBT) against each other."
            />
            <Expandable
              title="What are the risks associated with using Tempus?"
              text="Tempus is an early-stage, experimental protocol. There is no equivalent product in traditional financial markets - DYOR!"
            />
          </>
        )}
      </div>
    </div>
  );
};
export default FAQ;
