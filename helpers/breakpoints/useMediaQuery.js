import { useMemo, useEffect, useState, useCallback } from "react"
import findLastKey from "lodash-es/findLastKey"
import map from "lodash-es/map"
import mapValues from "lodash-es/mapValues"

import breakpoints from "./breakpoints.yml"

export default function useMediaQuery(data) {
  const [matches, setMatches] = useState(mapValues(breakpoints, () => false))

  const addListener = useCallback((mediaQuery, breakpoint) => {
    const callback = (mql) => {
      setMatches((matches) => ({
        ...matches,
        [breakpoint]: mql.matches,
      }))
    }

    const mql = window.matchMedia(mediaQuery)

    mql.addListener(callback)

    callback(mql)

    return () => {
      mql.removeListener(callback)
    }
  }, [])

  useEffect(() => {
    const listeners = map(breakpoints, addListener)

    return () => {
      listeners.forEach((remove) => remove())
    }
  }, [])

  return useMemo(() => {
    const current =
      findLastKey(breakpoints, (...props) => {
        const breakpoint = props[1]

        return breakpoint in data && matches[breakpoint]
      }) || "xs"

    return data?.[current]
  }, [data, matches])
}
