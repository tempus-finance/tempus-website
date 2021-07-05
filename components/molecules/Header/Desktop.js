import React from 'react'
import styled from 'styled-components'

import {Container, Cta, Logo} from 'components'

import {useStore} from 'store'

import {colors} from 'data'

const Nav = styled.nav`
  text-transform: uppercase;
  color: ${props => props.color};
  transition: color 0.4s;

  ul {
    display: flex;
    align-items: center;
  }
`

const Link = styled.a`
    margin-right: 40px;
    font-size: 14px;
`

export default React.memo(function Desktop(){
  const isGreen = useStore('globalVersion') === 'green'
  const color = isGreen ? colors.white : colors.black

  return (
    <Nav color={color}>
      <ul>
        <li>
          <Link
            href='http://docs.tempus.finance'
            target='_BLANK'>Documentations</Link>
        </li>

        <li>
          <Link
            href='https://t.me/tempusfinance'
            target='_BLANK'>Community</Link>
        </li>

        <li>
          <Link
            href='https://barnbridge.com/token-bond'
            target='_BLANK'>Governance</Link>
        </li>

        <li>
          <Cta
            href='#'
            target='_BLANK'>
                Launch app
          </Cta>
        </li>
      </ul>

    </Nav>
  )
})
