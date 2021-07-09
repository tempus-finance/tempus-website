import React from 'react'
import styled from 'styled-components'

// OVERRIDE STILE & SPACING FOR SECONDARY PAGES
const Root = styled.div`
  .f-h1 {
    margin-bottom: 20px;
  }

  .f-h4{
    margin-top: 80px;
    font-weight: 700;
  }

  a {
    text-decoration: underline;
  }
`

export default React.memo(function BasicPageLayout({children}){
  return (
    <Root>
      {children}
    </Root>
  )
})
