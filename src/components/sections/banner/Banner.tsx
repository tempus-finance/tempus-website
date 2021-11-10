import { intervalToDuration } from 'date-fns';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import SushiSwapLogo from '../../icons/sushiSwapLogo';
import Spacer from '../../spacer/spacer';
import Typography from '../../typography/typography';

import './Banner.scss';

const targetDate = new Date(Date.UTC(2021, 10, 15, 17, 0, 0, 0));

const Banner = () => {
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
      window.open('https://miso.sushi.com/auctions/live', '_blank');
    } else {
      window.open('https://miso.sushi.com/auctions/upcoming', '_blank');
    }
  }, [isLive]);

  const timeRemaining = useMemo(
    () =>
      intervalToDuration({
        start: Date.now(),
        end: targetDate,
      }),
    [currentTime],
  );

  return (
    <div className="tf__banner">
      <div className="tf__flex-row-center-v">
        <SushiSwapLogo />
        <Spacer size={20} orientation="horizontal" />
        <Typography variant="banner-title" color="inverted">
          Sushi
        </Typography>
        <Spacer size={20} orientation="horizontal" />
        <Typography variant="banner-title" color="inverted">
          x
        </Typography>
        <Spacer size={20} orientation="horizontal" />
        <Typography variant="banner-title" color="inverted">
          Tempus
        </Typography>
      </div>
      <div className="tf__banner-spacer" />
      {!isLive && (
        <div className="tf__flex-row-center-v">
          <div className="tf__banner-timer-cell">
            <Typography variant="banner-text" color="inverted">
              Days
            </Typography>
            <Typography variant="banner-title" color="inverted">
              {timeRemaining.days}
            </Typography>
          </div>
          <div className="tf__banner-timer-cell-separator tf__banner-separator-text">:</div>
          <div className="tf__banner-timer-cell">
            <Typography variant="banner-text" color="inverted">
              Hours
            </Typography>
            <Typography variant="banner-title" color="inverted">
              {timeRemaining.hours}
            </Typography>
          </div>
          <div className="tf__banner-timer-cell-separator tf__banner-separator-text">:</div>
          <div className="tf__banner-timer-cell">
            <Typography variant="banner-text" color="inverted">
              Minutes
            </Typography>
            <Typography variant="banner-title" color="inverted">
              {timeRemaining.minutes}
            </Typography>
          </div>
          <div className="tf__banner-timer-cell-separator tf__banner-separator-text">:</div>
          <div className="tf__banner-timer-cell">
            <Typography variant="banner-text" color="inverted">
              Seconds
            </Typography>
            <Typography variant="banner-title" color="inverted">
              {timeRemaining.seconds}
            </Typography>
          </div>
        </div>
      )}
      {isLive && (
        <div className="tf__flex-row-center-v">
          <Typography variant="banner-large-text" color="inverted">
            Tempus token offering
          </Typography>
        </div>
      )}
      <div className="tf__banner-spacer" />
      <div className="tf__banner-button" onClick={onLinkClick} aria-hidden="true">
        <Typography variant="banner-text" color="inverted" clickable>
          {isLive ? 'Join now' : 'Read more'}
        </Typography>
      </div>
    </div>
  );
};
export default Banner;
