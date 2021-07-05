import React from 'react'
import styled from 'styled-components'
import {breakpoints} from 'helpers/breakpoints'

import {colors} from 'data'

const Btn = styled.a`
    display: inline-flex;
    height: 50px;
    padding: 0px 20px;
    background: ${colors.white};
    border: solid 2px ${colors.black};
    border-radius: 50px;
    color: ${colors.black};
    line-height: 46px;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    justify-content: center;
    align-items: center;

    @media ${breakpoints.md}{
      padding: 0px 32px;
    }

    &.--secondary {
      background: none;
      border: ${props => `solid 2px ${props.color}`};
      color: ${props => props.color};
    }
`

export default React.memo(function Cta({children, onClick, type = 'primary', color = colors.white, ...props}) {
  return (
    <Btn
      {...props}
      onClick={onClick}
      className={`--${type}`}
      color={color}
    >
      {children}
    </Btn>
  )
})
