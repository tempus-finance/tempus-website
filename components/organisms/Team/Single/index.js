import React, {useMemo} from 'react'
import styled from 'styled-components'

import {SocialIcon} from 'components'

import {colors} from 'data'

import {breakpoints} from 'helpers/breakpoints'

const Root = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;
  text-align: center;

  @media ${breakpoints.md}{
    flex: 0 0 25%;
    margin-bottom: 80px;
  }
`

const Image = styled.div`
  width: 90%;
  max-width: 200px;
  margin-bottom: 20px;
  background: ${props => props.color};
  border: solid 2px ${colors.black};
  border-radius: 50%;
  overflow: hidden;
  line-height: 0;

  @media ${breakpoints.md}{
    width: 100%;
  }
`

const Position = styled.div`
  color: ${props => props.color};
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Link = styled.a`
  font-size: 0;
  line-height: 0;
  padding: 3px 5px;
`

export default React.memo(function Single({data, color}) {

  const socialNodes = useMemo(() => {
    return data.socials.map((el, i) => {
      return (
        <Link
          key={i}
          href={el.href}
          target='_BLANK'
        >
          <SocialIcon
            type={el.type}
            color={colors.white}
            hoverColor={color}
          />
        </Link>
      )
    })
  },[])

  return (
    <Root>
      <Image color={color}>
        <img src={data.image} />
      </Image>
      <div>{data.name}</div>
      <Position color={color}>{data.position}</Position>
      <Socials>{socialNodes}</Socials>
    </Root>
  )
})
