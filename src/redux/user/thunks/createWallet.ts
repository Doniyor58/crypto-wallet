import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {RegistrationFailureResponse} from '../../../api';
import {ApiRequest} from '../../../api/api.requests';
import {ROUT} from '../../../router';
import {applicationActions} from '../../application';
import {userActions} from '../user.store';

export const createWallet = createAsyncThunk('[USER] - createWallet', async (_, thunkAPI) => {
  const {dispatch, getState} = thunkAPI;
  const {refresh, redirectAction, clearRedirectAction} = applicationActions;
  const {setCoins, setPublicKey, setErrorMessage} = userActions;

  try {
    const {data: {publicKey}} = await ApiRequest.createWallets();

    dispatch(setCoins(0));
    dispatch(setPublicKey(publicKey));

    await dispatch(redirectAction('/wallet' as ROUT));
    await dispatch(clearRedirectAction());
    await dispatch(setErrorMessage(''));
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
