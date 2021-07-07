import React, {useRef, useEffect, useLayoutEffect, useCallback} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'


const Root = styled.div`
  position:relative;
  pointer-events: none;
`

const Item = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`

export default React.memo(function OverlapContent({children, currentIndex = 0}){
  const ref = useRef()
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const setHeight = useCallback(() => {
    const h = ref.current.childNodes[currentIndex].clientHeight

    gsap.to(ref.current, {duration:1, height: h, ease: 'Power1.easeInOut', onComplete: () => {
      ScrollTrigger.refresh()
    }})

  },[currentIndex])

  useIsomorphicLayoutEffect(() => {
    setHeight()

    window.addEventListener('resize', setHeight)

    return () => {
      window.removeEventListener('resize', setHeight)
    }
  },[currentIndex])


  const items = children.map((el, i) => {
    return <Item
      key={i}
    >
      {el}
    </Item>
  })
  return (
    <Root ref={ref}>
      {items}
    </Root>
  )
})
