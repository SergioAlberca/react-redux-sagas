import { all, call, put, SagaReturnType, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  fetchDeleteUserfailure,
  fetchDeleteUserSuccess,
  fetchUsersFailure,
  fetchUsersSuccess,
} from './actions';
import { FETCH_DELETE_USER_REQUEST, FETCH_USERS_REQUEST } from './actionTypes';
import { deleteUser, getUsers } from '../../api/api';
import { FetchDeleteUserRequest, FetchUsersRequest } from './types';

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
    const response: SagaReturnType<typeof deleteUser> = yield call(deleteUser, data.payload.id);
    yield put(
      fetchDeleteUserSuccess({
        id: data.payload.id,
      }),
    );
  } catch (error) {
    yield put(
      fetchDeleteUserfailure({
        error: error.message,
      }),
    );
  }
}

function* userSaga() {
  yield all([
    takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga),
    takeLatest(FETCH_DELETE_USER_REQUEST, fetchDeleteUser),
  ]);
}

export default userSaga;
