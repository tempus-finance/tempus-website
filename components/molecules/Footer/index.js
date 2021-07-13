/* eslint-disable @next/next/no-html-link-for-pages */
import React, {useEffect} from 'react'
import styled from 'styled-components'

import {Container} from 'components'

import {colors} from 'data'

import {breakpoints} from 'helpers/breakpoints'

const Content = styled(Container)`
  && {
    display: flex;
    margin-bottom: 30px;
    flex-direction: column;
    color: ${colors.white};
    line-height: 2.33em;
    font-size: 12px;
    font-weight: 700;
    text-align: center;

    @media ${breakpoints.md}{
      flex-direction: row;
      text-align: left;
      margin-bottom: 40px;
    }
  }

  span {
    padding: 0 4px;
  }
`

export default React.memo(function Footer(){

  useEffect(() => {
    console.log("%c  Designed by borgatov → http://valentinoborghesi.is/",`background-color: ${colors.yellow}; color: ${colors.black}; font-size:10px; padding:8px 10px 6px; border-radius:4px;`)
    console.log("%c  Dev by dghez → https://twitter.com/dghez_",`background-color: ${colors.green}; color: ${colors.white}; font-size:10px; padding:8px 10px 6px; border-radius:4px;`)
  },[])

  return (
    <footer>
      <Content>
        <div>
          <a
            className='a--decorated'
            href='/privacy-policy'>Privacy Policy</a><span>-</span>
          <a
            className='a--decorated'
            href='/terms-of-service'>Terms of Service</a><span>-</span>
          <a

            className='a--decorated'
            href='mailto:contact@tempus.finance'
          >Contact </a>
        </div>
      </Content>
    </footer>
  )
})
