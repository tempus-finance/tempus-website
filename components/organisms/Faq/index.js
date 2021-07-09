import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {Title, Section, Container, OverlapContent, Switch} from 'components'

import {useContent} from 'hooks'
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
  const [currentIndex, setCurrentIndex] = useState(0)


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
        isActive={currentIndex === i}/>
    )
  })

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: () => "top 80%",
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
          <Switch
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}>
            {items}
          </Switch>
        </SwitchWrapper>

        <OverlapContent currentIndex={currentIndex}>
          {groupsNodes}
        </OverlapContent>

      </Container>
    </Section>
  )
})
