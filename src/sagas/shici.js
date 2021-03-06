import { call, put, takeEvery } from 'redux-saga/effects'
import { CHANGE_SHICI_RES, CHANGE_SHICI } from '../constants/ActionTypes'
import shiciApi from '../services/shici'

function getShici() {
	return shiciApi.change().then((result) => result.json())
}
export function* changeShici() {
	const shici = '纵使晴明无雨色，入云深处亦沾衣'
	try {
		const data = yield call(getShici);
		const { content } = data;
		yield put({ type: CHANGE_SHICI_RES, shici: content });
	} catch (error) {
		yield put({ type: CHANGE_SHICI_RES, shici });
	}
}

export default function* shici() {
	yield takeEvery(CHANGE_SHICI, changeShici)
}
