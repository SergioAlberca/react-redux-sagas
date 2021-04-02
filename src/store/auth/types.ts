import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from './actionTypes';

export interface LoginState {
  pending: boolean;
  isAutenticated: boolean;
  error: string | null;
}

export interface IFetchLoginPayload {
  email: string;
  password: string;
}

export interface IFetchLoginFailurePayload {
  error: string;
}

export type FetchLoginRequest = {
  type: typeof FETCH_LOGIN_REQUEST;
  payload: IFetchLoginPayload;
  history: any;
};

export type FetchLoginSuccess = {
  type: typeof FETCH_LOGIN_SUCCESS;
};

export type FetchLoginFailure = {
  type: typeof FETCH_LOGIN_FAILURE;
  payload: IFetchLoginFailurePayload;
};

export type LoginActions = FetchLoginRequest | FetchLoginSuccess | FetchLoginFailure;
