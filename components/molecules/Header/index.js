import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Events} from 'helpers'


import {Container, Cta, Logo} from 'components'

const Wrapper = styled.header`
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
`
const Content = styled.div`
    display: flex;
    margin-top: 50px;
    align-items: center;
    text-transform: uppercase;
`

const LogoWrapper = styled.div`
    width: 180px;
    margin-right: auto;
`

const Link = styled.a`
    margin-right: 40px;
    font-size: 14px;
`

export default React.memo(function Header(){
  return (
    <Wrapper>
      <Container>
        <Content>
          <LogoWrapper>
            <Logo/>
          </LogoWrapper>
          <Link
            href='http://docs.tempus.finance'
            target='_BLANK'>Documentations</Link>
          <Link
            href='https://t.me/tempusfinance'
            target='_BLANK'>Community</Link>
          <Link
            href='https://barnbridge.com/token-bond'
            target='_BLANK'>Governance</Link>
          <Cta
            href='#'
            target='_BLANK'>
                Launch app
          </Cta>
        </Content>
      </Container>
    </Wrapper>
  )
})
