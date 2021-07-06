import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {Cta} from 'components'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  position: relative;
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
      margin-top: -40%;
    }
  }
`

const SvgContainer = styled.div`
  width: 80%;
  max-width: 250px;
  margin: 0 auto;

  svg {
    margin-top: -150px;
  }

  @media ${breakpoints.md}{
    width: 90%;
  }
`

const Title = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;

  @media ${breakpoints.md}{
    margin-bottom: 20px;
  }
`

const Subtitle = styled.div`
  margin-bottom: 30px;

  @media ${breakpoints.md}{
      margin-bottom: 40px;
   }
`

export default React.memo(function Single({data, children, cylinderRef}) {
  const rootRef = useRef()

  useEffect(() => {
    ScrollTrigger.create({
      trigger: rootRef.current,
      once: true,
      start: () => 'top 50%',
      onEnter: () => {
        cylinderRef?.current?.playTimeline()
      }
    })
  },[])

  return (
    <Root ref={rootRef}>

      <SvgContainer>
        {children}
      </SvgContainer>

      <Title className='f-h2'>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>

      <div>
        <Cta>Launch app</Cta>
      </div>
    </Root>
  )
})
