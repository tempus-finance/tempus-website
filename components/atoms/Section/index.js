import React from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  position: relative;
  width: 100%;
  margin: 200px auto;

  @media ${breakpoints.md}{
    margin: 300px auto;
  }
`

export default React.memo(function Container({children}){
  return (
    <Root>
      {children}
    </Root>
  )
})
