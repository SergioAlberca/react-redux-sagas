import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.users.pending;

const getUsers = (state) => state.users.users;

const getError = (state: AppState) => state.users.error;

const getActualPage = (state: AppState) => state.users.actualPage;

const getTotalPage = (state: AppState) => state.users.totalPages;

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getUserSelector = createSelector(getUsers, (users) => users);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getActualPageSelector = createSelector(
  getActualPage,
  (actualPage) => actualPage
);

export const getTotalPageSelector = createSelector(
  getTotalPage,
  (totalPages) => totalPages
);
