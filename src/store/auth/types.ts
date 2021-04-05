import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  RESET_LOGIN_STORE,
  RESET_LOGIN_STORE_SUCCESS,
  RESET_LOGIN_STORE_FAILURE,
} from './actionTypes'

export interface LoginState {
  pending: boolean
  isAutenticated: boolean
  error: string | null
}

export interface IFetchLoginPayload {
  email: string
  password: string
}

export interface IFetchLoginFailurePayload {
  error: string
}

export type FetchLoginRequest = {
  type: typeof FETCH_LOGIN_REQUEST
  payload: IFetchLoginPayload
  history: any
}

export type FetchLoginSuccess = {
  type: typeof FETCH_LOGIN_SUCCESS
}

export type FetchLoginFailure = {
  type: typeof FETCH_LOGIN_FAILURE
  payload: IFetchLoginFailurePayload
}

export type ResetLoginStore = {
  type: typeof RESET_LOGIN_STORE
}

export interface ResetLoginFailurePayload {
  error: string
}

export type ResetLoginSuccess = {
  type: typeof RESET_LOGIN_STORE_SUCCESS
}

export type ResetLoginFailure = {
  type: typeof RESET_LOGIN_STORE_FAILURE
  payload: ResetLoginFailurePayload
}

export type LoginActions =
  | FetchLoginRequest
  | FetchLoginSuccess
  | FetchLoginFailure
  | ResetLoginStore
  | ResetLoginSuccess
  | ResetLoginFailure
