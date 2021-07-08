import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'

import {useMediaQuery, breakpoints} from 'helpers/breakpoints'

import {colors} from 'data'

const Root = styled.div`
  position: relative;
  padding: 30px 0;
  border-bottom: solid 2px ${colors.black};
  cursor: pointer;
`

const Content = styled.div`
  padding-right: 35px;

  @media ${breakpoints.md}{
    padding-right: 140px;
  }
`

const Background = styled.div`
  position: absolute;
  background: ${colors.green};
  top: -2px;
  bottom: -2px;
  left: -5px;
  right: -5px;
  border: solid 2px ${colors.black};
  border-radius: 15px;
  opacity: 0;
  z-index: 0;

  @media ${breakpoints.md}{
    border-radius: 25px;
    left: -15px;
    right: -15px;
  }
`

const Question = styled.div`
  position: relative;
  padding-right: 14px;

  @media ${breakpoints.md}{
    margin-top: 14px;
  }
`

const Answer = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;

  div {
    padding-top: 16px;
  }
`

const Cross = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  right: 0px;
  top: 30px;
  background: ${colors.white};
  border: solid 2px ${colors.black};
  background-Image: url('images/cross.svg');
  background-size: 18px 18px;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;

  @media ${breakpoints.md}{
    width: 50px;
    height: 50px;
    top: 25px;
  }
`

export default React.memo(function Single({data, id, onClick, isActive}){
  const root = useRef()
  const background = useRef()
  const answer = useRef()
  const cross = useRef()
  const tl = useRef()

  const isMobile = useMediaQuery({
    xs: true,
    md: false
  })

  const createTimeline = () => {
    tl.current = gsap.timeline({paused: true})

    const padding = isMobile ? -15 : -30

    tl.current
      .to(root.current, {duration: 0.45, color: colors.white})
      .to(answer.current, {duration: 0.45, height: 'auto', ease: 'Power2.easeInOut'}, 0)
      .to(cross.current, {duration: 0.45, rotate: 45, ease: 'Power2.easeInOut' }, 0)
      .to(background.current, {duration: 0.45, left: padding, right: padding, opacity: 1, ease: 'Power2.easeInOut'}, 0)
  }

  useEffect(() => {
    if(isActive){
      createTimeline()
      tl.current.play()
    } else {
      tl.current?.reverse()
    }
  }, [isActive])

  return (
    <Root
      ref={root}
      className={isActive && 'isActive'}
      onClick={ () => {onClick(id) }}
    >
      <Content>
        <Background ref={background} />
        <Question>{data.title}</Question>
        <Answer ref={answer}>
          <div>{data.description}</div>
        </Answer>
      </Content>

      <Cross ref={cross} />

    </Root>
  )
})
