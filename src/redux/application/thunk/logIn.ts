import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AuthRequest, RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { RootState } from '../../index';
import { userActions } from '../../user';
import { applicationActions } from '../index';

interface LogInProps {
  formData: AuthRequest;
  successRedirect: () => void;
}

export const logIn = createAsyncThunk('[USER] - logIn', async ({
  formData,
  successRedirect,
}: LogInProps, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const {
    refresh,
    setIsLoading,
    setAuthTokens,
  } = applicationActions;
  const { setErrorMessage, getUserInfo } = userActions;

  const { user: { userName } } = getState() as RootState;

  try {
    dispatch(setIsLoading(true));
    dispatch(setErrorMessage(''));

    const {
      data: {
        accessToken,
        expiresIn,
        refreshToken,
        tokenType,
      },
    } = await ApiRequest.login(formData);

    dispatch(setAuthTokens({
      accessToken,
      expiresIn,
      refreshToken,
      tokenType,
    }));

    if (!userName) {
      await dispatch(getUserInfo());
    }

    dispatch(setErrorMessage(''));
    successRedirect();
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
