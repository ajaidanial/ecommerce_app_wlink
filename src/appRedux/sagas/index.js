import { all } from 'redux-saga/effects'

import dummySagas from './dummy'

export default function* rootSaga(getState) {
  yield all([dummySagas()])
}
