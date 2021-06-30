import React from 'react'
import styled from 'styled-components'

import Github from "./Github"
import Linkedin from "./Linkedin"
import Medium from "./Medium"
import Twitter from "./Twitter"

const components = {
  github: Github,
  linkedin: Linkedin,
  medium: Medium,
  twitter: Twitter
}

const Root = styled.a`
  width: ${props =>props.width ? width : 'auto'};
  line-height: 0;
`

export default React.memo(function SocialIcon({type, width, href, ...props}){
  const Component = components[type] || <></>

  return (
    <Root
      width={width}
      href={href}
      target='_BLANK'
      className='social-icon'
    >
      <Component {...props} />
    </Root>
  )
})
