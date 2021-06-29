import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {Header, Hero} from 'components'


gsap.registerPlugin(ScrollTrigger)



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
  )
}
