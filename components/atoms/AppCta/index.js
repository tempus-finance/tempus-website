import React from 'react'
import styled from 'styled-components'

import {useMobileDevice} from 'hooks'

import Cta from '../Cta'

const Root = styled(Cta)`
   && {
     cursor: pointer;

    &.isDesktop {
      span {
        transition: opacity 0.6s;
      }
    }
  }
`

export default React.memo(function AppCta(){
  const [isMobile] = useMobileDevice()

  return (
    <Root
      href='https://testnet.tempus.finance'
      className={isMobile ? 'isMobile' : 'isDesktop'}
      target='_BLANK'>
      <span>Launch Testnet</span>
    </Root>
  )
})
