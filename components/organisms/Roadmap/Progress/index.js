import React from 'react'
import styled from 'styled-components'

import {Container} from 'components'

import Bar from './Bar'

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
    background: linear-gradient(to left, ${colors.white} 50%, ${colors.yellow} 51%);;
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
  z-index: 10;

  &.isRight {
    left: auto;
    right: 0;
    transform: none;
  }
`

const BarsWrapper = styled.div`
  position: relative;
  height: 40px;
  text-align: center;
  font-weight: 700;
  line-height: 34px;
  width: calc(100% + 600px);
  left: -300px;
  padding: 0 300px;
  overflow: hidden;

  > div {
    height: 100%;
    position: relative;
  }
`

export default React.memo(function Progress({ data, currentSection}){
  const barNodes = data.map((el,i) => {
    return (
      <Bar
        key={i}
        index={i}
        currentSection={currentSection}
        data={el.tasks}
      />
    )
  })

  return (
    <Root>
      <Bg>
        <Halftone src='images/halftone.svg' />
        <Halftone
          src='images/halftone.svg'
          className='isRight' />

      </Bg>
      <BarsWrapper>
        <div>
          {barNodes}
        </div>
      </BarsWrapper>
    </Root>
  )
})
