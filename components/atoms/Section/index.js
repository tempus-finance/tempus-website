import React from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  position: relative;
  width: 100%;
  margin: ${props => props.small ? '140px auto' : '200px auto'};
  color: ${props => props.color};

  @media ${breakpoints.md}{
    margin: ${props => props.small ? '220px auto' : '300px auto'};
  }
`
function Section({children, small = false, color = 'ffffff', id, ...props}, ref){
  return (
    <Root
      ref={ref}
      id={`section-${id}`}
      className={[props.className, 'section']}
      color={color}
      small={small}
    >
      {children}
    </Root>
  )
}

export default React.memo(React.forwardRef(Section))
