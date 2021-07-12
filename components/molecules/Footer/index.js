/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
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

const Credits = styled.div`
  margin-top: 30px;

  @media ${breakpoints.md}{
    margin-top: 0px;
    margin-left: auto;
    flex-shrink: 0;
  }
`

export default React.memo(function Footer(){
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
        <Credits>

          <a
            className='a--decorated'
            href='http://valentinoborghesi.is/'
            target='_BLANK'> Design@borgatov</a>
          <span>-</span>
          <a
            className='a--decorated'
            href='https://twitter.com/dghez_'
            target='_BLANK'> Code @dghez</a>
        </Credits>
      </Content>
    </footer>
  )
})
