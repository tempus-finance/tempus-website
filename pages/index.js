import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {Header, Hero, Features, Team, Investors, Faq} from 'components'

gsap.registerPlugin(ScrollTrigger)

import {colors} from 'data'

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Team />
      <Investors />
      <div style={{
        background: colors.yellow
      }}>
        <Faq />

      </div>
    </>
  )
}
