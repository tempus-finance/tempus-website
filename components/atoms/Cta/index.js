import React from 'react'
import styled from 'styled-components'
import {breakpoints} from 'helpers/breakpoints'

import {colors} from 'data'

const Btn = styled.a`
    position: relative;
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
    transform-style: preserve-3d;
    transition: transform 0.1s ease-in-out;

    @media ${breakpoints.md}{
      padding: 0px 32px;
    }

    &:before {
      content:'';
      position: absolute;
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      border: solid 2px ${colors.black};
      border-radius: 50px;
      transform: translate3D(0px, 0px, -1px);
      transition: transform 0.1s ease-in-out;
    }

    &.--secondary {
      background: ${props => props.background};
      border: ${props => `solid 2px ${props.color}`};
      color: ${props => props.color};

      &:before {
        border: ${props => `solid 2px ${props.color}`};
      }
    }

    &:hover {
      text-decoration: none;
      transform: translate(-4px, -4px);

      &:before {
        transform: translate3D(4px, 4px, -1px);
      }
    }
`

export default React.memo(function Cta({children, onClick, type = 'primary', color = colors.white, background = 'none', ...props}) {
  return (
    <Btn
      {...props}
      onClick={onClick}
      className={[`--${type}`, props.className]}
      color={color}
      background={background}
    >
      {children}
    </Btn>
  )
})
