import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { applicationActions } from '../../application';
import { RootState } from '../../index';
import { userActions } from '../user.store';

export const getUserInfo = createAsyncThunk('[USER] - getUserInfo', async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const { refresh, setIsLoading } = applicationActions;
  const {
    setUserName, setIsAdmin, setUserId, getWallets, setErrorMessage,
  } = userActions;

  const {
    application: { isLoading },
  } = getState() as RootState;

  try {
    if (!isLoading) {
      dispatch(setIsLoading(true));
    }

    const {
      data: { id, username, isAdmin },
    } = await ApiRequest.userInfo();

    dispatch(setUserId(id));
    dispatch(setUserName(username));
    dispatch(setIsAdmin(isAdmin));
    dispatch(getWallets());
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
    const {
      application: { isLoading: loading },
    } = getState() as RootState;

    if (loading) {
      dispatch(setIsLoading(false));
    }
  }
});
