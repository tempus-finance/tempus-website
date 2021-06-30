import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {Header, Hero, Features, Team} from 'components'


gsap.registerPlugin(ScrollTrigger)



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Team />
    </>
  )
}
