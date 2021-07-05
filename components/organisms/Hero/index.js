import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {breakpoints} from 'helpers/breakpoints'

import {Container, Html, SocialCta} from 'components'

import {useContent} from 'hooks'

import Cylinders from './Cylinders'

import {colors} from 'data'

const Root = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: calc(100vh - 90px);
    margin-top: 50px;
    align-items: center;

    .f-h1 {
        margin-bottom: 50px;
    }

    @media ${breakpoints.sd}{
      height: calc(100vh - 90px);
      margin-top: 0px;
    }

    @media ${breakpoints.md}{
      height: calc(100vh - 90px);
      margin-top: 90px;

      .f-h1 {
        margin-bottom: 90px;
      }
    }
`

const SocialWrapper = styled.div`
  > a {
    margin: 0 5px;
  }
`

export default React.memo(function Hero () {
  const {tagline} = useContent('hero')

  const [canPlayAnimation, setCanPlayAnimation] = useState(false)

  return (
    <Root id='section-hero' >
      <Container>
        <div className='f-h1'>
          <Html>{tagline}</Html>
        </div>
        <SocialWrapper>
          <SocialCta
            type='discord'
            color={colors.white} />
          <SocialCta
            type='telegram'
            color={colors.white} />
        </SocialWrapper>

      </Container>
      <Cylinders canPlayAnimation={canPlayAnimation} />
    </Root>
  )
})
