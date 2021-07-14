import React from "react"
import styled from "styled-components"

const ImageWrapper = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: 48px;
    max-width: 90%;
  }
`

export default React.memo(function UnderConstruction() {
  return (
    <ImageWrapper>
      <img src="images/under-construction.jpg" />
    </ImageWrapper>
  )
})
