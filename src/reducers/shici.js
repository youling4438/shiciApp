import { CHANGE_SHICI_RES } from 'constants/ActionTypes'

const oneShici = '东边日出西边雨，道是无晴却有晴'

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
