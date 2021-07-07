import React from 'react'

export default React.memo(function Discord({color = '#000000'}){
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <g
        id="Telegram_icon"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <path
          d="M20.99 3.753l-2.57 15.429a.633.633 0 01-.322.452.616.616 0 01-.553.03l-4.55-1.858-2.43 2.963a.591.591 0 01-.493.23.543.543 0 01-.22-.04.63.63 0 01-.307-.236.627.627 0 01-.115-.366V16.85l8.678-10.637L7.37 15.505l-3.967-1.627c-.248-.094-.382-.278-.402-.552a.595.595 0 01.322-.593L20.037 3.09a.623.623 0 01.683.02c.22.161.31.375.27.643z"
          id="Shape"
          fill={color}/>
      </g>
    </svg>
  )
})
