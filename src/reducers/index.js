import { combineReducers } from 'redux'
import counter from './counter'
import shici from './shici'

const rootReducer = combineReducers({
  counter,
  shici,
})

export default rootReducer
