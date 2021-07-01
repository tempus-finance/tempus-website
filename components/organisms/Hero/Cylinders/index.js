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
          fill={colors.green}
          type='mid'
          left={20}
          id={1}
          delay={0}/>
        <Single
          fill={colors.yellow}
          left={40}
          id={2}
          delay={0.5}/>
        <Single
          left={60}
          type='mid'
          fill={colors.violet}
          id={3}
          delay={1}/>
        <Single
          fill={colors.green}
          left={80}
          id={4}
          delay={1.5}/>
      </Row>

      <Row bottom={20}>
        <Single
          fill={colors.violet}
          left={35}
          id={5}
          delay={0.7}/>
        <Single
          fill={colors.green}
          type='mid'
          left={55}
          id={6}
          delay={1.2}/>
        <Single
          fill={colors.yellow}
          left={75}
          id={7}
          delay={1.7}/>
        <Single
          fill={colors.violet}
          left={95}
          id={8}
          delay={2}/>
      </Row>
    </Root>
  )
})
