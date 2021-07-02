import { useEffect, useLayoutEffect, useState } from 'react'
import map from 'lodash-es/map'

export default function useMaxHeight(ref){
  const [maxHeight, setMaxHeight] = useState()
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

  const onResize = () => {
    const h =  Math.max(...map(ref.current.childNodes, (el,i) => el.clientHeight))

    setMaxHeight(h)
  }

  useIsomorphicLayoutEffect(() => {
    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  },[])

  return maxHeight

}
