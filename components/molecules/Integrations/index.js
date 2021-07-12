import React from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

import {Section,Container} from 'components'

const Root = styled(Section)`
  && {
    margin-bottom: -60px;

    @media ${breakpoints.md} {
      margin-top: 400px;
      margin-bottom: -100px;
    }
  }
`

const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 25px;
  max-width: 600px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(0,0,0,0.15);
  font-size: 14px;
  line-height: 2em;
  text-align: center;

  @media ${breakpoints.md} {
    flex-direction: row;
    border-radius: 60px;
    padding: 10px 10px 10px 20px;
    text-align: left;
  }

  > div {
    order: 0;
  }
`

const Icons = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media ${breakpoints.md} {
    order: 1 !important;
    margin-bottom: 0px;
  }

  img {
    width: 40px;
    margin: 0 5px;
    flex-shrink: 0;

    @media ${breakpoints.md} {
      margin: 0 0 0 10px;
    }
  }
`

export default React.memo(function Integration(){
  return (
    <Root>
      <Container>
        <Content>
          <Icons>
            <img src='images/icons/aave.svg' />
            <img src='images/icons/compound.svg' />
            <img src='images/icons/lido.png' />
          </Icons>
          <div>Integrated with Aave, Compound and Lido</div>
        </Content>
      </Container>
    </Root>
  )
})
