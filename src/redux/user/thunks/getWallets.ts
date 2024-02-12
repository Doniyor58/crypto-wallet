import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { LOCAL_STORAGE_PUBLIC_KEY } from '../../../constants';
import { ROUT } from '../../../router';
import { LocaleStorageFacade } from '../../../utils';
import { applicationActions } from '../../application';
import { userActions } from '../user.store';

export const getWallets = createAsyncThunk('[USER] - getWallets', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  const { refresh, setIsLoading, redirectAction } = applicationActions;
  const { setCoins, setPublicKey, setErrorMessage } = userActions;

  try {
    dispatch(setIsLoading(true));

    const { data: { wallets } } = await ApiRequest.wallets();

    if (!wallets.length) {
      dispatch(redirectAction('/create-wallet' as ROUT));
    }

    const { publicKey, balance } = wallets[0];

    dispatch(setCoins(balance));
    dispatch(setPublicKey(publicKey));
    dispatch(setErrorMessage(''));

    LocaleStorageFacade.set(LOCAL_STORAGE_PUBLIC_KEY, publicKey);
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
