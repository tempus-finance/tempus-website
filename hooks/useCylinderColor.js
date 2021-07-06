import {useMemo} from 'react'
import {colors} from 'data'
import get from 'lodash-es/get'

const COLORS = {
  green: {
    bigBody: colors.green,
    bigTop: '#388A7A',
    smallBody: '#6AA79B'
  },
  yellow: {
    bigBody: colors.yellow,
    bigTop: '#FFECC2',
    smallBody: '#FFF2D6'
  },
  violet: {
    bigBody: colors.violet,
    bigTop: '#CEC8FE',
    smallBody: '#DEDBFE'
  }
}

export default function useCylinderColor(key){
  return useMemo(() => get(COLORS, key, COLORS.green), [key])
}
