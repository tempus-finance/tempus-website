import create from 'zustand'
import get from 'lodash-es/get'

export const store = create((set) => ({
  // isAppLoaded: false,
  // setIsAppLoaded: (v) => set((state) => { state.isAppLoaded = v }),

  globalVersion: 'green',
  setGlobalVersion: (v) => set((state) => { state.globalVersion = v }),

  isMobileMenuActive: false,
  setIsMobileMenuActive: (v) => set((state) => { state.isMobileMenuActive = v }),
}))

export const useStore = (key) => store((v) => get(v, key, v))
