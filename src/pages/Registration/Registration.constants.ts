import { FormInput, FormState, InputTypeEnum } from '../../components';
import { AUTH_FORM_INITIAL_VALUE, AUTH_FORM_INPUTS } from '../Auth/Auth.constants';

export const REPEAT_FIELD_NAME = 'repeatPassword';

export const REGISTRATION_FORM_INITIAL_VALUE: FormState = {
  ...AUTH_FORM_INITIAL_VALUE,
  [REPEAT_FIELD_NAME]: '',
};

export const REGISTRATION_FORM_INPUTS: FormInput[] = [
  ...AUTH_FORM_INPUTS,
  {
    name: REPEAT_FIELD_NAME,
    label: 'Повторите пароль:',
    type: InputTypeEnum.password,
    placeholder: 'Пароль',
  },
];
