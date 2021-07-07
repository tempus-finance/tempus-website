import React from 'react'
import styled from 'styled-components'

import {useStore} from 'store'

import {colors} from 'data'

const Root = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 10;

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Open = styled.svg`
  path {
    stroke-dashoffset: ${props => props.isActive ? 35 : 0};
    stroke-dasharray: 35;
    transition: stroke-dashoffset .5s ease-in-out;
    transition-delay: ${props => props.isActive ? '0s' : '0.4s'};
  }
`

const Close = styled.svg`
  path {
    stroke-dashoffset: ${props => props.isActive ? 0 : 35};
    stroke-dasharray: 35;
    transition: stroke-dashoffset .5s ease-in-out;
    transition-delay: ${props => props.isActive ? '0.4s' : '0s'};
  }
`

export default React.memo(function Hamburger(){
  const isGreen = useStore('globalVersion') === 'green'
  const setIsMobileMenuActive = useStore('setIsMobileMenuActive')
  const isActive = useStore('isMobileMenuActive')

  const fillOpen = isGreen ? colors.white : colors.black
  const fillClose = isGreen ? colors.black : colors.white

  const onClick = () => {
    setIsMobileMenuActive(!isActive)
  }

  return (
    <Root
      onClick={onClick}
    >

      {/* CLOSED */}
      <Open
        isActive={isActive}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <g
          stroke={fillOpen}
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="square"
          strokeLinejoin="bevel">
          <path
            id="Line-3"
            d="M3.5 15.5h33"/>
          <path
            id="Line-3-Copy"
            d="M3.5 23.5h33"/>
        </g>
      </Open>

      {/* OPENED */}
      <Close
        isActive={isActive}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd">
          <g
            id="Group-2"
            transform="rotate(-45 23.328 14.879)"
            stroke={fillClose}
            strokeWidth="3">
            <path
              id="Line-3-Copy-2"
              d="M.5 16.5h33"/>
            <path
              id="Line-3-Copy-3"
              d="M17.5 33V0"/>
          </g>
        </g>
      </Close>

    </Root>
  )
})
