import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'

import {Container, Logo} from 'components'

import Desktop from './Desktop'
import Mobile from './Mobile'

import {breakpoints, useMediaQuery} from 'helpers/breakpoints'

import {useStore} from 'store'

import {colors} from 'data'

const Wrapper = styled.header`
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: ${colors.green};
`
const Content = styled.div`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    transition: padding 0.4s ease-in-out;

    @media ${breakpoints.md} {
      padding-top: 40px;
      padding-bottom: 20px;
    }

    &.isCompressed {
      padding-top: 20px;
    }
`

const LogoWrapper = styled.a`
    position: relative;
    height: 40px;
    margin-right: auto;
    z-index: 10;

    svg {
      width: auto;
      height: 100%;
    }
`

export default React.memo(function Header(){
  const ref = useRef()
  const isGreen = useStore('globalVersion') === 'green'
  const isMobileMenuActive = useStore('isMobileMenuActive')
  const isHeaderCompressed = useStore('isHeaderCompressed')

  const isMobile = useMediaQuery({
    xs: true,
    lg: false
  })

  const getLogoColor = () => {
    if(isMobileMenuActive){
      return isGreen ? colors.black : colors.white
    }else {
      return isGreen ? colors.white : colors.black
    }
  }

  const logoColor = getLogoColor()

  useEffect(() => {
    const duration = 1
    gsap.to(ref.current, {duration, backgroundColor: isGreen ? colors.green : colors.yellow})
  }, [isGreen])

  return (
    <Wrapper
      ref={ref}
    >
      <Container>
        <Content
          className={isHeaderCompressed && 'isCompressed'}
        >
          <LogoWrapper href={'/'}>
            <Logo fill={logoColor}/>
          </LogoWrapper>
          {!isMobile && <Desktop />}
          {isMobile && <Mobile />}
        </Content>
      </Container>
    </Wrapper>
  )
})
