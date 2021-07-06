import React from 'react'

import Single from '../Single'
import Cylinder from './Cylinder'

export default React.memo(function Fix({data}) {
  return (
    <Single data={data}>
      <Cylinder/>
    </Single>
  )
})
