import { ADDRESS_FIELD_NAME, COUNT_FIELD_NAME } from './Transfer.constants';

export interface TransferFormSchema {
  [ADDRESS_FIELD_NAME]: string;
  [COUNT_FIELD_NAME]: number;
}
