import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {breakpoints, useMediaQuery} from 'helpers/breakpoints'

import {CylinderBig, CylinderMid, CylinderSmall} from 'components'

import {colors} from 'data'

const Single = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;

  &.joinUs__cylinders--1 {
    width: 40%;
    left: 0%;
    margin-top: -68%;

    @media ${breakpoints.md}{
      left: 0%;
      margin-top: -20%;
      width: 14%;
    }

    @media ${breakpoints.xl}{
      left: -10%;
      margin-top: -20%;
      width: 14%;
    }
  }

  &.joinUs__cylinders--2 {
    width: 40%;
    left: 45%;
    margin-top: -85%;

    @media ${breakpoints.md}{
      left: 23%;
      margin-top: -44%;
      width: 16%;
    }

    @media ${breakpoints.xl}{
      left: 18%;
      margin-top: -50%;
      width: 12%;
    }
  }

  &.joinUs__cylinders--3 {
    width: 35%;
    right: -40%;
    margin-top: -65%;

    @media ${breakpoints.md}{
      right: 5%;
      margin-top: -35%;
      width: 12%;
    }

    @media ${breakpoints.xl}{
      right: -10%;
      margin-top: -45%;
      width: 12%;
    }
  }

  &.joinUs__cylinders--4 {
    display: none;

    @media ${breakpoints.md}{
      display: block;
      left: 50%;
      margin-top: 16%;
      width: 12%;
    }

    @media ${breakpoints.xl}{
      left: 50%;
      margin-top: 16%;
      width: 12%;
    }
  }

  &.joinUs__cylinders--5 {
    display: none;

    @media ${breakpoints.md}{
      display: block;
      right: -8%;
      margin-top: -10%;
      width: 12%;
    }

    @media ${breakpoints.xl}{
      right: -28%;
      margin-top: -10%;
      width: 12%;
    }
  }
`

export default React.memo(function Cylinders({isActive}){
  const canPlayAnimation = isActive

  const color1 = useMediaQuery({
    xs: colors.violet,
    md: colors.green
  })

  return (
    <>
      <Single className='joinUs__cylinders--1'>
        <CylinderMid
          id='ju-1'
          heightBig={-60}
          fill={color1}
          canPlayAnimation={canPlayAnimation}
          delay={0}
        />
      </Single>
      <Single className='joinUs__cylinders--2'>
        <CylinderSmall
          id='ju-2'
          fill={colors.yellow}
          canPlayAnimation={canPlayAnimation}
          delay={0.6}
        />
      </Single>
      <Single className='joinUs__cylinders--3'>
        <CylinderBig
          id='ju-3'
          heightBig={20}
          fill={colors.green}
          canPlayAnimation={canPlayAnimation}
          delay={1.2}
        />
      </Single>
      <Single className='joinUs__cylinders--4'>
        <CylinderSmall
          id='ju-4'
          fill={colors.violet}
          heightBig={230}
          heightSmall={50}
          canPlayAnimation={canPlayAnimation}
          delay={0.5}
        />
      </Single>
      <Single className='joinUs__cylinders--5'>
        <CylinderMid
          id='ju-5'
          fill={colors.yellow}
          canPlayAnimation={canPlayAnimation}
          delay={0.4}
        />
      </Single>
    </>
  )
})
