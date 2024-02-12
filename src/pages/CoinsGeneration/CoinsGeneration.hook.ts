import { useCallback, useEffect, useMemo } from 'react';

import { FormButton, FormButtonTypes, FormState } from '../../components';
import { useActions, useTypedSelector } from '../../hooks';
import { getApplicationSelector, getUserSelector } from '../../redux';
import { buttonContent } from './CoinsGeneration.templates';
import { CoinsGenerationFormSchema } from './CoinsGeneration.types';

export const useCoinsGeneration = () => {
  const { isLoading } = useTypedSelector(getApplicationSelector);
  const { errorMessage = '' } = useTypedSelector(getUserSelector);

  const { generateCoins, setErrorMessage } = useActions();

  const onSubmit = useCallback((formValue: FormState) => {
    const {
      coins,
    } = formValue as unknown as CoinsGenerationFormSchema;

    generateCoins({
      coins,
    });
  }, [generateCoins]);

  const GENERATE_COINS_FORM_BUTTON: FormButton = useMemo(() => ({
    type: FormButtonTypes.submit,
    content: buttonContent,
    disabled: isLoading,
    onSubmit,
  }), [isLoading, onSubmit]);

  useEffect((): () => void => () => setErrorMessage(''), []);

  return {
    TRANSFER_FORM_BUTTON: GENERATE_COINS_FORM_BUTTON,
    errorMessage,

    onSubmit,
  };
};
