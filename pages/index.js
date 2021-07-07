import {useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import throttle from 'lodash-es/throttle'
import {useStore} from 'store'


import {Events} from 'helpers'

import {Seo, Header, Hero, Features, Roadmap, Team, Investors, Faq, JoinUs, Footer} from 'components'
gsap.registerPlugin(ScrollTrigger)

import {colors} from 'data'

export default function Home() {
  const setIsHeaderCompressed = useStore('setIsHeaderCompressed')

  useEffect(() => {
    const duration = 1
    const {body, documentElement: html } = document

    Events.on('faq:enter', () => {
      gsap.to([body, html], {duration, backgroundColor: colors.yellow})
    })

    Events.on('faq:leaveBack', () => {
      gsap.to([body, html], {duration, backgroundColor: colors.green})
    })

    gsap.to(body, {duration: 1.2, opacity: 1, delay: 0.5})
  },[])

  useEffect(() => {
    const detectScroll = () => {
      if(window.scrollY > 100) {
        setIsHeaderCompressed(true)
      }else {
        setIsHeaderCompressed(false)
      }
    }

    window.addEventListener('scroll', throttle(detectScroll, 300))
  }, [])

  return (
    <>
      <Seo />
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
