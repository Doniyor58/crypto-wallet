import { FormInput, FormState, InputTypeEnum } from '../../components';

export const LOGIN_FIELD_NAME = 'login';
export const PASSWORD_FIELD_NAME = 'password';

export const AUTH_FORM_INITIAL_VALUE: FormState = {
  [LOGIN_FIELD_NAME]: '',
  [PASSWORD_FIELD_NAME]: '',
};

export const AUTH_FORM_INPUTS: FormInput[] = [
  {
    name: LOGIN_FIELD_NAME,
    label: 'Логин:',
    type: InputTypeEnum.text,
    placeholder: 'Логин',
  },
  {
    name: PASSWORD_FIELD_NAME,
    label: 'Пароль:',
    type: InputTypeEnum.password,
    placeholder: 'Пароль',
  },
];
