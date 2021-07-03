import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import {Section, Container, Cta} from 'components'

import Cylinders from './Cylinders '

import {breakpoints} from 'helpers/breakpoints'

import {colors} from 'data'

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
  margin: 10px auto 20px auto;
`

const Form = styled.form`
  position: relative;
  width: 80%;
  margin: 0px auto;

  input {
    position: relative;
    width: 100%;
    height: 50px;
    background: none;
    border: solid 2px ${colors.black};
    border-radius: 50px;
    padding: 0 30px;
    color: ${colors.black};
    font-size: 14px;
    font-weight: 700;
    outline: none;

    &::placeholder {
      color: ${colors.black};
      font-size: 14px;
      font-weight: 700;
    }
  }
`

const Arrow = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  top: 0;
  right: 0px;
  background: url('images/icons/arrow--form.svg');
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(5px);
  }
`

export default React.memo(function JoinUs() {
  const ref = useRef()
  const form = useRef()
  const input = useRef()
  const [isActive, setIsActive] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!input.current.value){
      return
    }
  }

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: () => "top 30%",
      once: true,
      onEnter: () => {
        setIsActive(true)
      }
    })
  }, [])

  return (
    <Section
      color={colors.black}
      ref={ref}>
      <Container>
        <TitleContainer>
          <Title>Be part <br />of Tempus</Title>
          <Cylinders isActive={isActive}/>
        </TitleContainer>

        <Sub>

          <div>
            <div className='f-h4'>Subscribe to the newsletter </div>
            <Desc>Get notified about major developments in Tempus.</Desc>
            <Form
              ref={form}
              onSubmit={onSubmit}>
              <div>
                <input
                  ref={input}
                  type='email'
                  placeholder='enter your email here'>
                </input>
                <Arrow onClick={onSubmit} />
              </div>
            </Form>
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
