import React from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  position: relative;
  width: 100%;
  margin: 200px auto;
  color: ${props => props.color};

  @media ${breakpoints.md}{
    margin: 300px auto;
  }
`
function Section({children, color = 'ffffff'}, ref){
  return (
    <Root
      color={color}
      ref={ref}>
      {children}
    </Root>
  )
}

export default React.memo(React.forwardRef(Section))
