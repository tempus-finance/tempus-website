import React, {useRef} from 'react'
import styled from 'styled-components'

import {useDynamicHeight} from 'hooks'

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

  useDynamicHeight(ref, currentIndex)

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
