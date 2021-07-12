import React, {useRef} from 'react'
import {useMediaQuery} from 'helpers/breakpoints'

import Single from '../Single'
import Cylinder from './Cylinder'

export default React.memo(function Fix({data}) {
  const cylinderRef = useRef()

  const delay = useMediaQuery({
    xs: 0,
    md: 0.5
  })

  return (
    <Single
      data={data}
      cylinderRef={cylinderRef}>
      <Cylinder
        ref={cylinderRef}
        delay={delay}
      />
    </Single>
  )
})
