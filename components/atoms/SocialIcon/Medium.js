import React from 'react'

export default React.memo(function Medium({color = '#000000'}){

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="Team-Component"
          transform="translate(-98 -275)">
          <g
            id="Medium_icon"
            transform="translate(98 275)" >
            <path
              d="M13.845 12c0 3.314-2.651 6-5.922 6S2 15.313 2 12s2.652-6 5.923-6c3.27 0 5.922 2.686 5.922 6m6.497 0c0 3.12-1.325 5.649-2.96 5.649-1.636 0-2.962-2.53-2.962-5.649s1.325-5.649 2.96-5.649c1.636 0 2.962 2.53 2.962 5.65M23 12c0 2.793-.466 5.06-1.042 5.06-.575 0-1.04-2.266-1.04-5.06 0-2.795.465-5.061 1.04-5.061C22.534 6.94 23 9.205 23 12"
              id="Shape"
              fill={color}
              fillRule="nonzero"
              transform="matrix(1 0 0 -1 0 24)"/>
          </g>
        </g>
      </g>
    </svg>
  )
})
