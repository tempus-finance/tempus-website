import React, {useRef, useState} from 'react'
import styled from 'styled-components'

import {Title, Section, Container, OverlapContent, Switch} from 'components'

import {useContent} from 'hooks'
import {breakpoints} from 'helpers/breakpoints'


import {colors} from 'data'

import Grid from './Grid'

const Root = styled(Section)`
// SAME AS SINGLE ELEMENTS IN GRID
  margin-bottom: -30px;

  @media ${breakpoints.md}{
    margin-bottom: -80px;
  }
`

const SwitchWrapper = styled.div`
  text-align: center;
`

export default React.memo(function Team() {
  const content = useContent('team')
  const teamRef = useRef()
  const investorsRef = useRef()

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <Root id='team'>
      <Container>
        <Title>{content.title}</Title>
        <SwitchWrapper>
          <Switch
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          >
            <div data-switch='team'>Core Team</div>
            <div data-switch='investors'>Angels & Advisors</div>
          </Switch>
        </SwitchWrapper>

        <OverlapContent currentIndex={currentIndex}>
          <Grid
            ref={teamRef}
            data={content.core}
            color={colors.yellow}
            isActive={currentIndex=== 0}
          />
          <Grid
            ref={investorsRef}
            data={content.investors}
            color={colors.violet}
            isActive={currentIndex=== 1}
          />
        </OverlapContent>
      </Container>
    </Root>
  )
})
