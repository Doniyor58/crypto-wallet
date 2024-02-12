import * as Yup from 'yup';
import { SchemaOf } from 'yup';

import { COUNT_FIELD_NAME } from './CoinsGeneration.constants';
import { CoinsGenerationFormSchema } from './CoinsGeneration.types';

export const CoinsGenerationFormValidationSchema: SchemaOf<CoinsGenerationFormSchema> = Yup.object({
  [COUNT_FIELD_NAME]: Yup.number().min(0).required(),
});
