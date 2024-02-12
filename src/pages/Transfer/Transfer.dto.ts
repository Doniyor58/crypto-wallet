import * as Yup from 'yup';
import { SchemaOf } from 'yup';

import { ADDRESS_FIELD_NAME, COUNT_FIELD_NAME } from './Transfer.constants';
import { TransferFormSchema } from './Transfer.types';

export const getTransferFormValidationSchema = (maxCount: number): SchemaOf<TransferFormSchema> => Yup.object({
  [ADDRESS_FIELD_NAME]: Yup.string().min(10).required(),
  [COUNT_FIELD_NAME]: Yup.number().max(maxCount).required(),
});
