import React, {useMemo} from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

import Single from '../Single'

import {colors} from 'data'

const Root = styled.div`
  display: flex;
  margin: 70px -15px 0 -15px;
  flex-wrap: wrap;
  justify-content: center;

  pointer-events: ${props => props.isActive ? 'auto' : 'none'};
  opacity: ${props => props.isActive ? 1 : 0};
  transform: ${({isActive}) => isActive ? 'translateY(0px)' : 'translateY(10px)'};
  transition: all 0.6s;
  transition-delay: ${({isActive}) => isActive ? '0.3s' : '0s'};
`

export default React.memo(function Grid({color = colors.yellow, data, isActive}) {
  const peopleNodes = useMemo(() => {
    return data.map((el, i) => {
      return (
        <Single
          key={i}
          data={el}
          color={color}
        />
      )
    })
  }, [])

  return (
    <Root isActive={isActive}>
      {peopleNodes}
    </Root>
  )
})
