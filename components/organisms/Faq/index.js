import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'

import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {Title, Section, Container, OverlapContent} from 'components'

import {useContent, useSwitch} from 'hooks'
import {useStore} from 'store'
import {Events} from 'helpers'

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
  const ref = useRef()
  const content = useContent('faq')
  const {groups} = content
  const setGlobalVersion = useStore('setGlobalVersion')

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

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: () => "top 90%",
      onEnter: () => {
        Events.emit('faq:enter')
        setGlobalVersion('yellow')
      },
      onLeaveBack: () => {
        Events.emit('faq:leaveBack')
        setGlobalVersion('green')
      },
    })
  }, [])

  return (
    <Section
      id='faq'
      color={colors.black}
      ref={ref}
    >
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
