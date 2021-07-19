import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import {Seo, Hero, Integrations, Features, Roadmap, Team, Investors, Faq, JoinUs} from 'components'

import firebase from '../services/firebase'

export default function Home() {
  const scrollTween = useRef()
  const router = useRouter()

  useEffect(() => {
    if(router.asPath.includes('/#')){
      let i = router.asPath.replace('/#', '')
      const el = document.getElementById(i)
      if(el){
        setTimeout(() => {
          window.scrollTo(0, el.offsetTop - 150)
        }, 1000)
      }
    }
  },[router])

  useEffect(() => {
    // KILL SCROLL IF USER INTERACTS
    const kill = () => {
      scrollTween.current?.kill()
    }

    window.addEventListener("wheel", kill)
    window.addEventListener("touchmove", kill)

    return () => {
      window.removeEventListener('wheel', kill)
      window.removeEventListener('touchmove', kill)
    }
  },[])

  useEffect(() => {
    firebase.init()
  }, [])

  return (
    <>
      <Seo />
      <Hero />
      <Integrations />
      <Features />
      <Team />
      <Faq />
      <Investors />
      <Roadmap />
      <JoinUs />
    </>
  )
}
