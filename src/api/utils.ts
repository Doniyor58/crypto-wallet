import {
  LOCAL_STORAGE_ACCESS_TOKEN_KEY,
  LOCAL_STORAGE_PUBLIC_KEY,
  LOCAL_STORAGE_TOKEN_TYPE_KEY,
} from '../constants';
import {LocaleStorageFacade} from '../utils';

export const getAuthorizationHeader = (): string => {
  const accessToken = LocaleStorageFacade.get(LOCAL_STORAGE_ACCESS_TOKEN_KEY) ?? '';
  const tokenType = LocaleStorageFacade.get(LOCAL_STORAGE_TOKEN_TYPE_KEY) ?? '';

  return `${tokenType} ${accessToken}`;
};

export const getPublicKeyHeader = (): string => LocaleStorageFacade.get(LOCAL_STORAGE_PUBLIC_KEY) ?? '';
