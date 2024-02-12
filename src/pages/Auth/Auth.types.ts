import { LOGIN_FIELD_NAME, PASSWORD_FIELD_NAME } from './Auth.constants';

export interface AuthFormSchema {
  [LOGIN_FIELD_NAME]: string;
  [PASSWORD_FIELD_NAME]: string;
}
