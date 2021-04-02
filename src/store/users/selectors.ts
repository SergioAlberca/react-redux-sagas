import { createSelector } from 'reselect';

const getPending = (state) => state.users.pending;

const getUsers = (state) => state.users.users;

const getError = (state) => state.users.error;

const getActualPage = (state) => state.users.actualPage;

const getTotalPage = (state) => state.users.totalPages;

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getUserSelector = createSelector(getUsers, (users) => users);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getActualPageSelector = createSelector(getActualPage, (actualPage) => actualPage);

export const getTotalPageSelector = createSelector(getTotalPage, (totalPages) => totalPages);
