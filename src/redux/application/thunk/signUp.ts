import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { AuthRequest, RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { userActions } from '../../user';
import { applicationActions } from '../index';

interface SignUpProps {
  formData: AuthRequest;
  successRedirect: () => void;
}

export const signUp = createAsyncThunk(
  '[USER] - signUp',
  async ({ formData, successRedirect }: SignUpProps, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { logIn, setIsLoading } = applicationActions;
    const { setUserName, setUserId, setErrorMessage } = userActions;

    try {
      dispatch(setIsLoading(true));
      dispatch(setErrorMessage(''));

      const { data: { id, username } } = await ApiRequest.registration(formData);

      dispatch(setUserId(id));
      dispatch(setUserName(username));

      dispatch(logIn({
        formData,
        successRedirect,
      }));
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
  },
);
