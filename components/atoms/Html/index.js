import React, { memo } from "react"

export default memo(function Html({ children }) {
  return <span dangerouslySetInnerHTML={{ __html: children }} />
})
