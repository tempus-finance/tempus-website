import React, {useCallback, useEffect, useLayoutEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useDynamicHeight(ref, currentIndex){
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const setHeight = useCallback(() => {
    const h = ref.current.childNodes[currentIndex].clientHeight

    gsap.to(ref.current, {duration:1, height: h, ease: 'Power1.easeInOut', onComplete: () => {
      ScrollTrigger.refresh()
    }})

  },[currentIndex])

  useIsomorphicLayoutEffect(() => {
    setHeight()

    window.addEventListener('resize', setHeight)

    return () => {
      window.removeEventListener('resize', setHeight)
    }
  },[currentIndex])
}
