import React from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;

  @media ${breakpoints.md}{
    padding: 0 90px;
  }
`

export default React.memo(function Container({children, ...props}){
  return (
    <Root className={[props.className, 'container']}>
      {children}
    </Root>
  )
})
