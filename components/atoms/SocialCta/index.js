import React from 'react'
import styled from 'styled-components'

import {SocialIcon, Cta} from 'components'

import {useContent} from 'hooks'

const copy = {
  github: 'Github',
  linkedin: 'Linkedin',
  medium: 'Medium',
  twitter: 'Twitter',
  discord: 'Discord',
  telegram: 'Telegram',
}

const Copy = styled.div`
  margin-left: 5px;
`

export default React.memo(function SocialCta({type = 'telegram', color = '#ffffff', background}){
  const socials = useContent('socials')

  return (
    <Cta
      href={socials[type]}
      target='_BLANK'
      type='secondary'
      color={color}
      background={background}
    >
      <SocialIcon
        type={type}
        color={color}
      />
      <Copy>{copy[type]}</Copy>
    </Cta>
  )
})
