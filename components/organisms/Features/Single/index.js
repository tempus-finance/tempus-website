import React from 'react'
import styled from 'styled-components'

import {Cta} from 'components'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  width: 100%;
  background: rgba(0,0,0,0.15);
  border-radius: 25px;
  padding: 30px 40px;
  margin-bottom: 30px;
  align-self: center;


  @media ${breakpoints.md}{
    width: calc(50% - 15px);
    padding: 60px;

    &:nth-of-type(3) {
      margin-top: -20%;
    }
  }
`

const Title = styled.div`
  margin-top: 60px;
  margin-bottom: 10px;

  @media ${breakpoints.md}{
    margin-top: 90px;
    margin-bottom: 20px;
  }
`

const Subtitle = styled.div`
  margin-bottom: 30px;

  @media ${breakpoints.md}{
      margin-bottom: 40px;
   }
`

export default React.memo(function Single({data, children}) {
  return (
    <Root>
      <div>{children}</div>
      <Title className='f-h2'>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <div><Cta>Launch app</Cta></div>
    </Root>
  )
})
