import { all, call, put, SagaReturnType, takeLatest } from 'redux-saga/effects';
import {
  fetchDeleteUserfailure,
  fetchDeleteUserSuccess,
  fetchUpdateUserFailure,
  fetchUpdateUserSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from './actions';
import {
  FETCH_DELETE_USER_REQUEST,
  FETCH_UPDATE_USER_REQUEST,
  FETCH_USERS_REQUEST,
} from './actionTypes';
import { getUsers } from '../../api/api';
import { FetchDeleteUserRequest, FetchUpdateUserRequest, FetchUsersRequest } from './types';

function* fetchUsersSaga(data: FetchUsersRequest) {
  try {
    const response: SagaReturnType<typeof getUsers> = yield call(getUsers, data.page);
    yield put(
      fetchUsersSuccess({
        users: response.data.data,
        totalPages: response.data.total_pages,
        actualPage: response.data.page,
      }),
    );
  } catch (e) {
    yield put(
      fetchUsersFailure({
        error: e.message,
      }),
    );
  }
}

function* fetchDeleteUser(data: FetchDeleteUserRequest) {
  try {
    yield put(
      fetchDeleteUserSuccess({
        id: data.payload.id,
      }),
    );
    yield data.history.push('/list-users');
  } catch (error) {
    yield put(
      fetchDeleteUserfailure({
        error: error.message,
      }),
    );
  }
}

function* fetchUpdateUser(data: FetchUpdateUserRequest) {
  try {
    yield put(
      fetchUpdateUserSuccess({
        users: data,
      }),
    );
  } catch (error) {
    yield put(
      fetchUpdateUserFailure({
        error: error.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga),
    takeLatest(FETCH_DELETE_USER_REQUEST, fetchDeleteUser),
    takeLatest(FETCH_UPDATE_USER_REQUEST, fetchUpdateUser),
  ]);
}

export default userSaga;
