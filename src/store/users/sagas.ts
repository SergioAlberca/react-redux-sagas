import { all, call, put, SagaReturnType, takeLatest } from 'redux-saga/effects'
import {
  fetchDeleteUserfailure,
  fetchDeleteUserSuccess,
  fetchDetailUserFailure,
  fetchDetailUserSuccess,
  fetchUpdateUserFailure,
  fetchUpdateUserSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
  resetUserFailure,
  resetUserSuccess,
} from './actions'
import {
  FETCH_DELETE_USER_REQUEST,
  FETCH_DETAIL_USER_REQUEST,
  FETCH_RESET_USER_STORE,
  FETCH_UPDATE_USER_REQUEST,
  FETCH_USERS_REQUEST,
} from './actionTypes'
import { deleteUser, getDetailUser, getUsers, updateUser } from '../../api/api'
import {
  FetchDeleteUserRequest,
  FetchDetailUserRequest,
  FetchUpdateUserRequest,
  FetchUsersRequest,
} from './types'

function* fetchUsersSaga(data: FetchUsersRequest) {
  try {
    const response: SagaReturnType<typeof getUsers> = yield call(
      getUsers,
      data.page
    )
    yield put(
      fetchUsersSuccess({
        users: response.data.data,
        totalPages: response.data.total_pages,
        actualPage: response.data.page,
      })
    )
  } catch (e) {
    yield put(
      fetchUsersFailure({
        error: e.message,
      })
    )
  }
}

function* fetchDeleteUser(data: FetchDeleteUserRequest) {
  try {
    const response: SagaReturnType<typeof deleteUser> = yield call(
      deleteUser,
      data.payload.id
    )
    yield put(
      fetchDeleteUserSuccess({
        id: data.payload.id,
      })
    )
    yield data.history.push({
      pathname: `/list-users`,
      state: { reloadData: false },
    })
  } catch (error) {
    yield put(
      fetchDeleteUserfailure({
        error: error.message,
      })
    )
  }
}

function* fetchUpdateUser(data: FetchUpdateUserRequest) {
  try {
    const response: SagaReturnType<typeof updateUser> = yield call(
      updateUser,
      data.payload.user
    )
    yield put(
      fetchUpdateUserSuccess({
        users: data,
      })
    )
  } catch (error) {
    yield put(
      fetchUpdateUserFailure({
        error: error.message,
      })
    )
  }
}

function* fetchDetailUser(data: FetchDetailUserRequest) {
  try {
    const response: SagaReturnType<typeof getDetailUser> = yield call(
      getDetailUser,
      data.id
    )
    yield put(fetchDetailUserSuccess())
  } catch (error) {
    yield put(
      fetchDetailUserFailure({
        error: error.message,
      })
    )
  }
}

function* fetchResetUser() {
  try {
    yield put(resetUserSuccess())
  } catch (error) {
    yield put(resetUserFailure(error))
  }
}

function* userSaga() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga),
    takeLatest(FETCH_DELETE_USER_REQUEST, fetchDeleteUser),
    takeLatest(FETCH_UPDATE_USER_REQUEST, fetchUpdateUser),
    takeLatest(FETCH_DETAIL_USER_REQUEST, fetchDetailUser),
    takeLatest(FETCH_RESET_USER_STORE, fetchResetUser),
  ])
}

export default userSaga
