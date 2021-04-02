import { combineReducers } from 'redux';
import userReducer from './users/reducer';
import loginReducer from './auth/reducer';

const rootReducer = combineReducers({
  users: userReducer,
  login: loginReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
