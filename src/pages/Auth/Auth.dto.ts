import * as Yup from 'yup';
import { SchemaOf } from 'yup';

import { LOGIN_FIELD_NAME, PASSWORD_FIELD_NAME } from './Auth.constants';
import { AuthFormSchema } from './Auth.types';

export const AuthFormValidationSchema: SchemaOf<AuthFormSchema> = Yup.object({
  [LOGIN_FIELD_NAME]: Yup.string().required(),
  [PASSWORD_FIELD_NAME]: Yup.string().min(4).required(),
});
