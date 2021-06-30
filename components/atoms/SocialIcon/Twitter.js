import React from 'react'

export default React.memo(function Twitter({color = '#000000'}){
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
          transform="translate(-30 -275)">
          <g
            id="Twitter_icon"
            transform="translate(30 275)" >
            <path
              d="M18.88 6.44a3.866 3.866 0 001.622-2.155 7.162 7.162 0 01-2.345.945A3.595 3.595 0 0015.462 4c-2.04 0-3.692 1.744-3.692 3.894 0 .306.03.603.094.887C8.796 8.62 6.076 7.07 4.253 4.712a4.05 4.05 0 00-.5 1.959c0 1.35.652 2.543 1.643 3.243a3.56 3.56 0 01-1.673-.487v.048c0 1.887 1.272 3.462 2.963 3.818-.31.092-.636.137-.974.137-.238 0-.47-.023-.694-.069.47 1.547 1.833 2.675 3.45 2.705A7.17 7.17 0 013 17.679a10.07 10.07 0 005.66 1.75c6.794 0 10.507-5.935 10.507-11.082 0-.17-.002-.338-.01-.504A7.72 7.72 0 0021 5.826c-.662.31-1.375.52-2.12.613z"
              id="Shape"
              fill={color}/>
          </g>
        </g>
      </g>
    </svg>
  )
})
