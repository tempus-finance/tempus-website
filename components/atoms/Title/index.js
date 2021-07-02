import React from 'react'
import styled from 'styled-components'

import {colors} from 'data'

const Root = styled.div`
  text-align: center;
  margin-bottom: 60px;
  color: ${props => props.color};
`

export default React.memo(function Title({color = colors.white,children}){
  return (
    <Root
      color={color}
      className='f-h1'>
      {children}
    </Root>
  )
})
