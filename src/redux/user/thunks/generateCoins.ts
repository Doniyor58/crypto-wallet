import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { RegistrationFailureResponse } from '../../../api';
import { ApiRequest } from '../../../api/api.requests';
import { GenerateCoinsRequest } from '../../../api/types/generateCoins';
import { LOCAL_STORAGE_GENERATED_COINS_COUNT_KEY } from '../../../constants';
import { ROUT } from '../../../router';
import { LocaleStorageFacade } from '../../../utils';
import { applicationActions } from '../../application';
import { userActions } from '../user.store';

export const generateCoins = createAsyncThunk(
  '[USER] - generateCoins',
  async (requestData: GenerateCoinsRequest, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const { setErrorMessage } = userActions;
    const {
      refresh,
      setIsLoading,
      redirectAction,
      clearRedirectAction,
    } = applicationActions;

    try {
      dispatch(setIsLoading(true));

      await ApiRequest.generateCoins(requestData);

      LocaleStorageFacade.set(LOCAL_STORAGE_GENERATED_COINS_COUNT_KEY, requestData.coins);

      await dispatch(redirectAction('/coins-generation-summary' as ROUT));
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
