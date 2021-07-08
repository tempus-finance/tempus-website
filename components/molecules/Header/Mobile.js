import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'
import clamp from 'lodash-es/clamp'

import {Container, Cta, SocialIcon} from 'components'
import {useContent} from 'hooks'
import {useStore} from 'store'

import {colors} from 'data'

import Hamburger from './Hamburger'

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 150px 0 50px 0;
  pointer-events: ${props => props.isActive ? 'all' : 'none'};
  opacity: 0;

  &.header--yellow {
    background: ${colors.yellow};
    color: ${colors.black};
  }

  &.header--green {
    background: ${colors.green};
    color: ${colors.white};
  }
`

const Cont = styled(Container)`
  && {
    height: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
  }
`

const Internal = styled.span`
  font-size: 40px;
  font-size: calc(40px + (74 - 40) * ((100vw - 380px) / (800 - 380)));
  margin-top: 12px;
  line-height: 1.19em;
`

const Link = styled.div`
  display: block;
  font-size: 14px;
`

const SecondaryNav = styled.div`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  margin-top: auto;

  > div {
    width: 50%;
  }

  >div:nth-child(2) {
    text-align: right;
  }
`

const Socials = styled.ul`
  display: flex;
  width: 100%;
  justify-content:space-between;
  margin-top: 40px;

  a {
    font-size: 0;
    line-height: 0;
  }
`

export default React.memo(function Mobile(){
  const ref = useRef()
  const scrollTween = useRef()
  const isGreen = useStore('globalVersion') === 'green'
  const isActive = useStore('isMobileMenuActive')
  const setIsMobileMenuActive = useStore('setIsMobileMenuActive')
  const socials = useContent('socials')

  const socialFillColor = isGreen ? colors.black : colors.white

  useEffect(() => {
    const autoAlpha = isActive ? 1 : 0
    const delay = isActive ? 0 : 0.4

    gsap.to(ref.current, {duration: 0.3, autoAlpha, delay})
  },[isActive])

  const onClick = (e) => {
    if(e.target.dataset?.anchor){
      setIsMobileMenuActive(false)

      const el = document.getElementById(e.target.dataset?.anchor)
      const dest = el.offsetTop - 150
      const o = {p: window.scrollY}
      let duration = Math.abs(window.scrollY - dest) * 0.0012
      duration = clamp(duration, 0.2, 3)

      scrollTween.current = gsap.to(o, {duration,  delay: 0.3, p:dest, ease: 'Power3.easeOut', onUpdate: () => {
        window.scrollTo(0, o.p)
      }})
    }
  }

  useEffect(() => {
    const kill = () => {
      scrollTween.current?.kill()
    }

    window.addEventListener("wheel", kill)
    window.addEventListener("touchmove", kill)

    return () => {
      window.removeEventListener('wheel', kill)
      window.removeEventListener('touchmove', kill)
    }
  },[])

  return (
    <>
      <Hamburger
        isActive={isActive}
      />

      <Root
        ref={ref}
        isActive={isActive}
        className={isGreen ? 'header--yellow' : 'header--green'}
      >
        <Cont>
          <Wrapper>
            <Nav>
              <ul>
                <li>
                  <Internal
                    data-anchor='section-features'
                    onClick={onClick}
                  >
                    What is Tempus
                  </Internal>
                </li>

                <li>
                  <Internal
                    data-anchor='section-roadmap'
                    onClick={onClick}
                  >
                    Roadmap
                  </Internal>
                </li>

                <li>
                  <Internal
                    data-anchor='section-team'
                    onClick={onClick}
                  >
                    Team
                  </Internal>
                </li>

                <li>
                  <Internal
                    data-anchor='section-investors'
                    onClick={onClick}
                  >
                    Investors
                  </Internal>
                </li>

                <li>
                  <Internal
                    data-anchor='section-faq'
                    onClick={onClick}
                  >
                    FAQ
                  </Internal>
                </li>
              </ul>
            </Nav>
            <SecondaryNav>
              <div>
                <Link>
                  <a
                    href='http://docs.tempus.finance'
                    target='_BLANK'>Documentation</a>
                </Link>
                {/* TEMPORARY DISABLED */}
                {/* <Link>
                  <a
                    href='https://barnbridge.com/token-bond'
                    target='_BLANK'>Governance</a>
                </Link> */}
              </div>
              <div>
                <Cta
                  href='#'
                  target='_BLANK'>
                Launch app
                </Cta>
              </div>
            </SecondaryNav>

            <Socials>
              <a
                href={socials.discord}
                target='_BLANK'><SocialIcon
                  type='discord'
                  color={socialFillColor}/>
              </a>
              <a
                href={socials.medium}
                target='_BLANK'><SocialIcon
                  type='medium'
                  color={socialFillColor}/>
              </a>
              <a
                href={socials.telegram}
                target='_BLANK'><SocialIcon
                  type='telegram'
                  color={socialFillColor}/>
              </a>
              <a
                href={socials.twitter}
                target='_BLANK'><SocialIcon
                  type='twitter'
                  color={socialFillColor}/>
              </a>
              <a
                href={socials.github}
                target='_BLANK'><SocialIcon
                  type='github'
                  color={socialFillColor}/>
              </a>
            </Socials>
          </Wrapper>
        </Cont>
      </Root>
    </>
  )
})
