import React from 'react'
import get from 'lodash-es/get'

import {content} from 'data'

export default function useContent(key){
  return  get(content, key, '')

}