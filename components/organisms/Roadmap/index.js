import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useDrag } from 'react-use-gesture'

import { Section, Container} from 'components'

import {useContent, usePrevious, useDynamicHeight} from 'hooks'
import {useStore} from 'store'

import {breakpoints} from 'helpers/breakpoints'

import Titles from './Titles'
import Progress from './Progress'
import TasksGroup from './TasksGroup'


const Launch = styled.div`
  display: inline-block;
  padding: 8px 16px;
  margin: 10px auto 30px auto;
  background: rgba(0,0,0,0.15);
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 0.05em;
`

const TasksWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 30px auto 0 auto;

  @media ${breakpoints.md}{
    width: 70%;
    margin: 70px auto 0 auto;
  }
`

export default React.memo(function RoadMap() {
  const content = useContent('roadmap')

  const ref = useRef()
  const tasksRef = useRef()
  const canUserChange = useRef(true)

  const setGlobalVersion = useStore('setGlobalVersion')

  const [currentSection, setCurrentSection] = useState(0)
  const prevSection = usePrevious(currentSection)
  const direction = currentSection - prevSection
  const amountSections = content.sections.length

  useDynamicHeight(tasksRef, currentSection)

  const taskGroupsNodes = content.sections.map((el, i) => {
    return (
      <TasksGroup
        key={i}
        index={i}
        currentIndex={currentSection}
        data={el.tasks}
        isActive={i===currentSection}
        direction={direction}
      />
    )
  })

  const changeSection = (v) => {
    if(canUserChange.current){
      canUserChange.current = false

      let dest = clamp(currentSection + v, 0, amountSections - 1)
      setCurrentSection(dest)

      // "Debounce"
      gsap.delayedCall(0.6,  () => canUserChange.current = true)
    }
  }

  const bind = useDrag((({swipe}) => {
    if(swipe[0]){
      changeSection(swipe[0] * -1)
    }
  }), {
    useTouch: true
  })

  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: () => "top 80%",
      onEnter: () => {
        setGlobalVersion('green')
      },
      onLeaveBack: () => {
        setGlobalVersion('yellow')
      },
    })
  }, [])

  return (
    <Section
      ref={ref}
      id='roadmap'
    >
      <Container>
        <div style={{ textAlign: 'center' }}>
          <div className='f-h2'>{content.title}</div>
          <Launch>🚀 &nbsp; Launching in Q4 2021 &nbsp; 🚀</Launch>
        </div>

        <div {...bind()}>
          <Titles
            sections={content.sections}
            currentSection={currentSection}
            onClick={changeSection}
            direction={direction}
          />

          <Progress
            data={content.sections}
            currentSection={currentSection} />

          <TasksWrapper
            ref={tasksRef}
          >
            {taskGroupsNodes}
          </TasksWrapper>
        </div>

      </Container>
    </Section>
  )
})
