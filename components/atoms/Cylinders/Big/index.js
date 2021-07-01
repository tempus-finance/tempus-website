import React from 'react'

export default React.memo(function CylinderBig(){
  return (
    <svg
      width="253"
      height="741"
      viewBox="0 0 253 741"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M0 0v52.46c0 18.72 12.34 37.53 37 51.72 49.32 28.47 130 28.47 179.32 0 24.65-14.23 37-33 37-51.76V0H0z"
          id="path-1"
        />
        <path
          d="M0 0v23.19C0 34.34 7.33 45.5 22 53.96c29.31 16.92 77.27 16.92 106.59 0 14.65-8.46 22-19.62 22-30.77V0H0z"
          id="path-3"
        />
      </defs>
      <g
        id="all"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M126.79 579.94c-32.5 0-65 7.12-89.66 21.35-49.32 28.47-49.32 75.07 0 103.54 24.65 14.23 57.16 21.35 89.66 21.35s65-7.12 89.67-21.35c49.31-28.47 49.31-75.07 0-103.54-24.66-14.26-57.16-21.35-89.67-21.35z"
          id="Shadow"
          fill="#000"
          fillRule="nonzero"
        />
        <g id="Big_all">
          <g
            id="Body_big"
            transform="translate(.14 550.76)">
            <mask
              id="mask-2"
              fill="#fff">
              <use xlinkHref="#path-1" />
            </mask>
            <path
              id="Big_path"
              stroke="#000"
              strokeWidth="2"
              fill="#388A7A"
              d="M252.32 1v51.42c0 9.364-3.153 18.725-9.427 27.502-6.095 8.526-15.126 16.495-27.073 23.392-49.045 28.311-129.275 28.311-178.321 0-11.941-6.872-20.967-14.832-27.06-23.35C4.156 71.182 1 61.813 1 52.46h0V1h251.32z"
            />
            <path
              id="Rectangle"
              fill="#000"
              fillRule="nonzero"
              opacity=".25"
              mask="url(#mask-2)"
              d="M-30.83-426.76H75.31v616.85H-30.83z"
            />
            <path
              id="Rectangle"
              fill="#000"
              fillRule="nonzero"
              mask="url(#mask-2)"
              d="M-69.14-426.76H37v616.85H-69.14z"
            />
          </g>
          <path
            d="M126.79 620.22c-33.8 0-65.46-7.54-89.16-21.22-23.49-13.59-36.49-31.67-36.49-50.91 0-19.24 13-37.31 36.49-50.9 23.7-13.68 55.36-21.25 89.16-21.25s65.47 7.54 89.17 21.22c23.53 13.59 36.48 31.66 36.48 50.9s-13 37.32-36.48 50.91c-23.7 13.71-55.37 21.25-89.17 21.25z"
            id="Top_big"
            stroke="#000"
            strokeWidth="2"
            fill="#388A7A"
            fillRule="nonzero"
          />
        </g>
        <g id="All_small">
          <g
            id="Body_small"
            transform="translate(51.51 473.39)">
            <mask
              id="mask-4"
              fill="#fff">
              <use xlinkHref="#path-3" />
            </mask>
            <path
              id="Small_path"
              stroke="#000"
              strokeWidth="2"
              fill="#388A7A"
              d="M149.59 1v22.19c0 10.87-7.262 21.682-21.5 29.904-29.045 16.761-76.555 16.761-105.59 0-7.05-4.066-12.378-8.76-15.97-13.785C2.85 34.164 1 28.679 1 23.19h0V1h148.59z"
            />
            <path
              id="Rectangle"
              fill="#000"
              fillRule="nonzero"
              opacity=".25"
              mask="url(#mask-4)"
              d="M-18.33-261.67h63.09V105h-63.09z"
            />
            <path
              id="Rectangle"
              fill="#000"
              fillRule="nonzero"
              mask="url(#mask-4)"
              d="M-41.1-261.67h63.09V105H-41.1z"
            />
          </g>
          <path
            d="M126.79 517.87c-20 0-38.77-4.46-52.8-12.56-13.85-8-21.48-18.62-21.48-29.9 0-11.28 7.63-21.91 21.48-29.91 14.03-8.1 32.78-12.56 52.8-12.56 20.02 0 38.77 4.46 52.8 12.56 13.86 8 21.49 18.62 21.49 29.91s-7.63 21.9-21.49 29.9c-14.03 8.1-32.78 12.56-52.8 12.56z"
            id="Top_small"
            stroke="#000"
            strokeWidth="2"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  )
})
