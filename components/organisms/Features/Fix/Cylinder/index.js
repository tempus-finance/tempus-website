import React, {useEffect, useRef, useMemo, useState, useImperativeHandle} from 'react'
import styled from 'styled-components'
import {gsap} from 'gsap'

import {useCylinderColor} from 'hooks'

const Root = styled.svg`
  overflow: visible;
  transform: translate3d(0, 0, 0);
  opacity: 0;
  pointer-events: none;
`
function CylinderBig(props, ref){
  const {heightBig = 30, heightSmall = 30} = props
  const id = 'fix'
  const color = 'green'
  const resetGapSmall = 23
  // const smallShiftFromSvg = 80
  const globalTransformOrigin = "180px 348px"
  const smallTransformOrigin = "130px 280px"

  const rootRef = useRef()
  const tl = useRef(gsap.timeline())

  const smallMaskName = useMemo(() => `mask-4-${id}`, [])
  const idSmallMaskName = useMemo(() => `path-3-${id}`, [])

  const bigMaskName = useMemo(() => `mask-2-${id}`, [])
  const idBigMaskName = useMemo(() => `path-1-${id}`, [])

  const fill = useCylinderColor(color)

  let [small] = useState({})
  let [big] = useState({})

  useImperativeHandle(ref, () => {
    return {
      playTimeline: () => {
        tl.current.play(0)
      },
      resetTimeline: () => {
        tl.current.pause()
        tl.current.time(0)
      }
    }
  })

  useEffect(() => {
    // CREATING THE ID using a random value in useMemo,
    // useState and even useRef IS NOT FUCKING WORKING
    if(!id){
      throw `
        ------------------------------
          To prevent conflicts the ID is needed! - SVG - Cylinder
        ------------------------------
      `
    }
  },[])


  useEffect(function onMount() {
    const elm = rootRef.current

    small.mask = elm.getElementById(idSmallMaskName),
    small.path = elm.getElementById("Small_path"),
    small.top = elm.getElementById("Top_small"),
    small.body = elm.getElementById("Body_small"),
    small.all = elm.getElementById("Small_all"),
    small.strings = {
      mask: "",
      path: ""
    },

    small.endValues = {
      all: 0,
      mask: 0,
      path: 0
    },

    small.updateMask = function (v) {
      let ns = this.strings.mask.replaceAll("0v23.19", `${v}v${23.19 - v}`)
      ns = ns.replaceAll("V0", `V${v}`)
      this.mask.setAttribute("d", ns)

      return ns
    },

    small.updatePath = function (v) {
      let ns = this.strings.path.replaceAll("1v22.19", `${v}v${22.19 - v}`)
      ns = ns.replaceAll("V1", `V${v}`)
      this.path.setAttribute("d", ns)

      return ns
    }

    small.strings.mask = small.mask.getAttribute("d")
    small.strings.path = small.path.getAttribute("d")

    // SET MASK TO ZERO
    small.updateMask(resetGapSmall)
    small.updatePath(resetGapSmall)

    // BIG
    big.mask = elm.getElementById(idBigMaskName),
    big.path = elm.getElementById("Big_path"),
    big.top = elm.getElementById("Top_big"),
    big.body = elm.getElementById("Body_big"),
    big.all = elm.getElementById("Big_all"),
    big.strings = {
      mask: "",
      path: ""
    },
    big.endValues = {
      all: 0,
      mask: 0,
      path: 0
    },

    big.updateMask = function (v) {
      let ns = this.strings.mask.replaceAll("0v52.46", `${v}v${52.46 - v}`)
      ns = ns.replaceAll("V0", `V${v}`)
      this.mask.setAttribute("d", ns)

      return ns
    },
    big.updatePath = function (v) {
      let ns = this.strings.path.replaceAll("1v51.42", `${v}v${51.42 - v}`)
      ns = ns.replaceAll("V1", `V${v}`)
      this.path.setAttribute("d", ns)

      return ns
    }

    big.strings.mask = big.mask.getAttribute("d")
    big.strings.path = big.path.getAttribute("d")

    createTimeline()
  },[])

  const setInitialValues = () => {
    const global = rootRef.current.getElementById('All')

    gsap.set(small.all, { y: 40 - heightBig, transformOrigin: smallTransformOrigin })
    big.updateMask(-heightBig)
    big.updatePath(-heightBig)

    small.updateMask( - heightSmall)
    small.updatePath( - heightSmall)
    gsap.set(big.top, {y: -heightBig})
    gsap.set(small.top, {y:  - heightSmall})
    gsap.set(global, { scale: 0.1, y: 0, transformOrigin: globalTransformOrigin })
  }

  // CUSTOM ANIMATION
  const createTimeline = () =>{
    setInitialValues()

    const global = rootRef.current.getElementById('All')
    const sm = {p: -heightSmall}
    const bg = {p: -heightBig}

    tl.current = gsap.timeline({
      delay: 1,
      paused: true,
      onUpdate: () => {
        big.updateMask(bg.p)
        big.updatePath(bg.p)

        small.updateMask(sm.p)
        small.updatePath(sm.p)
      },
    })

    const createGrowTl = (v) => {
      const tl = gsap.timeline({delay: 0.5})

      tl
        .to(bg, { p:v, duration: 1.2, ease: 'Power2.easeInOut' }, 0)
        .to(big.top,{ y:v, duration: 1.2, ease: 'Power2.easeInOut' }, 0)

      return tl
    }

    tl.current
      //
      .to(global, {scale: 1, duration: 2, ease: 'Power2.easeOut'})
      .to(rootRef.current, {opacity: 1, duration: 0.3}, 0)
      .addLabel('enter:end')
      .to(small.top, {duration: 1.4, y: resetGapSmall, strokeWidth: 1.3, fill: fill.bigTop, ease: 'Power1.easeInOut'}, 'enter:end')
      .to(small.path, {duration: 1.4, strokeWidth: 1.3, ease: 'Power1.easeInOut'}, 'enter:end')
      .to(sm, {duration: 1.4, p: resetGapSmall, ease: 'Power1.easeInOut'}, 'enter:end')
      .to(small.all, {duration: 1.4,  scale: 1.6813, transformOrigin: '116px 281px', y: 47, ease: 'Power1.easeInOut'}, 'enter:end')
      .to(small.all, {duration: 0.6, opacity: 0})
      .set(small.all, {display: 'none'})
      .addLabel('morph:end', '-=0.2')
      .add(createGrowTl(-70))
      .add(createGrowTl(-110))
      .add(createGrowTl(-150))

  }

  return (
    <Root
      ref={rootRef}
      width="260"
      height="600"
      viewBox="0 0 260 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M0 0v52.46c0 18.72 12.34 37.53 37 51.72 49.32 28.47 130 28.47 179.32 0 24.65-14.23 37-33 37-51.76V0H0z"
          id={idBigMaskName}/>
        <path
          d="M0 0v23.19C0 34.34 7.33 45.5 22 53.96c29.31 16.92 77.27 16.92 106.59 0 14.65-8.46 22-19.62 22-30.77V0H0z"
          id={idSmallMaskName}/>
      </defs>
      <g
        id="All"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <path
          d="M129.65 452c-32.5 0-65 7.12-89.66 21.35-49.32 28.47-49.32 75.07 0 103.54 24.65 14.23 57.16 21.35 89.66 21.35s65-7.12 89.67-21.35c49.31-28.47 49.31-75.07 0-103.54-24.66-14.26-57.16-21.35-89.67-21.35z"
          id="Shadow"
          fill="#000000"
          fillRule="nonzero"/>
        <g id="Big_all">
          <g
            id="Body_big"
            transform="translate(3 422.82)">
            <mask
              id={bigMaskName}
              fill="white">
              <use xlinkHref={`#${idBigMaskName}`}/>
            </mask>
            <path
              id="Big_path"
              stroke="#000000"
              fill={fill.bigBody}
              strokeWidth="2"
              d="M252.32 1v51.42c0 9.364-3.153 18.725-9.427 27.502-6.095 8.526-15.126 16.495-27.073 23.392-49.045 28.311-129.275 28.311-178.321 0-11.941-6.872-20.967-14.832-27.06-23.35C4.156 71.182 1 61.813 1 52.46h0V1h251.32z"/>
            <path
              id="Rectangle"
              fill="#000000"
              fillRule="nonzero"
              opacity=".25"
              mask={`url(#${bigMaskName})`}
              d="M-30.83-426.76H75.31v616.85H-30.83z"/>
            <path
              id="Rectangle"
              fill="#000000"
              fillRule="nonzero"
              mask={`url(#${bigMaskName})`}
              d="M-69.14-426.76H37v616.85H-69.14z"/>
          </g>
          <path
            d="M129.65 492.28c-33.8 0-65.46-7.54-89.16-21.22C17 457.47 4 439.39 4 420.15c0-19.24 13-37.31 36.49-50.9C64.19 355.57 95.85 348 129.65 348s65.47 7.54 89.17 21.22c23.53 13.59 36.48 31.66 36.48 50.9s-13 37.32-36.48 50.91c-23.7 13.71-55.37 21.25-89.17 21.25z"
            id="Top_big"
            stroke="#000000"
            strokeWidth="2"
            fill={fill.bigTop}
            fillRule="nonzero"/>
          <g id="Small_all">
            <g
              id="Body_small"
              transform="translate(54.37 314.45)">
              <mask
                id={smallMaskName}
                fill="white">
                <use xlinkHref={`#${idSmallMaskName}`}/>
              </mask>
              <path
                id="Small_path"
                stroke="#000000"
                fill={fill.smallBody}
                strokeWidth="2"
                d="M149.59 1v22.19c0 10.87-7.262 21.682-21.5 29.904-29.045 16.761-76.555 16.761-105.59 0-7.05-4.066-12.378-8.76-15.97-13.785C2.85 34.164 1 28.679 1 23.19h0V1h148.59z"/>
              <path
                id="Rectangle"
                fill="#000000"
                fillRule="nonzero"
                opacity=".25"
                mask={`url(#${smallMaskName})`}
                d="M-18.33-261.67h63.09V105h-63.09z"/>
              <path
                id="Rectangle"
                fill="#000000"
                fillRule="nonzero"
                mask={`url(#${smallMaskName})`}
                d="M-41.1-261.67h63.09V105H-41.1z"/>
            </g>
            <path
              d="M129.65 358.93c-20 0-38.77-4.46-52.8-12.56-13.85-8-21.48-18.62-21.48-29.9 0-11.28 7.63-21.91 21.48-29.91 14.03-8.1 32.78-12.56 52.8-12.56 20.02 0 38.77 4.46 52.8 12.56 13.86 8 21.49 18.62 21.49 29.91s-7.63 21.9-21.49 29.9c-14.03 8.1-32.78 12.56-52.8 12.56z"
              id="Top_small"
              stroke="#000000"
              strokeWidth="2"
              fill="#FFFFFF"
              fillRule="nonzero"/>
          </g>
        </g>
      </g>
    </Root>
  )
}


export default React.memo(React.forwardRef(CylinderBig))
