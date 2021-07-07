import React, {useEffect, useRef, useMemo, useState} from 'react'
import styled from 'styled-components'

import useCylinderChoreography from '../useCylinderChoreography'
import {useCylinderColor} from 'hooks'

const Root = styled.svg`
  overflow: visible;
  transform: translate3d(0, 0, 0);
  opacity: 0;
  pointer-events: none;
`

export default React.memo(function CylinderBig(props){
  const {delay = 0, id, color = 'green', heightBig = 0, heightSmall = 30, canPlayAnimation = true, delaySmall, canFloat } = props
  const resetGapSmall = 15
  const smallShiftFromSvg = 75
  const globalTransformOrigin = "130px 548px"
  const smallTransformOrigin = "60px 160px"

  const ref = useRef()

  const smallMaskName = useMemo(() => `mask-4-${id}`, [])
  const idSmallMaskName = useMemo(() => `path-3-${id}`, [])

  const bigMaskName = useMemo(() => `mask-2-${id}`, [])
  const idBigMaskName = useMemo(() => `path-1-${id}`, [])

  const fill = useCylinderColor(color)

  let [small] = useState({})
  let [big] = useState({})

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


  useEffect(() => {
    const elm = ref.current

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
      let ns = this.strings.mask.replaceAll("0v16.25", `${v}v${16.25 - v}`)
      ns = ns.replaceAll("V0", `V${v}`)
      this.mask.setAttribute("d", ns)

      return ns
    },

    small.updatePath = function (v) {
      let ns = this.strings.path.replaceAll("1v15.25", `${v}v${15.25 - v}`)
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
      let ns = this.strings.mask.replaceAll("0v99.31", `${v}v${99.31 - v}`)
      ns = ns.replaceAll("V0", `V${v}`)
      this.mask.setAttribute("d", ns)

      return ns
    },
    big.updatePath = function (v) {
      let ns = this.strings.path.replaceAll("1v98.31", `${v}v${98.31 - v}`)
      ns = ns.replaceAll("V1", `V${v}`)
      this.path.setAttribute("d", ns)

      return ns
    }

    big.strings.mask = big.mask.getAttribute("d")
    big.strings.path = big.path.getAttribute("d")
  },[])

  useCylinderChoreography({
    elm: ref,
    small,
    big,
    delay,
    heightBig,
    heightSmall,
    resetGapSmall,
    smallShiftFromSvg,
    globalTransformOrigin,
    smallTransformOrigin,
    canPlayAnimation,
    delaySmall,
    canFloat
  })

  return (
    <Root
      ref={ref}
      width="260"
      height="600"
      viewBox="0 0 260 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M0 0v99.31c0 10.7 7 21.39 21.07 29.5 28.09 16.22 74.07 16.22 102.17 0 14-8.11 21.07-18.8 21.07-29.5V0H0z"
          id={idBigMaskName}/>
        <path
          d="M0 0v16.25C0 22.17 3.89 28.1 11.68 32.6c15.57 9 41.05 9 56.63 0 7.78-4.5 11.68-10.43 11.68-16.35V0H0z"
          id={idSmallMaskName}/>
      </defs>
      <g
        id="All"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <path
          d="M130.16 516c-18.52 0-37 4.06-51.09 12.17-28.09 16.22-28.09 42.77 0 59 14 8.11 32.57 12.17 51.09 12.17 18.52 0 37-4.06 51.09-12.17 28.1-16.22 28.1-42.77 0-59-14.05-8.11-32.57-12.17-51.09-12.17z"
          id="Shadow"
          fill="#000000"
          fillRule="nonzero"/>
        <g id="Big_all">
          <g
            id="Body_big"
            transform="translate(58 401.89)">
            <mask
              id={bigMaskName}
              fill="white">
              <use xlinkHref={`#${idBigMaskName}`}/>
            </mask>
            <path
              id="Big_path"
              fill={fill.bigBody}
              stroke="#000000"
              strokeWidth="2"
              d="M143.31 1v98.31c0 10.42-6.982 20.763-20.57 28.634-27.825 16.061-73.355 16.061-101.17 0-6.753-3.892-11.85-8.384-15.286-13.194C2.767 109.825 1 104.571 1 99.31h0V1h142.31z"/>
            <path
              id="Rectangle"
              fill="#000000"
              fillRule="nonzero"
              opacity=".25"
              mask={`url(#${bigMaskName})`}
              d="M-17.56-173.74h60.47v351.48h-60.47z"/>
            <path
              id="Rectangle"
              fill="#000000"
              fillRule="nonzero"
              mask={`url(#${bigMaskName})`}
              d="M-39.39-173.74h60.47v351.48h-60.47z"/>
          </g>
          <path
            d="M130.16 442.55c-19.18 0-37.15-4.27-50.59-12C66.31 422.86 59 412.69 59 401.88c0-10.81 7.31-21 20.57-28.63 13.44-7.76 31.41-12 50.59-12 19.18 0 37.15 4.27 50.59 12 13.27 7.66 20.57 17.83 20.57 28.63s-7.3 21-20.57 28.64c-13.44 7.76-31.41 12.03-50.59 12.03z"
            id="Top_big"
            stroke="#000000"
            strokeWidth="2"
            fill={fill.bigTop}
            fillRule="nonzero"/>
          <g id="Small_all">
            <g
              id="Body_small"
              transform="translate(90.17 312.1)">
              <mask
                id={smallMaskName}
                fill="white">
                <use xlinkHref={`#${idSmallMaskName}`}/>
              </mask>
              <path
                id="Small_path"
                fill={fill.smallBody}
                stroke="#000000"
                strokeWidth="2"
                d="M78.99 1v15.25c0 5.64-3.813 11.223-11.18 15.484-7.653 4.42-17.739 6.616-27.819 6.616-10.08 0-20.163-2.195-27.81-6.616C4.802 27.472 1 21.89 1 16.25h0V1h77.99z"/>
              <path
                id="Rectangle"
                fill="#000000"
                fillRule="nonzero"
                opacity=".25"
                mask={`url(#${smallMaskName})`}
                d="M-9.74-135.11h33.52V59.72H-9.74z"/>
              <path
                id="Rectangle"
                fill="#000000"
                fillRule="nonzero"
                mask={`url(#${smallMaskName})`}
                d="M-21.84-135.11h33.52V59.72h-33.52z"/>
            </g>
            <path
              d="M130.16 334.19c-10.55 0-20.43-2.35-27.82-6.61-7.21-4.16-11.18-9.66-11.18-15.48s4-11.33 11.18-15.49c7.39-4.26 17.27-6.61 27.82-6.61s20.44 2.35 27.84 6.61c7.21 4.16 11.18 9.66 11.18 15.49s-4 11.32-11.18 15.48c-7.4 4.26-17.28 6.61-27.84 6.61z"
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
})
