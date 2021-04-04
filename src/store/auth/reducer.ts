import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from "./actionTypes";
import { LoginActions, LoginState } from "./types";

const initialState: LoginState = {
  pending: false,
  isAutenticated: false,
  error: null,
};

export default (state = initialState, action: LoginActions): LoginState => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        isAutenticated: true,
        error: null,
      };
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        isAutenticated: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
