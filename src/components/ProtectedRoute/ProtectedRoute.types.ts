/* eslint-disable @typescript-eslint/naming-convention */

import { ROUT } from '../../router';

export enum ACCESS_CONTROL {
  FORBIDDEN_FOR_AUTHORIZED = 'FORBIDDEN_FOR_AUTHORIZED',
  FORBIDDEN_FOR_UNAUTHORIZED = 'FORBIDDEN_FOR_UNAUTHORIZED',
  FORBIDDEN_FOR_USERS_WITHOUT_WALLET = 'FORBIDDEN_FOR_USERS_WITHOUT_WALLET',
}

export interface ProtectedRouteProps {
  accessControl: ACCESS_CONTROL;
  children: JSX.Element;
  redirectPage: ROUT;
}
