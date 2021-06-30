import React, {useMemo} from 'react'
import styled from 'styled-components'

import {breakpoints} from 'helpers/breakpoints'

import Single from '../Single'

import {colors} from 'data'

const Root = styled.div`
  display: flex;
  margin: 70px -15px 0 -15px;
  flex-wrap: wrap;

  opacity: ${props => props.isActive ? 1 : 0};
  pointer-events: ${props => props.isActive ? 'auto' : 'none'};

  /* grid-template-columns: repeat(2,1fr);
  gap: 30px 30px; */

  @media ${breakpoints.md}{
    /* grid-template-columns: repeat(4,1fr); */
  }
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
