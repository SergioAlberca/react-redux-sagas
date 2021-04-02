import { all, fork } from 'redux-saga/effects';
import loginSaga from './auth/sagas';
import usersSaga from './users/sagas';

export function* rootSaga() {
  yield all([fork(usersSaga), fork(loginSaga)]);
}
