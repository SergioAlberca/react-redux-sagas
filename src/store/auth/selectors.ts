import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.login.pending;

const getIsAutenticated = (state: AppState) => state.login.isAutenticated;

const getError = (state: AppState) => state.login.error;

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getIsAutenticatedSelector = createSelector(
  getIsAutenticated,
  (isAutenticated) => isAutenticated,
);

export const getErrorSelector = createSelector(getError, (error) => error);
