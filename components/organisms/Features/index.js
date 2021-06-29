import React from 'react'
import styled from 'styled-components'

import {Container, Html} from 'components'

import {useContent} from 'hooks'
import {breakpoints} from 'helpers/breakpoints'

import Trade from './Trade'
import Earn from './Earn'
import Fix from './Fix'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CopyContainer = styled.div`
  width: calc(50% - 15px);
  margin-top: 0px;

  @media ${breakpoints.md}{
    max-width: 80%;
    margin-top: 10%;
  }

  .subtitle {
    max-width: 90%;

  @media ${breakpoints.md}{
      max-width: 80%;
    }
  }
`

export default React.memo(function Hero () {
  const content = useContent('features')

  return (
    <Container>
      <Wrapper>

        <CopyContainer>
          <div className='f-h3'><Html>{content.title}</Html></div>
          <div className='subtitle'>{content.subtitle}</div>
        </CopyContainer>

        <Trade data={content.single[0]} />
        <Earn data={content.single[1]} />
        <Fix data={content.single[2]} />
      </Wrapper>
    </Container>
  )
})
