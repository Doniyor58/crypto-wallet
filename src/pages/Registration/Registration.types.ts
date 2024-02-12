import { AuthFormSchema } from '../Auth/Auth.types';
import { REPEAT_FIELD_NAME } from './Registration.constants';

export interface RegistrationFormSchema extends AuthFormSchema {
  [REPEAT_FIELD_NAME]: string;
}
