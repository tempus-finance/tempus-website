import React from 'react'

export default React.memo(function Linkedin({color = '#000000'}){
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
          transform="translate(-64 -275)">
          <g
            id="Linkedin_icon"
            transform="translate(64 275)">
            <path
              d="M4.404 9.13h3.118V20H4.404V9.13zm1.48-1.359H5.86C4.73 7.771 4 6.941 4 5.888 4 4.814 4.754 4 5.905 4c1.15 0 1.858.812 1.88 1.885 0 1.052-.73 1.886-1.902 1.886zM20 20h-3.536v-5.625c0-1.472-.553-2.476-1.77-2.476-.93 0-1.448.677-1.688 1.331-.09.234-.077.56-.077.889V20H9.426s.045-9.964 0-10.87h3.503v1.706c.207-.746 1.327-1.81 3.113-1.81 2.217 0 3.958 1.564 3.958 4.93V20z"
              id="Shape"
              fill={color}/>
          </g>
        </g>
      </g>
    </svg>
  )
})
