import React from 'react';

import { solana } from '../../assets/icons';
import { Form } from '../../components';
import {
  TRANSFER_FORM_INITIAL_VALUE,
  TRANSFER_FORM_INPUTS,
} from './Transfer.constants';
import { useTransfer } from './Transfer.hook';
import styles from './Transfer.module.scss';

const Transfer = () => {
  const {
    coins,
    TransferFormValidationSchema,
    TRANSFER_FORM_BUTTON,
    errorMessage,
    onSubmit,
  } = useTransfer();

  return (
    <div className={styles.transfer}>

      <h1 className={styles.title}>Отправить SOL</h1>

      <img className={styles.logo} src={solana} alt="solana logo" />

      <h4 className={styles.balance}>{`Ваш баланс: ${coins}`}</h4>

      <Form
        inputs={TRANSFER_FORM_INPUTS}
        button={TRANSFER_FORM_BUTTON}
        initialValues={TRANSFER_FORM_INITIAL_VALUE}
        validationSchema={TransferFormValidationSchema}
        allowBackLink
        errorMessage={errorMessage}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default React.memo(Transfer);
