import { FormInput, FormState, InputTypeEnum } from '../../components';

export const COUNT_FIELD_NAME = 'coins';

export const COINS_GENERATION_FORM_INITIAL_VALUE: FormState = {
  [COUNT_FIELD_NAME]: '',
};

export const COINS_GENERATION_FORM_INPUTS: FormInput[] = [
  {
    name: COUNT_FIELD_NAME,
    label: 'Количество:',
    type: InputTypeEnum.number,
    placeholder: 'SOL',
  },
];
