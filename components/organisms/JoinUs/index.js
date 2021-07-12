import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import {Section as Scn, Container, Cta, SocialCta} from 'components'

import Cylinders from './Cylinders'

import {breakpoints} from 'helpers/breakpoints'

import {colors} from 'data'

const Section = styled(Scn)`
  && {
    margin-top: 300px;

    @media ${breakpoints.md}{
      margin-top: 500px;
    }
  }
`

const TitleContainer = styled.div`
  position: relative;
`

const Title = styled.div`
  font-size: calc(50px + (200 - 50) * ((100vw - 320px) / (2000 - 320)));
  text-align: center;
  line-height: 0.85em;
  letter-spacing: -0.03em;
`

const Sub = styled.div`
  display: flex;
  text-align: center;
  flex-wrap: wrap;

  > div {
    flex: 0 0 100%;
    margin-top: 90px;

    @media ${breakpoints.md}{
      flex: 0 0 50%;
      margin-top: 120px;
    }
  }
`

const Desc = styled.div`
  margin: 10px auto 40px auto;
`

const SocialCtas = styled.div`
  > a {
    margin: 0 5px;
  }
`

export default React.memo(function JoinUs() {
  const ref = useRef()

  const [isActive, setIsActive] = useState(false)
  const [isSectionActive, setIsSectionActive] = useState(false)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: () => "top 90%",
      once: true,
      onEnter: () => {
        setIsActive(true)
      }
    })

    ScrollTrigger.create({
      trigger: ref.current,
      onToggle: (self) => {
        setIsSectionActive(self.isActive)
      }
    })
  }, [])

  return (
    <Section
      color={colors.white}
      ref={ref}
      id='joinUs'
    >
      <Container>
        <TitleContainer>
          <Title>Be part <br />of Tempus</Title>
          <Cylinders
            isActive={isActive}
            isSectionActive={isSectionActive}/>
        </TitleContainer>

        <Sub>

          <div>
            <div className='f-h4'>Stay updated</div>
            <Desc>Get notified about major developments in Tempus.</Desc>
            <SocialCtas>
              <SocialCta
                type='discord'
                color={colors.white}
                background={colors.green}
              />
            </SocialCtas>
          </div>

          <div>
            <div className='f-h4'>Join the team</div>
            <Desc>We’re always looking for talented people to join the team.</Desc>
            <Cta
              href='https://angel.co/company/tempusfinance'
              target='_BLANK'>See openings</Cta>
          </div>
        </Sub>
      </Container>
    </Section>
  )
})
