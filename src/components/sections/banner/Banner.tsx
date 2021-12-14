import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { intervalToDuration } from 'date-fns';
import Typography from '../../typography/typography';
import Spacer from '../../spacer/spacer';

import './Banner.scss';

const targetDate = new Date(Date.UTC(2021, 10, 16, 17, 0, 0, 0));
const auctionEndDate = new Date(Date.UTC(2021, 10, 18, 17, 0, 0, 0));

const Banner = () => {
  const history = useHistory();

  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isLive, setIsLive] = useState<boolean>(targetDate.getTime() < Date.now());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
  }, []);

  useEffect(() => {
    if (currentTime > targetDate.getTime()) {
      setIsLive(true);
    }
  }, [currentTime]);

  const onLinkClick = useCallback(() => {
    if (isLive) {
      history.push('/token-auction');
    } else {
      window.open('https://medium.com/tempusfinance/temp-fair-launch-8feb0a91302e', '_blank');
    }
  }, [isLive]);

  const onAuctionLinkClick = useCallback(() => {
    window.open('https://copperlaunch.com/auctions/0x89d4a55ca51192109bb85083ff7d9a13ab24c8a1', '_blank');
  }, [isLive]);

  const timeRemaining = useMemo(
    () =>
      intervalToDuration({
        start: Date.now(),
        end: isLive ? auctionEndDate : targetDate,
      }),
    [currentTime],
  );

  if (Date.now() > auctionEndDate.getTime()) {
    return <div style={{ height: '206px' }} />;
  }

  return (
    <div className="tf__banner">
      <div className="tf__banner-background" />
      <div className="tf__banner__title">
        <h1 className="tf__banner-title-text">TEMP Fair Launch</h1>
        <h2 className="tf__banner-subheading-text">Balancer LBP</h2>
      </div>
      <div className="tf__banner-spacer" />

      {isLive && (
        <div className="tf__banner-live-text-container">
          <p className="tf__banner-live-text">Auction ends in:</p>
        </div>
      )}

      <div className="tf__flex-row-center-v">
        {!isLive && (
          <>
            <div className="tf__banner-timer-cell">
              <Typography variant="banner-text" color="inverted">
                Days
              </Typography>
              <Spacer size={9} type="vertical" />
              <Typography variant="banner-title" color="inverted">
                {timeRemaining.days}
              </Typography>
            </div>

            <div className="tf__banner-timer-cell-separator tf__banner-separator-text">:</div>
          </>
        )}
        <div className="tf__banner-timer-cell">
          <Typography variant="banner-text" color="inverted">
            Hours
          </Typography>
          <Spacer size={9} type="vertical" />
          <Typography variant="banner-title" color="inverted">
            {isLive ? (timeRemaining.days || 0) * 24 + (timeRemaining.hours || 0) : timeRemaining.hours}
          </Typography>
        </div>
        <div className="tf__banner-timer-cell-separator tf__banner-separator-text">:</div>
        <div className="tf__banner-timer-cell">
          <Typography variant="banner-text" color="inverted">
            Minutes
          </Typography>
          <Spacer size={9} type="vertical" />
          <Typography variant="banner-title" color="inverted">
            {timeRemaining.minutes}
          </Typography>
        </div>
        <div className="tf__banner-timer-cell-separator tf__banner-separator-text">:</div>
        <div className="tf__banner-timer-cell">
          <Typography variant="banner-text" color="inverted">
            Seconds
          </Typography>
          <Spacer size={9} type="vertical" />
          <Typography variant="banner-title" color="inverted">
            {timeRemaining.seconds}
          </Typography>
        </div>
      </div>
      <div className="tf__banner-spacer" />
      <div className="tf__banner-button" onClick={onLinkClick} aria-hidden="true">
        <Typography variant="banner-text" color="inverted" clickable>
          {isLive ? 'Find out more' : 'Read more'}
        </Typography>
      </div>
      {isLive && (
        <div className="tf__banner-button" onClick={onAuctionLinkClick} aria-hidden="true">
          <Typography variant="banner-text" color="inverted" clickable>
            Go to auction
          </Typography>
        </div>
      )}
    </div>
  );
};
export default Banner;
