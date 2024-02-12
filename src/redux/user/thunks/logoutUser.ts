import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { applicationActions } from '../../application';
import { userActions } from '../user.store';

export const logoutUser = createAsyncThunk('[USER] - logoutUser', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const { refresh } = applicationActions;
  const {
    logout, setErrorMessage,
  } = userActions;

  try {
    await ApiRequest.logout();

    dispatch(logout());
  } catch (e: unknown) {
    let errorMessage = 'что-то пошло не так';

    if (axios.isAxiosError(e)) {
      const error = (e?.response?.data as RegistrationFailureResponse) ?? {};
      const isBackendError = 'moreInformation' in error;

      if (isBackendError && error.code === '40302') {
        dispatch(refresh());

        return;
      }

      errorMessage = isBackendError ? error.moreInformation : errorMessage;
    }

    dispatch(setErrorMessage(errorMessage));
  }
});
