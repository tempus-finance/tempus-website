import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import {colors} from 'data'

const Root = styled.div`
  display: inline-flex;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
  justify-content: center;
`

const Item = styled.div`
  background: none;
  padding: 0 16px;
  height: 34px;
  border-radius: 17px;
  opacity: ${props => props.isActive ? 1 : 0.5};
  cursor: pointer;
  line-height: 30px;
  color: ${colors.white};
  background: transparent;
  transition: all 0.5s;

  &:hover {
    opacity: 1;
  }

  &.isActive {
    background: ${colors.black};
    color: ${colors.white};
  }
`

export default React.memo(function Switch({currentIndex, setCurrentIndex, children}) {
  const onClick = (v) => {
    setCurrentIndex(v)
  }

  const items = children.map((el, i) => {
    const isActive = currentIndex === i

    return <Item
      {...el.props}
      key={i}
      onClick={() => onClick(i)}
      isActive={isActive}
      className={[isActive && 'isActive', 'item']}
      dataTest={i}
    />
  })

  return (
    <Root className={'switch'}>
      {items}
    </Root>
  )
}

)
