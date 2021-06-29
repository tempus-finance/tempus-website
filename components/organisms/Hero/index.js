import React from 'react'
import styled from 'styled-components'

import {Container, Html, Cta} from 'components'

import {useContent} from 'hooks'

const Root = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    margin-top: 50px;

    .f-h1 {
        margin-bottom: 90px;
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
    </Root>
  )
})