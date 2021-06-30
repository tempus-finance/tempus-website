import React, {useRef} from 'react'
import styled from 'styled-components'

import {Section, Container, OverlapContent} from 'components'

import {useContent, useSwitch} from 'hooks'
import {breakpoints} from 'helpers/breakpoints'

import Single from './Single'

import {colors} from 'data'

import Grid from './Grid'

const Title = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

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
    <Section>
      <Container>
        <Title className='f-h1'>{content.title}</Title>
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
