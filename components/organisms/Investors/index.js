import React, {useRef} from 'react'
import styled from 'styled-components'

import {Section, Container} from 'components'

import {useContent} from 'hooks'
import {breakpoints} from 'helpers/breakpoints'

import {colors} from 'data'


const Title = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`

const Single = styled.a`
  padding: 0 15px;
  margin-bottom: 30px;
  flex: 0 0 50%;
  height: 120px;

  @media ${breakpoints.md}{
    flex: 0 0 25%;
    height: 180px;
  }

  .single__content {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: solid 2px ${colors.black};
    background: ${colors.white};
    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    @media ${breakpoints.md}{
      padding: 40px;

    }
  }
`


export default React.memo(function Team() {
  const content = useContent('investors')

  const nodes = content.list.map((el,i) => {
    return (
      <Single
        key={i}
        href={el.url}
        target={'_BLANK'}>
        <div className='single__content'>
          <img
            src={el.logo}
            alt={el.alt} />
        </div>

      </Single>
    )
  })

  return (
    <Section>
      <Container>
        <Title className='f-h1'>{content.title}</Title>

        <Content>
          {nodes}
        </Content>

      </Container>
    </Section>
  )
})
