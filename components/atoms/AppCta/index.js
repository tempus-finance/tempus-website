import React from 'react'
import styled from 'styled-components'

import {useMobileDevice} from 'hooks'

import Cta from '../Cta'

const Root = styled(Cta)`
   && {
     cursor: wait;

    &.isDesktop {
      span {
        transition: opacity 0.6s;

        &:nth-child(1){
          transition-delay: 0.35s;
        }

        &:nth-child(2){
          position: absolute;
          opacity: 0;
          transition-delay: 0s;
        }
      }

      &:hover {
        span:nth-child(1){
          opacity: 0;
          transition-delay: 0s;
        }

        span:nth-child(2){
          opacity: 1;
          transition-delay: 0.35s;
        }
      }
    }
  }
`

export default React.memo(function AppCta(){
  const [isMobile] = useMobileDevice()
  const copy = isMobile ? 'App Coming Soon' : 'Launch App'

  return (
    <Root
      // href={false}
      className={isMobile ? 'isMobile' : 'isDesktop'}
      target='_BLANK'>
      <span>{copy}</span>
      {!isMobile && <span>Coming Soon</span>}
    </Root>
  )
})
