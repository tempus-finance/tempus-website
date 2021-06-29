import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 90px;
`

export default React.memo(function Container({children}){
  return (
    <Root>
      {children}
    </Root>
  )
})