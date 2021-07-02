import React, {useRef, useEffect, useState} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'

import {Container} from 'components'

import {breakpoints} from 'helpers/breakpoints'
import {colors} from 'data'

const Root = styled(Container)`
  && {
    margin-top: 20px;

    @media (max-width: 768px){
      padding: 0;
    }

    @media ${breakpoints.md} {
      margin-top: 40px;
    }
  }
`

const Bg = styled.div`
    position: absolute;
    height: 40px;
    left: -260px;
    right: -260px;
    background: white;
    color: black;
    border-top: solid 2px ${colors.black};
    border-bottom: solid 2px ${colors.black};
`

const Halftone = styled.img`
  position: absolute;
  height: 40px;
  width: auto;
  top: -2px;
  left: 0;
  transform: rotate(180deg);

  &.isRight {
    left: auto;
    right: 0;
    transform: none;
  }
`

const Content = styled.div`
  position: relative;
  border: solid 2px ${colors.black};
  height: 40px;
  border-radius: 20px;
  color: ${colors.black};
  text-align: center;
  font-weight: 700;
  line-height: 34px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 15px;
    left: 15px;
    border-radius: 50%;
    background: ${colors.black};
    z-index: 1;
  }

  &:after{
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 15px;
    right: 15px;
    border-radius: 50%;
    background: ${colors.black};
    z-index: 1;
  }
`

const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: ${props => props.progress + '%'};
  border-radius: 20px;
  background: ${colors.yellow};
  transition: all 1s ease-in-out;
`

const Copy = styled.div`
  position: relative;
`


export default React.memo(function Progress({data}){
  const spanRef = useRef()
  const [pn, setPn] = useState(0)

  const completed = data.tasks.filter((el) => el.isDone).length
  const progress = (completed / (data.tasks.length)) * 100

  useEffect(() => {
    const o = {p:pn}
    gsap.to(o, {duration: 1, ease: 'Power1.easeInOut', p: progress, onUpdate: () => {
      setPn(o.p.toFixed(0))
    }})
  },[progress])

  return (
    <Root>
      <Bg>
        <Halftone src='images/halftone.svg' />
        <Halftone
          src='images/halftone.svg'
          className='isRight' />

      </Bg>
      <Content>
        <ProgressBar progress={progress} />
        <Copy><span ref={spanRef}>{pn}</span>% in progress</Copy>
      </Content>
    </Root>
  )
})
