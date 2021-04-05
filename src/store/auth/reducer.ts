import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  RESET_LOGIN_STORE,
  RESET_LOGIN_STORE_SUCCESS,
  RESET_LOGIN_STORE_FAILURE,
} from './actionTypes'
import { LoginActions, LoginState } from './types'

const initialState: LoginState = {
  pending: false,
  isAutenticated: false,
  error: null,
}

export default (state = initialState, action: LoginActions): LoginState => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        isAutenticated: true,
        error: null,
      }
    case FETCH_LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        isAutenticated: false,
        error: action.payload.error,
      }
    case RESET_LOGIN_STORE_SUCCESS:
      return {
        ...state,
        pending: false,
        isAutenticated: false,
        error: null,
      }
    case RESET_LOGIN_STORE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
