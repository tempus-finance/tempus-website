import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

import Single from './Single'

const Root = styled.div`
  width: 100%;
  margin: 60px auto 200px auto;
  pointer-events: ${props => props.isActive ? 'auto' : 'none'};
  opacity: ${props => props.isActive ? 1 : 0};
  transform: ${({isActive}) => isActive ? 'translateY(0px)' : 'translateY(10px)'};
  transition: all 0.6s;
  transition-delay: ${({isActive}) => isActive ? '0.3s' : '0s'};

  @media ${breakpoints.lg}{
    width: 70%;
  }
`

export default React.memo(function Group({data, isActive}){
  const [currentActive, setCurrentActive] = useState()

  const onClick = (i) => {
    if(i === currentActive){
      setCurrentActive(undefined)
    }else {
      setCurrentActive(i)
    }
  }

  useEffect(() => {
    if(!isActive){
      setTimeout(() => {
        setCurrentActive(undefined)
      }, 200)
    }
  },[isActive])

  const items = data.items.map((el, i) => {
    return (
      <Single
        key={i}
        id={i}
        data={el}
        isActive={currentActive === i}
        onClick={onClick}
      />
    )
  })

  return (
    <Root isActive={isActive}>
      {items}
    </Root>
  )
})
