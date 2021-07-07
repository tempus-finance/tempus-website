import React from 'react'
import styled from 'styled-components'

import Github from "./Github"
import Linkedin from "./Linkedin"
import Medium from "./Medium"
import Twitter from "./Twitter"
import Discord from "./Discord"
import Telegram from "./Telegram"

const components = {
  github: Github,
  linkedin: Linkedin,
  medium: Medium,
  twitter: Twitter,
  discord: Discord,
  telegram: Telegram,
}

const Root = styled.span`
  width: ${props =>props.width ? width : 'auto'};
  line-height: 0;
`

export default React.memo(function SocialIcon({type, width, ...props}){
  const Component = components[type] || <></>

  return (
    <Root
      width={width}
      className='social-icon'
    >
      <Component {...props} />
    </Root>
  )
})
