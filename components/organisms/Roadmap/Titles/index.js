import React, {useRef} from 'react'
import styled from 'styled-components'

import {useMaxHeight} from 'hooks'

import {breakpoints} from 'helpers/breakpoints'

import Item from './Item'

const Root = styled.div`
  position: relative;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  height: ${props => props.height + 'px'};
`

const Arrow = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: -50px;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  cursor: ${props => props.isActive ? 'pointer' : 'auto'};
  opacity: ${props => props.isActive ? '1' : '0.5'};
  transition: opacity 0.6s;

  &.isRight {
    left: auto;
    right: -50px;
    transform: translateY(-50%) rotate(0);
  }

  @media ${breakpoints.md}{
    width: 50px;
    height: 50px;
    left: -60px;

    &.isRight {
    left: auto;
      right: -50px;
    }
  }
`

export default React.memo(function Titles({sections, currentSection, onClick, direction}){
  const ref = useRef()
  const heightTitles = useMaxHeight(ref)
  const isLastSection = currentSection === sections.length - 1

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
        src='images/icons/arrow.svg'
        onClick={() => onClick(-1)}
        isActive={currentSection > 0}
      />
      <Arrow
        src='images/icons/arrow.svg'
        className='isRight'
        onClick={() => onClick(1)}
        isActive={!isLastSection}
      />

      {titleNodes}
    </Root>
  )
})
