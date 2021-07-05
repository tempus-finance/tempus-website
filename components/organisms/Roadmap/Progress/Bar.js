import React from 'react'
import styled from 'styled-components'

import {colors} from 'data'

const Root = styled.div`
  position: absolute;
  display: block;
  height: 100%;
  top: 0;
  left: ${props => props.i * 100 + '%'};;
  width: 100%;
  border-radius: 20px;
  border: solid 2px ${colors.black};
  margin-left: ${props => props.i * -45 + 'px'};
  transform: translateX(${props => props.translate});
  background: ${colors.white};
  transition: transform 0.8s ease-in-out;
  color: ${colors.black};
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

const Fill = styled.div`
  position: absolute;
  width: ${props => props.progress + '%'};
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 20px;
  background: ${colors.yellow};
`

const Copy = styled.span`
  position: relative;
`

export default React.memo(function Bar({data, currentSection, index}){
  const translate = `calc(${currentSection * -100}% + ${45 * currentSection}px)`

  const completed = data.filter((el) => el.isDone).length
  const progress = Math.ceil((completed / (data.length)) * 100)
  const copy = progress < 100 ? `${progress}% in progress` : 'All tasks completed'

  return (
    <Root
      i={index}
      translate={translate}>
      <Fill progress={progress} />
      <Copy>{copy}</Copy>
    </Root>
  )
})
