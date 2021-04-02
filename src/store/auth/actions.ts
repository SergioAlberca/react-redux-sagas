import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE } from './actionTypes';
import {
  FetchLoginRequest,
  FetchLoginSuccess,
  FetchLoginFailure,
  IFetchLoginPayload,
  IFetchLoginFailurePayload,
} from './types';

export const fetchLoginRequest = (
  payload: IFetchLoginPayload,
  history: any,
): FetchLoginRequest => ({
  type: FETCH_LOGIN_REQUEST,
  payload,
  history,
});

export const fetchLoginSuccess = (): FetchLoginSuccess => ({
  type: FETCH_LOGIN_SUCCESS,
});

export const fetchLoginFailure = (payload: IFetchLoginFailurePayload): FetchLoginFailure => ({
  type: FETCH_LOGIN_FAILURE,
  payload,
});
