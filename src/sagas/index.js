import { all } from 'redux-saga/effects'

import shici from './shici'


export default function* rootSaga() {
    yield all([
        ...shici(),
    ])
}
