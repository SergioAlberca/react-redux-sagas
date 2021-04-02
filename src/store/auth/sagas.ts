import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { login } from '../../api/api';
import { fetchLoginFailure, fetchLoginSuccess } from './actions';
import { FETCH_LOGIN_REQUEST } from './actionTypes';
import { FetchLoginRequest } from './types';

function* fetchLoginSaga(data: FetchLoginRequest) {
  try {
    const response: SagaReturnType<typeof login> = yield call(login, data.payload);
    yield sessionStorage.setItem('token', response.data.token);
    yield put(fetchLoginSuccess());
    yield data.history.push('/list-users');
  } catch (e) {
    yield put(
      fetchLoginFailure({
        error: e.message,
      }),
    );
  }
}

function* loginSaga() {
  yield takeEvery(FETCH_LOGIN_REQUEST, fetchLoginSaga);
}

export default loginSaga;
