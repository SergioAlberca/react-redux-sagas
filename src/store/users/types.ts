import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_DELETE_USER_REQUEST,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USERS_FAILURE,
} from './actionTypes';

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUsers {
  data: IUser[];
  total_pages: number;
  page: number;
}

export interface UserState {
  pending: boolean;
  users: IUser[];
  error: string | null;
  totalPages: number | null;
  actualPage: number | null;
}

/* Fetch Users */
export interface FetchUsersSuccessPayload {
  users: IUser[];
  totalPages: number;
  actualPage: number;
}

export interface FetchUsersFailurePayload {
  error: string;
}

export type FetchUsersRequest = {
  type: typeof FETCH_USERS_REQUEST;
  page: number;
};

export type FetchUsersSuccess = {
  type: typeof FETCH_USERS_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof FETCH_USERS_FAILURE;
  payload: FetchUsersFailurePayload;
};

/* Delete User */
export interface FetchDeleteUserPayload {
  id: number;
}

export interface FetchDeleteUserSuccessPayload {
  id: number;
}

export interface FetchDeleteUserFailurePayload {
  error: string;
}

export type FetchDeleteUserRequest = {
  type: typeof FETCH_DELETE_USER_REQUEST;
  payload: FetchDeleteUserPayload;
};

export type FetchDeleteUserSuccess = {
  type: typeof FETCH_DELETE_USER_SUCCESS;
  payload: FetchDeleteUserSuccessPayload;
};

export type FetchDeleteUserFailure = {
  type: typeof FETCH_DELETE_USERS_FAILURE;
  payload: FetchDeleteUserFailurePayload;
};

export type UserActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
  | FetchDeleteUserRequest
  | FetchDeleteUserSuccess
  | FetchDeleteUserFailure;
