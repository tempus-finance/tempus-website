import React from 'react'
import styled from 'styled-components'
import {breakpoints} from 'helpers/breakpoints'


import {Container, Html, Cta} from 'components'

import {useContent} from 'hooks'

import Cylinders from './Cylinders'

const Root = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    margin-top: 50px;
    align-items: center;

    .f-h1 {
        margin-bottom: 90px;
    }

    @media ${breakpoints.md}{
      height: calc(100vh - 90px);
      margin-top: 90px;
    }
`

export default React.memo(function Hero () {
  const {tagline} = useContent('hero')

  return (
    <Root >
      <Container>
        <div className='f-h1'>
          <Html>{tagline}</Html>
        </div>
        <Cta>Launch app</Cta>

      </Container>
      <Cylinders />
    </Root>
  )
})
