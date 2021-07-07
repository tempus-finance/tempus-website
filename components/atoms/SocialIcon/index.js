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
  position: relative;
  display: inline-block;
  width: ${props =>props.width ? width : 'auto'};
  line-height: 0;

  svg {
    ${props => props.hoverColor && `transition: all 0.2s`};

    path {
      ${props => props.hoverColor && `transition: all 0.2s`};
    }
  }

  &:hover {
    svg {
      ${props => props.hoverColor && `transform: translateY(-3px)`};

      path {
        ${props => props.hoverColor && `fill: ${props.hoverColor}`};
      }
    }
  }
`

export default React.memo(function SocialIcon({type, width, hoverColor, ...props}){
  const Component = components[type] || <></>

  return (
    <Root
      width={width}
      className='social-icon'
      hoverColor={hoverColor}
    >
      <Component {...props} />
    </Root>
  )
})
