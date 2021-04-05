import { all, call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import { login } from '../../api/api'
import { resetUserFailure } from '../users/actions'
import {
  fetchLoginFailure,
  fetchLoginSuccess,
  resetLoginSuccess,
} from './actions'
import { FETCH_LOGIN_REQUEST, RESET_LOGIN_STORE } from './actionTypes'
import { FetchLoginRequest } from './types'

function* fetchLoginSaga(data: FetchLoginRequest) {
  try {
    const response: SagaReturnType<typeof login> = yield call(
      login,
      data.payload
    )
    yield sessionStorage.setItem('token', response.data.token)
    yield put(fetchLoginSuccess())
    yield data.history.push({
      pathname: `/list-users`,
      state: { reloadData: true },
    })
  } catch (e) {
    yield put(
      fetchLoginFailure({
        error: e.message,
      })
    )
  }
}

function* resetLogin() {
  try {
    yield put(resetLoginSuccess())
  } catch (error) {
    yield put(resetUserFailure(error))
  }
}

function* loginSaga() {
  yield all([
    takeLatest(FETCH_LOGIN_REQUEST, fetchLoginSaga),
    takeLatest(RESET_LOGIN_STORE, resetLogin),
  ])
}

export default loginSaga
