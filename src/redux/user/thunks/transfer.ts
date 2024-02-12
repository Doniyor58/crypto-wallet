import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RegistrationFailureResponse, TransferRequest } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import {
  LOCAL_STORAGE_RECEIVE_PUBLIC_KEY,
  LOCAL_STORAGE_TRANSFER_AMOUNT_KEY,
} from '../../../constants';
import { ROUT } from '../../../router';
import { LocaleStorageFacade } from '../../../utils';
import { applicationActions } from '../../application';
import { userActions } from '../user.store';

export const transferRequest = createAsyncThunk(
  '[USER] - transfer',
  async ({
    coins,
    publicKeyTo,
  }: TransferRequest, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const {
      refresh,
      setIsLoading,
      redirectAction,
      clearRedirectAction,
    } = applicationActions;
    const { setErrorMessage } = userActions;

    try {
      dispatch(setIsLoading(true));
      dispatch(setErrorMessage(''));

      await ApiRequest.transfer({
        publicKeyTo,
        coins,
      });

      LocaleStorageFacade.set(LOCAL_STORAGE_RECEIVE_PUBLIC_KEY, publicKeyTo);
      LocaleStorageFacade.set(LOCAL_STORAGE_TRANSFER_AMOUNT_KEY, coins);

      await dispatch(redirectAction('/transfer-summary' as ROUT));
      await dispatch(clearRedirectAction());
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
  },
);
