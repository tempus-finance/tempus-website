import React from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

import Single from './Single'

import {colors} from 'data'

const Root = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 100%;
`

const Row = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin-top: ${props => props.bottom + '%'};

  @media ${breakpoints.xl} {
    right: 10%;
    width: 80%;
  }
`

// SIN(30°) = 0.5
export default React.memo(function Cylinders(){
  return (
    <Root>
      <Row>
        <Single
          heightBig={90}
          heightSmall={20}
          fill={colors.green}
          type='mid'
          left={20}
          id={1}
          delay={2}/>
        <Single
          type='small'
          heightBig={130}
          heightSmall={40}
          fill={colors.yellow}
          left={40}
          id={2}
          delay={2.5}/>
        <Single
          heightBig={160}
          heightSmall={50}
          left={60}
          type='mid'
          fill={colors.violet}
          id={3}
          delay={3}/>
        <Single
          heightBig={50}
          heightSmall={20}
          fill={colors.green}
          left={80}
          id={4}
          delay={3.5}/>
      </Row>

      <Row bottom={20}>
        <Single
          heightBig={70}
          heightSmall={35}
          fill={colors.violet}
          left={35}
          id={5}
          delay={2.7}/>
        <Single
          heightBig={120}
          heightSmall={50}
          fill={colors.green}
          type='mid'
          left={55}
          id={6}
          delay={3.2}/>
        <Single
          heightBig={-10}
          heightSmall={20}
          fill={colors.yellow}
          left={75}
          id={7}
          delay={3.7}/>
        <Single
          type='mid'
          heightBig={0}
          heightSmall={10}
          fill={colors.violet}
          left={95}
          id={8}
          delay={4}/>
      </Row>
    </Root>
  )
})
