import { setUsers } from '../../utils/utils'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_DELETE_USER_FAILURE,
  FETCH_DELETE_USER_SUCCESS,
  FETCH_DELETE_USER_REQUEST,
  FETCH_UPDATE_USER_REQUEST,
  FETCH_UPDATE_USER_SUCCESS,
  FETCH_UPDATE_USER_FAILURE,
  FETCH_DETAIL_USER_REQUEST,
  FETCH_DETAIL_USER_SUCCESS,
  FETCH_DETAIL_USER_FAILURE,
  FETCH_RESET_USER_SUCCESS,
  FETCH_RESET_USER_FAILURE,
} from './actionTypes'
import { UserActions, UserState } from './types'

const initialState: UserState = {
  pending: false,
  users: [],
  error: null,
  totalPages: 0,
  actualPage: 1,
  detailUserError: null,
}

export default (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: [...state.users, ...action.payload.users],
        error: null,
        totalPages: action.payload.totalPages,
        actualPage: action.payload.actualPage,
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      }
    case FETCH_DETAIL_USER_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case FETCH_DETAIL_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        detailUserError: null,
      }
    case FETCH_DETAIL_USER_FAILURE:
      return {
        ...state,
        pending: false,
        detailUserError: action.payload.error,
      }
    case FETCH_DELETE_USER_REQUEST:
      return {
        ...state,
        pending: true,
        detailUserError: null,
      }
    case FETCH_DELETE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: state.users.filter((user) => user.id !== action.payload.id),
        detailUserError: null,
      }
    case FETCH_DELETE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        detailUserError: action.payload.error,
      }
    case FETCH_UPDATE_USER_REQUEST:
      return {
        ...state,
        pending: true,
        detailUserError: null,
      }
    case FETCH_UPDATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: setUsers(state.users, action.payload.users),
        detailUserError: null,
      }
    case FETCH_UPDATE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        detailUserError: action.payload.error,
      }
    case FETCH_RESET_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: [],
        error: null,
        totalPages: 0,
        actualPage: 1,
        detailUserError: null,
      }
    case FETCH_RESET_USER_FAILURE:
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
