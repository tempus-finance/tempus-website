import React from 'react'

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

export default React.memo(function SocialCta({type = 'telegram', color = '#ffffff',}){
  const socials = useContent('socials')

  return (
    <Cta
      href={socials[type]}
      target='_BLANK'
      type='secondary'
      color={color}
    >
      <SocialIcon
        type={type}
        color={color}
      />
      <span>{copy[type]}</span>
    </Cta>
  )
})
