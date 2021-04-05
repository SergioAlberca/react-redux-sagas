import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  RESET_LOGIN_STORE,
  RESET_LOGIN_STORE_SUCCESS,
  RESET_LOGIN_STORE_FAILURE,
} from './actionTypes'
import {
  FetchLoginRequest,
  FetchLoginSuccess,
  FetchLoginFailure,
  IFetchLoginPayload,
  IFetchLoginFailurePayload,
  ResetLoginStore,
  ResetLoginSuccess,
  ResetLoginFailurePayload,
  ResetLoginFailure,
} from './types'

export const fetchLoginRequest = (
  payload: IFetchLoginPayload,
  history: any
): FetchLoginRequest => ({
  type: FETCH_LOGIN_REQUEST,
  payload,
  history,
})

export const fetchLoginSuccess = (): FetchLoginSuccess => ({
  type: FETCH_LOGIN_SUCCESS,
})

export const fetchLoginFailure = (
  payload: IFetchLoginFailurePayload
): FetchLoginFailure => ({
  type: FETCH_LOGIN_FAILURE,
  payload,
})

export const resetLogin = (): ResetLoginStore => ({
  type: RESET_LOGIN_STORE,
})

export const resetLoginSuccess = (): ResetLoginSuccess => ({
  type: 'RESET_LOGIN_STORE_SUCCESS',
})

export const resetLoginFailure = (
  payload: ResetLoginFailurePayload
): ResetLoginFailure => ({
  type: RESET_LOGIN_STORE_FAILURE,
  payload,
})
