import { AxiosResponse } from 'axios';
import { v4 as uuidv4 } from 'uuid';

import {
  ApiEndpoint,
  getGenerateCoinsUrl,
  getTransferUrl,
} from './api.endpoints';
import { axiosInstance } from './api.instance';
import {
  AuthRequest,
  AuthSuccessResponse,
  RegistrationRequest,
  RegistrationSuccessResponse,
  TransferRequest,
  UserInfoSuccessResponse,
} from './types';
import { CreateWalletSuccessResponse } from './types/createWallet';
import { GenerateCoinsRequest } from './types/generateCoins';
import {
  RefreshTokenRequest,
  RefreshTokenSuccessRequest,
} from './types/refreshToken';
import { WalletSuccessResponse } from './types/wallets';
import { getAuthorizationHeader, getPublicKeyHeader } from './utils';

export const ApiRequest = {
  /** auth * */
  login: (payload: AuthRequest): Promise<AxiosResponse<AuthSuccessResponse>> =>
    axiosInstance.post(ApiEndpoint.auth, payload, {
      headers: {
        'X-Request-ID': uuidv4(),
      },
    }),

  refreshToken: (payload: RefreshTokenRequest): Promise<AxiosResponse<RefreshTokenSuccessRequest>> =>
    axiosInstance.put(ApiEndpoint.auth, payload, {
      headers: {
        'X-Request-ID': uuidv4(),
      },
    }),

  registration: (payload: RegistrationRequest): Promise<AxiosResponse<RegistrationSuccessResponse>> =>
    axiosInstance.post(ApiEndpoint.registration, payload, {
      headers: {
        'X-Request-ID': uuidv4(),
      },
    }),

  logout: (): Promise<AxiosResponse> =>
    axiosInstance.delete(ApiEndpoint.logout, {
      headers: {
        Authorization: getAuthorizationHeader(),
        'X-Request-ID': uuidv4(),
      },
    }),

  /** user * */
  userInfo: (): Promise<AxiosResponse<UserInfoSuccessResponse>> =>
    axiosInstance.get(ApiEndpoint.userInfo, {
      headers: {
        Authorization: getAuthorizationHeader(),
        'X-Request-ID': uuidv4(),
      },
    }),

  /** coins * */
  wallets: (): Promise<AxiosResponse<WalletSuccessResponse>> => axiosInstance.get(ApiEndpoint.wallets, {
    headers: {
      Authorization: getAuthorizationHeader(),
      'X-Request-ID': uuidv4(),
    },
  }),

  createWallets: (): Promise<AxiosResponse<CreateWalletSuccessResponse>> =>
    axiosInstance.post(ApiEndpoint.wallets, {}, {
      headers: {
        Authorization: getAuthorizationHeader(),
        'X-Request-ID': uuidv4(),
      },
    }),

  transfer: (payload: TransferRequest): Promise<AxiosResponse> =>
    axiosInstance.put(
      getTransferUrl(),
      payload,
      {
        headers: {
          Authorization: getAuthorizationHeader(),
          'X-Request-ID': uuidv4(),
          publicKey: getPublicKeyHeader(),
        },
      },
    ),

  generateCoins: (payload: GenerateCoinsRequest): Promise<AxiosResponse> =>
    axiosInstance.put(
      getGenerateCoinsUrl(),
      payload,
      {
        headers: {
          Authorization: getAuthorizationHeader(),
          'X-Request-ID': uuidv4(),
          publicKey: getPublicKeyHeader(),
        },
      },
    ),
};
