import {useRef, useCallback, useEffect, useLayoutEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function useDynamicHeight(ref, currentIndex){
  const isFirst = useRef(true)
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const setHeight = useCallback(() => {
    const duration = isFirst.current ? 0 : 1
    const h = ref.current.childNodes[currentIndex].clientHeight

    gsap.to(ref.current, {duration, height: h, ease: 'Power1.easeInOut',
      onComplete: () => {
        ScrollTrigger.refresh()
        ref.current.childNodes.forEach(el => {
          el.style.position = 'absolute'
        })
        ref.current.childNodes[currentIndex].style.position = 'relative'
        gsap.set(ref.current, {height: 'auto'})

      }})

    if(isFirst.current){
      isFirst.current = false
    }

  },[currentIndex])

  useIsomorphicLayoutEffect(() => {
    setHeight()

    window.addEventListener('resize', setHeight)

    return () => {
      window.removeEventListener('resize', setHeight)
    }
  },[currentIndex])
}
