import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { RootState } from '../../index';
import { userActions } from '../../user';
import { applicationActions } from '../index';

export const refresh = createAsyncThunk('[USER] - refreshToken', async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const {
    setIsLoading,
    setAuthTokens,
  } = applicationActions;
  const { setErrorMessage } = userActions;

  const { application: { refreshToken: oldRefreshToken } } = getState() as RootState;

  try {
    dispatch(setIsLoading(true));

    const {
      data: {
        accessToken,
        expiresIn,
        refreshToken,
        tokenType,
      },
    } = await ApiRequest.refreshToken({ refreshToken: oldRefreshToken as string });

    dispatch(setAuthTokens({
      accessToken,
      expiresIn,
      refreshToken,
      tokenType,
    }));

    dispatch(setErrorMessage(''));
    window.document.location.reload();
  } catch (e: unknown) {
    let errorMessage = 'что-то пошло не так';

    if (axios.isAxiosError(e)) {
      const error = (e?.response?.data as RegistrationFailureResponse) ?? {};
      const isBackendError = 'moreInformation' in error;

      errorMessage = isBackendError ? error.moreInformation : errorMessage;
    }

    dispatch(setErrorMessage(errorMessage));
  } finally {
    dispatch(setIsLoading(false));
  }
});
