import React, {useState} from 'react'
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
    align-items: center;
    margin-top: 20px;

    .f-h1 {
        margin-bottom: 50px;
    }

    @media ${breakpoints.sm}{
      height: calc(100vh - 90px);
      margin-top: 50px;
    }

    @media ${breakpoints.md}{
      height: calc(100vh - 90px);
      margin-top: 60px;

      .f-h1 {
        margin-bottom: 70px;
      }
    }
    @media ${breakpoints.lg}{
      .f-h1 {
        font-size: calc(55px + (100 - 55) * ((100vw - 1025px) / (1550 - 1025)));
      }
    }

    @media (min-width: 1550px) {
      .f-h1 {
        font-size: 100px;
      }
    }

    @media ${breakpoints.xl}{
      height: calc(80vh - 90px);
    }
`

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  > a {
    margin: 0 5px 15px 5px;
  }

  @media ${breakpoints.md}{
    display: block;

    > a {
      margin: 0 5px;
    }
  }
`

export default React.memo(function Hero () {
  const {tagline} = useContent('hero')

  const [canPlayAnimation] = useState(false)

  return (
    <Root id='section-hero' >
      <Container>
        <div className='f-h1'>
          <Html>{tagline}</Html>
        </div>
        <SocialWrapper>
          <SocialCta
            type='discord'
            color={colors.white}
            background={colors.green}
          />
        </SocialWrapper>

      </Container>
      <Cylinders canPlayAnimation={canPlayAnimation} />
    </Root>
  )
})
