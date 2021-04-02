import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_DELETE_USERS_FAILURE,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_REQUEST,
} from './actionTypes';
import { UserActions, UserState } from './types';

const initialState: UserState = {
  pending: false,
  users: [],
  error: null,
  totalPages: 0,
  actualPage: 1,
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: [...state.users, ...action.payload.users],
        error: null,
        totalPages: action.payload.totalPages,
        actualPage: action.payload.actualPage,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error,
      };
    case FETCH_DELETE_USER_REQUEST:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_DELETE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: state.users.filter((user) => user.id !== action.payload.id),
        error: null,
      };
    case FETCH_DELETE_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
