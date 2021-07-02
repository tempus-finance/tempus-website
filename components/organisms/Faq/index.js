import React, {useRef} from 'react'
import styled from 'styled-components'

import {Title, Section, Container, OverlapContent} from 'components'

import {useContent, useSwitch} from 'hooks'

import {colors} from 'data'

import Group from './Group'

const SwitchWrapper = styled.div`
  text-align: center;

  .item{
    color: ${colors.black};
  }
  .item.isActive {
    color: white;
  }
`

export default React.memo(function Team() {
  const content = useContent('faq')
  const {groups} = content

  const [SwitchComponent, currentItem] = useSwitch({
    initialState: groups[0].id
  })

  const items = groups.map((el, i) => {
    return (
      <div
        data-switch={el.id}
        key={i}>
        {el.title}
      </div>
    )
  })

  const groupsNodes = groups.map((el, i) => {
    return (
      <Group
        key={i}
        data={el}
        isActive={currentItem === el.id}/>
    )
  })

  return (
    <Section color={colors.black}>
      <Container>
        <Title color={colors.black}>{content.title}</Title>

        <SwitchWrapper>
          <SwitchComponent>
            {items}
          </SwitchComponent>
        </SwitchWrapper>

        <OverlapContent>
          {groupsNodes}
        </OverlapContent>

      </Container>
    </Section>
  )
})
