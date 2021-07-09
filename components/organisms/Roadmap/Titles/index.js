import React, {useRef} from 'react'
import styled from 'styled-components'

import {useMaxHeight} from 'hooks'

import {breakpoints} from 'helpers/breakpoints'

import Item from './Item'

import {colors} from 'data'

const Root = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  height: ${props => props.height + 'px'};
`

const Arrow = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  background: ${colors.white};
  border: solid 2px ${colors.black};
  cursor: ${props => props.isActive ? 'pointer' : 'auto'};
  opacity: ${props => props.isActive ? '1' : '0.5'};
  transition: opacity 0.6s, transform 0.1s;
  border-radius: 50%;
  transform-style: preserve-3d;

  img {
    position: absolute;
    width: 16px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(180deg);
  }

  &.isRight {
    left: auto;
    right: -50px;
    transform: translateY(-50%);

    img {
      transform: translate(-50%, -50%) rotate(0);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    border: solid 2px ${colors.black};
    transition: transform 0.1s;
  }

  &.isActive {
    &:hover:not(:active) {
      transform: translateY(-50%) translate(-4px, -4px);

      &:before {
        transform: translate3D(4px, 4px, -1px);
      }
    }
  }

  @media ${breakpoints.md}{
    width: 50px;
    height: 50px;
    left: -60px;

    &.isRight {
    left: auto;
      right: -50px;
    }

    img {
      width: 24px;
    }
  }
`

export default React.memo(function Titles({sections, currentSection, onClick, direction}){
  const ref = useRef()
  const heightTitles = useMaxHeight(ref)
  const isRightActive = currentSection < sections.length - 1
  const isLeftActive = currentSection > 0

  const titleNodes = sections.map((el, i) => {
    return (
      <Item
        direction={direction}
        key={i}
        index={i}
        currentIndex={currentSection}
        data={el}
      />
    )
  })

  return (
    <Root
      ref={ref}
      height={heightTitles}
    >

      <Arrow
        className={isLeftActive && 'isActive'}
        onClick={() => onClick(-1)}
        isActive={isLeftActive}
      >
        <img src='images/icons/arrow.svg' />
      </Arrow>
      <Arrow
        className={['isRight', isRightActive && 'isActive']}
        onClick={() => onClick(1)}
        isActive={isRightActive}
      >
        <img src='images/icons/arrow.svg' />
      </Arrow>

      {titleNodes}
    </Root>
  )
})
