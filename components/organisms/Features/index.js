import React from 'react'
import styled from 'styled-components'

import {Section, Container, Html} from 'components'

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
  width: 100%;
  margin-top: 0px;
  margin-bottom: 60px;

  @media ${breakpoints.md}{
    width: calc(50% - 15px);
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
    <Section id={'features'}>
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
    </Section>
  )
})
