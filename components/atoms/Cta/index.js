import React from 'react'
import styled from 'styled-components'

import {colors} from 'data'

const Btn = styled.a`
    display: inline-block;
    height: 50px;
    padding: 0px 32px;
    background: ${colors.white};
    border: solid 2px ${colors.black};
    border-radius: 50px;
    color: ${colors.black};
    line-height: 46px;
    text-transform: uppercase;
    cursor: pointer;
`

export default React.memo(function Cta({children, onClick, ...props}) {

  return (
    <Btn
      {...props}
      onClick={onClick}
    >
      {children}
    </Btn>
  )
})
