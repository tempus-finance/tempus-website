import React from 'react'
import styled from 'styled-components'

import {AppCta, SocialIcon} from 'components'

import {useStore} from 'store'
import {useContent} from 'hooks'

import {colors} from 'data'

const Nav = styled.nav`
  text-transform: uppercase;
  color: ${props => props.color};
  transition: color 0.4s;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`

const Link = styled.a`
  margin-right: 40px;
  font-size: 14px;
  font-weight: 700;
`

const Dropdown = styled.li`
  margin-right: 40px;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  padding: 0 5px;
  cursor: pointer;

  .dropdown__content {
    position: absolute;
    min-width: 120%;
    display: flex;
    flex-direction: column;
    background: ${props => props.backgroundColor};
    margin-top: 10px;
    padding: 0 10%;
    left: -5%;
    clip-path: inset(0px 0px 95% 0px);
    transition: all 0.35s ease-in-out;
  }

  &:hover {
    .dropdown__content {
      clip-path: inset(0px 0px 0% 0px);

      a {
        opacity: 1;
        &:nth-child(1) {
          transition-delay: 0.10s;
        }

        &:nth-child(2) {
          transition-delay: 0.20s;
        }

        &:nth-child(3) {
          transition-delay: 0.30s;
        }
        &:nth-child(4) {
          transition-delay: 0.40s;
        }
      }
    }
  }

  a {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 5px 0;
    padding: 0 5px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    transition-delay: 0.4s;
  }
`

const Arrow = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid currentColor;
  margin-left: 15px;
  margin-bottom: 1px;
  `

export default React.memo(function Desktop({backgroundColor}){
  const isGreen = useStore('globalVersion') === 'green'
  const color = isGreen ? colors.white : colors.black

  const socials = useContent('socials')

  return (
    <Nav color={color}>
      <ul>
        <li>
          <Link
            className='a--decorated'
            href='http://docs.tempus.finance'
            target='_BLANK'>Documentation</Link>
        </li>

        <Dropdown
          backgroundColor={backgroundColor}
        >
          <span>Community <Arrow /></span>
          <span className='dropdown__content'>
            <a
              href={socials.twitter}
              target='_BLANK'
            >
              Twitter <SocialIcon
                type='twitter'
                color={color}/>
            </a>
            <a
              href={socials.discord}
              target='_BLANK'
            >
              Discord <SocialIcon
                type='discord'
                color={color}/>
            </a>
            <a
              href={socials.medium}
              target='_BLANK'
            >
              Medium <SocialIcon
                type='medium'
                color={color}/>
            </a>
            <a
              href={socials.github}
              target='_BLANK'
            >
              Github <SocialIcon
                type='github'
                color={color}/>
            </a>
          </span>
        </Dropdown>

        {/* TEMPORARY DISABLED */}
        {/* <li>
          <Link
            href='https://barnbridge.com/token-bond'
            target='_BLANK'>Governance</Link>
        </li> */}

        <li>
          <AppCta />
        </li>
      </ul>

    </Nav>
  )
})
