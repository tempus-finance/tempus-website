import {useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {Events} from 'helpers'

import {Header, Hero, Features, Roadmap, Team, Investors, Faq, JoinUs, Footer} from 'components'
gsap.registerPlugin(ScrollTrigger)

import {colors} from 'data'

export default function Home() {
  useEffect(() => {
    const duration = 1
    const {body, documentElement: html } = document

    Events.on('faq:enter', () => {
      gsap.to([body, html], {duration, backgroundColor: colors.yellow})
    })

    Events.on('faq:leaveBack', () => {
      gsap.to([body, html], {duration, backgroundColor: colors.green})
    })
  },[])

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Roadmap />
      <Team />
      <Faq />
      <Investors />
      <JoinUs />
      <Footer />
    </>
  )
}
