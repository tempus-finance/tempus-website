import React, {useRef} from 'react'

import Single from '../Single'
import Cylinder from './Cylinder'

export default React.memo(function Earn({data}) {
  const cylinderRef = useRef()

  return (
    <Single
      data={data}
      cylinderRef={cylinderRef}>
      <Cylinder ref={cylinderRef}/>
    </Single>
  )
})
