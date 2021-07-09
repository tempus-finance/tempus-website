import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  background: rgba(0,0,0,0.15);
  border-radius: 50px;
`

export default React.memo(function Pill({children}){
  return (
    <Root>
      {children}
    </Root>
  )
})
