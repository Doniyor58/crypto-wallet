import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_EXPIRES_IN_KEY,
  LOCAL_STORAGE_REFRESH_TOKEN_KEY,
  LOCAL_STORAGE_TOKEN_TYPE_KEY,
} from '../../constants';
import { ROUT } from '../../router';
import { LocaleStorageFacade } from '../../utils';
import { ApplicationReducer, SetAuthTokens } from './application.types';
import * as applicationAsyncActions from './thunk';

const initialState: ApplicationReducer = {
  isLoading: false,

  accessToken: LocaleStorageFacade.get(LOCAL_STORAGE_ACCESS_TOKEN_KEY),
  refreshToken: LocaleStorageFacade.get(LOCAL_STORAGE_REFRESH_TOKEN_KEY),
  expiresIn: LocaleStorageFacade.get(LOCAL_STORAGE_EXPIRES_IN_KEY),
  tokenType: LocaleStorageFacade.get(LOCAL_STORAGE_TOKEN_TYPE_KEY),
};

export const applicationSlice = createSlice({
  name: '[APPLICATION]',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setAuthTokens: (state, action: PayloadAction<SetAuthTokens>) => {
      const {
        accessToken, refreshToken, expiresIn, tokenType,
      } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.expiresIn = expiresIn;
      state.tokenType = tokenType;

      LocaleStorageFacade.set(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken);
      LocaleStorageFacade.set(LOCAL_STORAGE_REFRESH_TOKEN_KEY, refreshToken);
      LocaleStorageFacade.set(LOCAL_STORAGE_TOKEN_TYPE_KEY, tokenType);
      LocaleStorageFacade.set(LOCAL_STORAGE_EXPIRES_IN_KEY, expiresIn);
    },

    removeAuthTokens: (state) => {
      delete state.accessToken;
      delete state.refreshToken;
      delete state.expiresIn;
      delete state.tokenType;

      LocaleStorageFacade.remove(LOCAL_STORAGE_ACCESS_TOKEN_KEY);
      LocaleStorageFacade.remove(LOCAL_STORAGE_REFRESH_TOKEN_KEY);
      LocaleStorageFacade.remove(LOCAL_STORAGE_TOKEN_TYPE_KEY);
      LocaleStorageFacade.remove(LOCAL_STORAGE_EXPIRES_IN_KEY);
    },

    redirectAction: (state, action: PayloadAction<ROUT>) => {
      state.redirectRout = action.payload;
    },

    clearRedirectAction: (state) => {
      delete state.redirectRout;
    },
  },
});

const applicationActions = {
  ...applicationSlice.actions,
  ...applicationAsyncActions,
};

const { reducer: applicationReducer } = applicationSlice;

export { applicationActions, applicationReducer };
