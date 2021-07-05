import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {CylinderBig, CylinderMid, CylinderSmall} from 'components'


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
  mid: CylinderMid,
  small: CylinderSmall
}

export default React.memo(function Single({type = 'big', left = 0, width = 10, delay, id, fill, heightBig = 120, heightSmall = 50, canPlayAnimation, canFloat}){
  const Component = Components[type]

  return (
    <Root
      left={left}
      width={width}>
      <Component
        canPlayAnimation={canPlayAnimation}
        fill={fill}
        heightBig={heightBig}
        heightSmall={heightSmall}
        delay={delay}
        canFloat={canFloat}
        id={id} />
    </Root>
  )
})
