import memoize from 'lodash-es/memoize'
import isMobile from 'ismobilejs'

const isMobileDevice = memoize(() => {
  if (typeof window === 'undefined') {
    return [false, false]
  }

  let r = isMobile(window.navigator)

  return [r.any, r]
})

export default function useMobileDevice() {
  return isMobileDevice()
}


