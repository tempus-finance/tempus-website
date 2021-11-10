import React, { useMemo, useRef, useState } from 'react';
import Typography from '../typography/typography';
import ArrowLeft from '../icons/arrowLeft';
import ArrowRight from '../icons/arrowRight';
import HedgeGraph from '../icons/hedge-graph';
import LiquidityGraph from '../icons/liquidity-graph';

import './graph.scss';

const Graph = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentScroll, setCurrentScroll] = useState<number>(0);

  const onScrollLeft = () => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
    setCurrentScroll(scrollRef.current.scrollLeft);
  };

  const onScrollRight = () => {
    if (!scrollRef.current) {
      return;
    }

    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
    setCurrentScroll(scrollRef.current.scrollLeft);
  };

  const rightVisible = useMemo(() => {
    if (
      scrollRef.current &&
      Math.floor(scrollRef.current.scrollLeft) === scrollRef.current.scrollWidth - scrollRef.current.offsetWidth
    ) {
      return false;
    }
    return true;
  }, [currentScroll]);

  const leftVisible = useMemo(() => {
    if (scrollRef.current && scrollRef.current.scrollLeft === 0) {
      return false;
    }
    return true;
  }, [currentScroll]);

  return (
    <>
      <div className="tf__graph-title">
        <Typography variant="h3">What can you do on Tempus?</Typography>
      </div>
      <div className="tf__graph">
        <div className="tf__graph__scroll" ref={scrollRef}>
          <div style={{ width: '20%', flexShrink: 0 }} />
          <div style={{ width: '935px' }}>
            <HedgeGraph />
          </div>
          <div style={{ width: '150px', flexShrink: 0 }} />
          <div style={{ width: '885px' }}>
            <LiquidityGraph />
          </div>
          <div style={{ width: '20%', flexShrink: 0 }} />
        </div>
        {rightVisible && (
          <div className="tf__graph__arrowRight" onClick={onScrollRight} aria-hidden="true">
            <ArrowRight />
          </div>
        )}
        {leftVisible && (
          <div className="tf__graph__arrowLeft" onClick={onScrollLeft} aria-hidden="true">
            <ArrowLeft />
          </div>
        )}
      </div>
    </>
  );
};
export default Graph;
