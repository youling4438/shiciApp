import { CHANGE_SHICI } from 'constants/ActionTypes'
import { createAction } from 'redux-actions'

export const changeShici = createAction(CHANGE_SHICI)

export function change() {
  return (dispatch) => {
    dispatch(changeShici())
  }
}
