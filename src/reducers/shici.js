import { CHANGE_SHICI_RES } from 'constants/ActionTypes'

// const oneShici = '东边日出西边雨，道是无晴却有晴'
const oneShici = '纵使晴明无雨色，入云深处亦沾衣'

export default function shici(state = { oneShici }, action) {
  switch (action.type) {
    case CHANGE_SHICI_RES:
      const { shici } = action
      return {
        "oneShici": shici
      }
    default:
      return state
  }
}
