import { createSelector } from '@reduxjs/toolkit';

import { RootState } from './index';

const rootStateSelector = (state: RootState) => state;

/** application * */
export const getApplicationSelector = createSelector(rootStateSelector, (state) => state.application);

/** user * */
export const getUserSelector = createSelector(rootStateSelector, (state) => state.user);

export const isAuthorizedUserSelector = createSelector(
  getApplicationSelector,
  ({ accessToken }): boolean => Boolean(accessToken),
);

export const isNotEnoughUserDataSelector = createSelector(
  getUserSelector,
  isAuthorizedUserSelector,
  ({ userName, publicKey }, isAuthorizedUser): boolean => {
    if (!isAuthorizedUser) return false;

    return Boolean(!userName && !publicKey);
  },
);
