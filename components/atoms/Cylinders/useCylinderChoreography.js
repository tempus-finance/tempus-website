import  {useEffect, useRef} from 'react'
import {gsap} from 'gsap'

export default function useCylinderChoreography(props){
  const {elm, delay, canPlayAnimation, small, big, heightSmall, heightBig} = props
  const {globalTransformOrigin, smallTransformOrigin, resetGapSmall, smallShiftFromSvg} = props
  const tl = useRef()

  useEffect(() => {
    let time = 0
    const parent = elm.current
    const global = elm.current.getElementById('All')

    gsap.set(global, { scale: 0, y: 0, transformOrigin: globalTransformOrigin })

    const startFloating = () => {
      requestAnimationFrame(startFloating)
      time += 1
      const cos = (Math.cos(time * 0.01 + Math.PI) + 1) * 0.5
      const p = cos * 20

      gsap.set(small.all, { y: small.endValues.all - p * 2 })
      gsap.set(big.all, { y: big.endValues.all - p  })
    }

    // const bg = { p: 0 }
    const sm = { p: 0 }

    tl.current = gsap.timeline({
      paused: !canPlayAnimation,
      delay: 2 + delay,
      onUpdate: () => {
        // big.updateMask(bg.p)
        // big.updatePath(bg.p)

        small.updateMask(sm.p)
        small.updatePath(sm.p)
      },
      onComplete: () => {
        small.endValues.all = gsap.getProperty(small.all, "y")
        big.endValues.all = gsap.getProperty(big.all, "y")
        startFloating()
      }
    })

    // SET THE INITIAL HEIGHT OF THE BIG
    gsap.set(small.all, { scale: 0, y: smallShiftFromSvg - heightBig, transformOrigin: smallTransformOrigin })
    big.updateMask(-heightBig)
    big.updatePath(-heightBig)
    gsap.set(big.top, {y: -heightBig})

    tl.current
      .to(parent, {duration: 0.4, opacity: 1})
      .fromTo(
        global,
        { scale: 0 },
        {
          duration: 3,
          scale: 1,
          ease: "elastic.out(1,0.8)"
        }, 0
      )
      .addLabel("enter")
      .addLabel("end-big")
      .to(small.all, { duration: 1, scale: 1 }, "end-big")
      .fromTo(
        sm,
        { p: resetGapSmall },
        { duration: 2, p: - heightSmall + resetGapSmall, ease: "Power1.easeInOut" },
        "end-big+=1"
      )
      .fromTo(
        small.top,
        { y: resetGapSmall },
        { y: - heightSmall + resetGapSmall, duration: 2, ease: "Power1.easeInOut" },
        "end-big+=1"
      )
      .to(small.all, { duration: 2, y: '-=25' })
  },[])

  useEffect(() => {
    if(canPlayAnimation){
      tl.current.play()
    }
  },[canPlayAnimation])

  return tl
}
