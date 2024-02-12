import { FormInput, FormState, InputTypeEnum } from '../../components';

export const ADDRESS_FIELD_NAME = 'publicKeyTo';
export const COUNT_FIELD_NAME = 'coins';

export const TRANSFER_FORM_INITIAL_VALUE: FormState = {
  [ADDRESS_FIELD_NAME]: '',
  [COUNT_FIELD_NAME]: '',
};

export const TRANSFER_FORM_INPUTS: FormInput[] = [
  {
    name: ADDRESS_FIELD_NAME,
    label: 'Адресс получателя:',
    type: InputTypeEnum.text,
    placeholder: 'Адрес получателя SOL',
  },
  {
    name: COUNT_FIELD_NAME,
    label: 'Количество',
    type: InputTypeEnum.number,
    placeholder: 'SOL',
  },
];
