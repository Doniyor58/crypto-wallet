import { LOCAL_STORAGE_PUBLIC_KEY } from '../constants';
import { LocaleStorageFacade } from '../utils';

export enum ApiEndpoint {
  /** user * */
  auth = '/v1/users/login',
  registration = '/v1/users/registration',
  logout = '/v1/users/logout',
  userInfo = '/v1/users/info',

  /** coins * */
  wallets = '/v1/wallets',
}

export const getTransferUrl = (): string => {
  const publicKey = LocaleStorageFacade.get(LOCAL_STORAGE_PUBLIC_KEY);

  return `/v1/wallets/${publicKey}/transfer`;
};

export const getGenerateCoinsUrl = (): string => {
  const publicKey = LocaleStorageFacade.get(LOCAL_STORAGE_PUBLIC_KEY);

  return `/v1/wallets/${publicKey}/coins`;
};
