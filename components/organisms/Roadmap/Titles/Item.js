import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'

import {usePrevious} from 'hooks'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  position: absolute;
  width:100%;
  top: 0;
  left: 0;
  font-size: 60px;
  line-height: normal;
  opacity: ${props => props.isActive ? 1 : 0};
  font-size: calc(50px + (200 - 50) * ((100vw - 320px) / (2000 - 320)));
  pointer-events: none;

  @media ${breakpoints.xl}{
    font-size: 200px;
  }
`

export default React.memo(function Item({data, currentIndex, index, direction}){
  const ref = useRef()
  const isActive = index === currentIndex
  const wasActive = usePrevious(isActive)

  useEffect(() => {
    const shift = 50 * direction
    const duration = 0.5

    if(isActive){
      gsap.fromTo(ref.current, {x: shift, opacity: 0},{duration, x: 0, opacity: 1, delay: 0.3})

    }else if(wasActive){
      gsap.to(ref.current, {duration, x: -shift, opacity:0})
    }
  },[currentIndex])


  return (
    <Root ref={ref}>{data.title}</Root>
  )
})
