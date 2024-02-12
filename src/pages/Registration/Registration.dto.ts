import { SchemaOf } from 'yup';
import * as Yup from 'yup';

import { LOGIN_FIELD_NAME, PASSWORD_FIELD_NAME } from '../Auth/Auth.constants';
import { REPEAT_FIELD_NAME } from './Registration.constants';
import { RegistrationFormSchema } from './Registration.types';

export const RegistrationValidationSchema: SchemaOf<RegistrationFormSchema> = Yup.object({
  [LOGIN_FIELD_NAME]: Yup.string().required(),
  [PASSWORD_FIELD_NAME]: Yup.string().min(4).required(),
  [REPEAT_FIELD_NAME]: Yup.string()
    .oneOf([Yup.ref(PASSWORD_FIELD_NAME), null])
    .required(),
});
