import React, {useRef} from 'react'
import styled from 'styled-components'

import {Title, Section, Container, OverlapContent} from 'components'

import {useContent, useSwitch} from 'hooks'

import {colors} from 'data'

import Grid from './Grid'

const SwitchWrapper = styled.div`
  text-align: center;
`

export default React.memo(function Team() {
  const content = useContent('team')
  const teamRef = useRef()
  const investorsRef = useRef()

  const [SwitchComponent, currentItem] = useSwitch({
    initialState: 'team'
  })

  return (
    <Section id='team'>
      <Container>
        <Title>{content.title}</Title>
        <SwitchWrapper>
          <SwitchComponent>
            <div data-switch='team'>Core team</div>
            <div data-switch='investors'>Angels & investors</div>
          </SwitchComponent>
        </SwitchWrapper>

        <OverlapContent>
          <Grid
            ref={teamRef}
            data={content.core}
            color={colors.yellow}
            isActive={currentItem=== 'team'}
          />
          <Grid
            ref={investorsRef}
            data={content.investors}
            color={colors.violet}
            isActive={currentItem=== 'investors'}
          />
        </OverlapContent>
      </Container>
    </Section>
  )
})
