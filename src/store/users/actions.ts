import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_DELETE_USER_REQUEST,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USERS_FAILURE,
} from './actionTypes';
import {
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchDeleteUserRequest,
  FetchDeleteUserPayload,
  FetchDeleteUserSuccessPayload,
  FetchDeleteUserSuccess,
  FetchDeleteUserFailurePayload,
  FetchDeleteUserFailure,
} from './types';

export const fetchUsersRequest = (page: number): FetchUsersRequest => ({
  type: FETCH_USERS_REQUEST,
  page,
});

export const fetchUsersSuccess = (payload: FetchUsersSuccessPayload): FetchUsersSuccess => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (payload: FetchUsersFailurePayload): FetchUsersFailure => ({
  type: FETCH_USERS_FAILURE,
  payload,
});

export const fetchDeleteUser = (payload: FetchDeleteUserPayload): FetchDeleteUserRequest => ({
  type: FETCH_DELETE_USER_REQUEST,
  payload,
});

export const fetchDeleteUserSuccess = (
  payload: FetchDeleteUserSuccessPayload,
): FetchDeleteUserSuccess => ({
  type: FETCH_DELETE_USER_SUCCESS,
  payload,
});

export const fetchDeleteUserfailure = (
  payload: FetchDeleteUserFailurePayload,
): FetchDeleteUserFailure => ({
  type: FETCH_DELETE_USERS_FAILURE,
  payload,
});
