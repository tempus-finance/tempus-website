import React from 'react'
import styled from 'styled-components'

import {breakpoints, useMediaQuery} from 'helpers/breakpoints'

import Single from './Single'

import {colors} from 'data'

const Root = styled.div`
  position: absolute;
  top: 10%;
  right: -40%;
  width: 170%;
  height: 100%;

  @media ${breakpoints.sm} {
    top: 0%;
    width: 120%;
    right: 0;
  }

  @media ${breakpoints.md} {
    width: 80%;
    right: 0;
  }

  @media ${breakpoints.xl} {
    top: 3%;
    width: 75%;
    right: 6%;
  }
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
  const {row, width} = useMediaQuery({
    xs: {
      row: [5, 25],
      width: 15
    },
    md: {
      row: [8, 28],
      width: 15
    },
    xl: {
      row: [2, 22],
      width: 13
    }
  })
  return (
    <Root>
      <Row bottom={row[0]}>
        <Single
          width={width}
          heightBig={-50}
          heightSmall={10}
          fill={colors.green}
          type='mid'
          left={20}
          id={1}
          delay={2}/>
        <Single
          type='small'
          width={width}
          heightBig={50}
          heightSmall={40}
          fill={colors.violet}
          left={36}
          id={2}
          delay={2.5}/>
        <Single
          width={width}
          heightBig={60}
          heightSmall={50}
          left={60}
          type='big'
          fill={colors.green}
          id={3}
          delay={3}/>
      </Row>

      <Row bottom={row[1]}>
        <Single
          width={width}
          heightBig={40}
          heightSmall={35}
          fill={colors.violet}
          type='small'
          left={35}
          id={5}
          delay={2.7}/>
        <Single
          width={width}
          heightBig={120}
          heightSmall={50}
          fill={colors.yellow}
          type='mid'
          left={55}
          id={6}
          delay={3.2}/>
        <Single
          width={width}
          heightBig={240}
          heightSmall={70}
          fill={colors.violet}
          left={75}
          type='small'
          id={7}
          delay={3.7}/>
        <Single
          type='big'
          width={width}
          heightBig={180}
          heightSmall={40}
          fill={colors.yellow}
          left={95}
          id={8}
          delay={4}/>
      </Row>
    </Root>
  )
})
