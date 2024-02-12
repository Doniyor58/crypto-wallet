import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { userActions } from '../../user';
import { applicationActions } from '../index';

export const logout = createAsyncThunk('[USER] - logout', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const { refresh, setIsLoading } = applicationActions;
  const { setErrorMessage, logoutUser } = userActions;

  try {
    dispatch(setIsLoading(true));
    dispatch(setErrorMessage(''));

    await ApiRequest.logout();

    dispatch(logoutUser());
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
  } finally {
    dispatch(setIsLoading(false));
  }
});
