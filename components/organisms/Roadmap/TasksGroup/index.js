import React, {useEffect, useMemo, useRef} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'

import {breakpoints} from 'helpers/breakpoints'

import {usePrevious} from 'hooks'


import {colors} from 'data'

const Root = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  top:0;
  left:0;
  opacity: 0;
  /* opacity: ${props => props.isActive ? 1 : 0}; */
`

const Single = styled.div`
  display: flex;
  padding: 10px 0;
  font-weight: 18px;
  margin-bottom: 20px;
  width: 100%;

  @media ${breakpoints.md}{
    width: calc(50% - 15px);
  }
`

const Bullet = styled.div`
  position:relative;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  border: solid 2px ${colors.black};
  background: ${props => props.isDone ? colors.yellow : colors.black};
  border-radius: 50%;
  top: 8px;
  margin-right: 20px;
`

const Done = styled.div`
  color: ${colors.yellow};
`


export default React.memo(function TasksGroup({data, index, currentIndex, direction}){
  const ref = useRef()
  const isActive = index === currentIndex
  const wasActive = usePrevious(isActive)

  useEffect(() => {
    const shift = 50 * direction
    const duration = 0.5

    if(isActive){
      gsap.fromTo(ref.current, {x: shift},{duration, x: 0, ease: 'Power1.easeOut', delay: 0.65})
      gsap.fromTo(ref.current, {autoAlpha: 0}, {duration, autoAlpha: 1, ease: 'Power1.easeIn', delay: 0.65})

    }else if(wasActive){
      gsap.to(ref.current, {duration, x: -shift,  ease: 'Power1.easeIn'})
      gsap.to(ref.current, {duration: duration * 0.9, autoAlpha:0, ease: 'Power1.easeOut'})
    }
  },[currentIndex])

  const nodes = useMemo(() => {
    return data.map((el, i) => {
      return (
        <Single
          key={i}
        >
          <Bullet isDone={el.isDone}/>
          <div>
            <div>{el.description}</div>
            {el.isDone && <Done>Done</Done>}
          </div>
        </Single>
      )
    })
  }, [])

  return (
    <Root
      isActive={isActive}
      ref={ref}>
      {nodes}
    </Root>
  )
})
