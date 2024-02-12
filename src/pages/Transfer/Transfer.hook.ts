import { useCallback, useEffect, useMemo } from 'react';

import { FormButton, FormButtonTypes, FormState } from '../../components';
import { useActions, useTypedSelector } from '../../hooks';
import { getApplicationSelector, getUserSelector } from '../../redux';
import { getTransferFormValidationSchema } from './Transfer.dto';
import { buttonContent } from './Transfer.templates';
import { TransferFormSchema } from './Transfer.types';

export const useTransfer = () => {
  const { isLoading } = useTypedSelector(getApplicationSelector);
  const {
    coins,
    errorMessage = '',
  } = useTypedSelector(getUserSelector);

  const { transferRequest, setErrorMessage } = useActions();

  const TransferFormValidationSchema = getTransferFormValidationSchema(coins as number);

  const onSubmit = useCallback((formValue: FormState) => {
    const {
      coins: sendingCoins,
      publicKeyTo,
    } = formValue as unknown as TransferFormSchema;

    transferRequest({
      coins: sendingCoins,
      publicKeyTo,
    });
  }, [transferRequest]);

  const TRANSFER_FORM_BUTTON: FormButton = useMemo(() => ({
    type: FormButtonTypes.submit,
    content: buttonContent,
    disabled: isLoading || !coins,
    onSubmit,
  }), [coins, isLoading, onSubmit]);

  useEffect((): () => void => () => setErrorMessage(''), []);

  return {
    coins,
    TransferFormValidationSchema,
    TRANSFER_FORM_BUTTON,
    errorMessage,

    onSubmit,
  };
};
