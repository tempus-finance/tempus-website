import React, {useRef} from 'react'
import styled from 'styled-components'

import {Title, Section, Container} from 'components'

import {useContent} from 'hooks'
import {breakpoints} from 'helpers/breakpoints'

import {colors} from 'data'


const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  justify-content:center;
`

const Single = styled.a`
  padding: 0 10px;
  margin-bottom: 20px;
  flex: 0 0 50%;
  height: 120px;

  @media ${breakpoints.md}{
    flex: 0 0 25%;
    height: 160px;
    padding: 0 15px;
    margin-bottom: 30px;
  }

  .single__content {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: solid 2px ${colors.black};
    background: ${colors.white};
    border-radius: 20px;
    transform-style: preserve-3d;
    transition: transform 0.1s ease-in-out;

    img {
      width: 90%;
      height: 90%;
      object-fit: contain;

      @media ${breakpoints.md}{
        width: 80%;
        height: 80%;
      }
    }




    &:before {
      content:'';
      position: absolute;
      top: -2px;
      left: -2px;
      bottom: -2px;
      right: -2px;
      border: solid 2px ${colors.black};
      border-radius: 20px;
      transform: translate3D(0px, 0px, -1px);
      transition: transform 0.1s ease-in-out;
    }

    @media ${breakpoints.md}{
      padding: 40px;

      &:hover {
        transform: translate(-4px, -4px);
        &:before {
          transform: translate3D(4px, 4px, -1px);
        }
      }
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
    <Section
      id='investors'
      color={colors.black}>
      <Container>
        <Title color={colors.black}>{content.title}</Title>

        <Content>
          {nodes}
        </Content>

      </Container>
    </Section>
  )
})
