import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETCH_DELETE_USER_REQUEST,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_FAILURE,
  FETCH_UPDATE_USER_REQUEST,
  FETCH_UPDATE_USER_SUCCESS,
  FETCH_DETAIL_USER_REQUEST,
  FETCH_DETAIL_USER_SUCCESS,
  FETCH_DETAIL_USER_FAILURE,
  FETCH_RESET_USER_STORE,
  FETCH_RESET_USER_SUCCESS,
  FETCH_RESET_USER_FAILURE,
} from './actionTypes'
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
  FetchUpdateUserRequest,
  FetchUpdateUserPayload,
  FetchUpdateUserSuccessPayload,
  FetchUpdateUserSuccess,
  FetchUpdateUserFailure,
  FetchDetailUserRequest,
  FetchDetailUserSuccess,
  FetchDetailUserFailurePayload,
  FetchDetailUserFailure,
  resetUserStore,
  resetUserStoreSuccess,
  resetUserStoreFailure,
  ResetUserStoreFailurePayload,
} from './types'

export const fetchUsersRequest = (page: number): FetchUsersRequest => ({
  type: FETCH_USERS_REQUEST,
  page,
})

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: FETCH_USERS_SUCCESS,
  payload,
})

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: FETCH_USERS_FAILURE,
  payload,
})

export const fetchDeleteUser = (
  payload: FetchDeleteUserPayload,
  history: any
): FetchDeleteUserRequest => ({
  type: FETCH_DELETE_USER_REQUEST,
  payload,
  history,
})

export const fetchDeleteUserSuccess = (
  payload: FetchDeleteUserSuccessPayload
): FetchDeleteUserSuccess => ({
  type: FETCH_DELETE_USER_SUCCESS,
  payload,
})

export const fetchDeleteUserfailure = (
  payload: FetchDeleteUserFailurePayload
): FetchDeleteUserFailure => ({
  type: FETCH_DELETE_USER_FAILURE,
  payload,
})

export const fetchUpdateUser = (
  payload: FetchUpdateUserPayload
): FetchUpdateUserRequest => ({
  type: FETCH_UPDATE_USER_REQUEST,
  payload,
})

export const fetchUpdateUserSuccess = (
  payload: FetchUpdateUserSuccessPayload
): FetchUpdateUserSuccess => ({
  type: FETCH_UPDATE_USER_SUCCESS,
  payload,
})

export const fetchUpdateUserFailure = (
  payload: FetchUsersFailurePayload
): FetchUpdateUserFailure => ({
  type: 'FETCH_UPDATE_USER_FAILURE',
  payload,
})

export const fetchDetailUserRequest = (id: number): FetchDetailUserRequest => ({
  type: FETCH_DETAIL_USER_REQUEST,
  id,
})

export const fetchDetailUserSuccess = (): FetchDetailUserSuccess => ({
  type: FETCH_DETAIL_USER_SUCCESS,
})

export const fetchDetailUserFailure = (
  payload: FetchDetailUserFailurePayload
): FetchDetailUserFailure => ({
  type: FETCH_DETAIL_USER_FAILURE,
  payload,
})

export const resetUser = (): resetUserStore => ({
  type: FETCH_RESET_USER_STORE,
})

export const resetUserSuccess = (): resetUserStoreSuccess => ({
  type: FETCH_RESET_USER_SUCCESS,
})

export const resetUserFailure = (
  payload: ResetUserStoreFailurePayload
): resetUserStoreFailure => ({
  type: FETCH_RESET_USER_FAILURE,
  payload,
})
