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
  const globalVersion = useStore('globalVersion')

  useEffect(() => {
    gsap.to(document.body, {duration: 1.2, opacity: 1, delay: 0.5})
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

  useEffect(() => {
    const duration = 1
    const {body, documentElement: html } = document
    const bg = globalVersion === 'green' ? colors.green : colors.yellow

    gsap.to([body, html], {duration, backgroundColor: bg})
  },[globalVersion])

  return (
    <>
      <Seo />
      <Header />
      <Hero />
      <Features />
      <Team />
      <Faq />
      <Investors />
      <Roadmap />
      <JoinUs />
      <Footer />
    </>
  )
}
