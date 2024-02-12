import React from 'react';

import { solana } from '../../assets/icons';
import { Form } from '../../components';
import {
  COINS_GENERATION_FORM_INITIAL_VALUE,
  COINS_GENERATION_FORM_INPUTS,
} from './CoinsGeneration.constants';
import { CoinsGenerationFormValidationSchema } from './CoinsGeneration.dto';
import { useCoinsGeneration } from './CoinsGeneration.hook';
import styles from './CoinsGeneration.module.scss';

const CoinsGeneration = () => {
  const {
    TRANSFER_FORM_BUTTON,
    errorMessage,
    onSubmit,
  } = useCoinsGeneration();

  return (
    <div className={styles.transfer}>

      <h1 className={styles.title}>Выпустить SOL</h1>

      <img className={styles.logo} src={solana} alt="solana logo" />

      <Form
        inputs={COINS_GENERATION_FORM_INPUTS}
        button={TRANSFER_FORM_BUTTON}
        initialValues={COINS_GENERATION_FORM_INITIAL_VALUE}
        validationSchema={CoinsGenerationFormValidationSchema}
        allowBackLink
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default React.memo(CoinsGeneration);
