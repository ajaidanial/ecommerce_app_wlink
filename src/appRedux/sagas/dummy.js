import { all, fork, put, takeEvery } from 'redux-saga/effects'
import { DUMMY_CONST } from 'constants/dummy'
import { dummyAction2 } from 'appRedux/actions'

export function* dummyAction1Saga() {
  yield takeEvery(DUMMY_CONST, function*({ payload }) {
    yield put(dummyAction2(payload))
  })
}

export default function* rootSaga() {
  yield all([fork(dummyAction1Saga)])
}
