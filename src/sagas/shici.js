import { CHANGE_SHICI_RES, CHANGE_SHICI } from 'constants/ActionTypes'
import { call, put, takeEvery } from 'redux-saga/effects'
import shiciApi from '../servers/shici'

export function* changeShici(action) {
  const shici = '纵使晴明无雨色，入云深处亦沾衣'
  try {
    const data = yield call(shiciApi.change);
    console.log('data :', data);
    yield put({ type: CHANGE_SHICI_RES, data });
  } catch (error) {
    yield put({ type: CHANGE_SHICI_RES, shici });
  }
}

export function* shici() {
  yield* takeEvery(CHANGE_SHICI, changeShici)
}