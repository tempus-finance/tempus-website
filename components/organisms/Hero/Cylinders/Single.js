import React from 'react'
import styled from 'styled-components'

import {CylinderBig, CylinderMid} from 'components'


const Root = styled.div`
  position: absolute;
  width: ${props => props.width + '%'};
  left: ${props => props.left + '%'};
  margin-bottom: ${props => props.left  * 0.5 + '%'};;
  bottom: 0;
  transform: translateX(-50%);
`

const Components = {
  big: CylinderBig,
  mid: CylinderMid
}

export default React.memo(function Single({type = 'big', left = 0, width = 10, delay, id, fill}){
  const Component = Components[type]

  return (
    <Root
      left={left}
      width={width}>
      <Component
        fill={fill}
        heightBig={190}
        heightSmall={147}
        delay={delay}
        id={id} />
    </Root>
  )
})
