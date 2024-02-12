import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_PUBLIC_KEY } from '../../constants';
import { LocaleStorageFacade } from '../../utils';
import * as userAsyncActions from './thunks';
import { UserReducer } from './user.types';

const initialState: UserReducer = {};

export const userSlice = createSlice({
  name: '[USER]',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },

    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },

    setPublicKey: (state, action: PayloadAction<string>) => {
      state.publicKey = action.payload;
    },

    logout: (state) => {
      delete state.id;
      delete state.isAdmin;
      delete state.userName;
      delete state.publicKey;

      LocaleStorageFacade.remove(LOCAL_STORAGE_PUBLIC_KEY);
    },

    setCoins: (state, action: PayloadAction<number>) => {
      state.coins = action.payload;
    },

    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
});

const userActions = {
  ...userSlice.actions,
  ...userAsyncActions,
};

const { reducer: userReducer } = userSlice;

export { userActions, userReducer };
