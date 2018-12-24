import { shici } from './shici'

export default function* rootSaga() {
  console.log('rootSaga s ');
  yield [
    shici()
  ]
  console.log('rootSaga e');
}
