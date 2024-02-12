import { configureStore } from '@reduxjs/toolkit';

import { applicationReducer } from './application';
import { middlewares } from './middleweares';
import { userReducer } from './user';

export * from './application';
export * from './selectors';
export * from './user';

export const store = configureStore({
  reducer: {
    user: userReducer,
    application: applicationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
