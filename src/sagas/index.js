import { all } from 'redux-saga/effects'
import * as shici from './shici'

export default function* root() {
  yield all([
    shici()
  ])
}
