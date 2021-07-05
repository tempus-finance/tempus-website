import React, {useEffect, useRef, useMemo, useState} from 'react'
import styled from 'styled-components'

import {colors} from 'data'

import useCylinderChoreography from '../useCylinderChoreography'

const Root = styled.svg`
  overflow: visible;
  transform: translate3d(0, 0, 0);
  opacity: 0;
  pointer-events: none;
`

export default React.memo(function CylinderBig(props){
  const {delay = 0, id, fill = colors.yellow, heightBig = 0, heightSmall = 30, canPlayAnimation = true, delaySmall } = props
  const resetGapSmall = 36
  const smallShiftFromSvg = 0
  const globalTransformOrigin = "60px 348px"
  const smallTransformOrigin = "15px 240px"

  const ref = useRef()

  const smallMaskName = useMemo(() => `mask-4-${id}`, [])
  const idSmallMaskName = useMemo(() => `path-3-${id}`, [])

  const bigMaskName = useMemo(() => `mask-2-${id}`, [])
  const idBigMaskName = useMemo(() => `path-1-${id}`, [])

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
      let ns = this.strings.mask.replaceAll("0v35.15", `${v}v${35.15 - v}`)
      ns = ns.replaceAll("V0", `V${v}`)
      this.mask.setAttribute("d", ns)

      return ns
    },

    small.updatePath = function (v) {
      let ns = this.strings.path.replaceAll("1h23.66v34.15", `${v}h23.66v${34.15 - v}`)
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
      let ns = this.strings.mask.replaceAll(".11v88.56", `${v}v${88.56 - v}`)
      ns = ns.replaceAll("V.11", `V${v}`)
      this.mask.setAttribute("d", ns)

      return ns
    },

    big.updatePath = function (v) {
      let ns = this.strings.path.replaceAll("1v98.42", `${v}v${98.42 - v}`)
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
    delaySmall
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
          d="M0 .11v88.563c0 4.478 2.92 8.952 8.789 12.346 11.717 6.788 30.897 6.788 42.618 0 5.84-3.394 8.789-7.868 8.789-12.346V.11H0z"
          id={idBigMaskName}/>
        <path
          d="M0 0v35.15c0 1.91 1.25 3.81 3.74 5.25 5 2.89 13.18 2.89 18.18 0 2.5-1.44 3.74-3.34 3.74-5.25V0H0z"
          id={idSmallMaskName}/>
      </defs>
      <g
        id="All"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <path
          d="M130.56 562.776c-7.73 0-15.46 1.69-21.32 5.07-11.73 6.78-11.73 17.86 0 24.63 5.86 3.38 13.59 5.07 21.32 5.07s15.46-1.69 21.32-5.07c11.73-6.77 11.73-17.85 0-24.63-5.86-3.38-13.59-5.07-21.32-5.07z"
          id="Shadow"
          fill="#000000"
          fillRule="nonzero"/>
        <g id="Big_all">
          <g
            id="Body_big"
            transform="translate(100 466.066)">
            <mask
              id={bigMaskName}
              fill="white">
              <use xlinkHref={`#${idBigMaskName}`}/>
            </mask>
            <path
              id="Big_path"
              stroke="#000000"
              strokeWidth="2"
              fill={fill}
              d="M59.196 1.11v87.563c0 4.197-2.86 8.325-8.29 11.48-5.723 3.315-13.27 4.957-20.81 4.957-7.54 0-15.085-1.642-20.806-4.957C3.832 96.997 1 92.87 1 88.673h0V1.11h58.196z"/>
            <path
              id="Rectangle"
              fill="#000000"
              fillRule="nonzero"
              opacity=".25"
              mask={`url(#${bigMaskName})`}
              d="M-7.142-258.89h25.507v380H-7.142z"/>
            <path
              id="Rectangle"
              fill="#000000"
              fillRule="nonzero"
              mask={`url(#${bigMaskName})`}
              d="M-16.324-304.89H9.183v496h-25.507z"/>
          </g>
          <path
            d="M130.56 482.366c-7.9 0-15.3-1.75-20.82-4.94-5.22-3.02-8.34-7.42-8.34-11.66s2.88-8.08 8.34-11.23c5.46-3.15 12.92-5 20.82-5s15.3 1.76 20.82 5 8.34 7 8.34 11.23-3.11 8.64-8.32 11.66c-5.54 3.19-12.93 4.94-20.84 4.94z"
            id="Top_big"
            stroke="#000000"
            strokeWidth="2"
            fill={fill}
            fillRule="nonzero"/>
          <g id="Small_all">
            <g
              id="Body_small"
              transform="translate(117.91 430.416)">
              <mask
                id={smallMaskName}
                fill="white">
                <use xlinkHref={`#${idSmallMaskName}`}/>
              </mask>
              <path
                id="Small_path"
                stroke="#000000"
                strokeWidth="2"
                fill={fill}
                d="M1 1h23.66v34.15c0 .778-.269 1.55-.785 2.275-.55.772-1.372 1.485-2.455 2.11-2.363 1.365-5.48 2.033-8.59 2.033-3.11 0-6.227-.668-8.59-2.034C2.162 38.332 1 36.778 1 35.15h0V1z"/>
              <path
                id="Rectangle"
                fill="#000000"
                fillRule="nonzero"
                opacity=".25"
                mask={`url(#${smallMaskName})`}
                d="M2.05-206.86h7v251h-7z"/>
              <path
                id="Rectangle"
                fill="#000000"
                fillRule="nonzero"
                mask={`url(#${smallMaskName})`}
                d="M.45-206.86h4v251h-4z"/>
            </g>
            <path
              d="M130.74 436.826a17.48 17.48 0 01-8.59-2c-2.09-1.24-3.25-2.82-3.25-4.41 0-1.59 1.16-3.17 3.25-4.41a17.48 17.48 0 018.59-2 17.48 17.48 0 018.59 2c2.07 1.24 3.25 2.8 3.25 4.41 0 1.61-1.18 3.17-3.25 4.38a17.48 17.48 0 01-8.59 2.03z"
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
