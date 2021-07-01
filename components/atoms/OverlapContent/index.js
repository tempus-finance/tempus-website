import React, {useRef, useEffect, useLayoutEffect} from 'react'
import styled from 'styled-components'
import map from 'lodash-es/map'


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

export default React.memo(function OverlapContent({children}){
  const ref = useRef()
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const setMaxHeight = () => {
    const h =  Math.max(...map(ref.current.childNodes, (el,i) => el.clientHeight))
    ref.current.style.height = h + 'px'
  }

  useIsomorphicLayoutEffect(() => {
    setMaxHeight()

    window.addEventListener('resize', setMaxHeight)

    return () => {
      window.removeEventListener('resize', setMaxHeight)
    }
  },[])




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
