import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegistrationRequest } from '../../api';
import { FormButton, FormButtonTypes, FormState } from '../../components';
import { useActions, useTypedSelector } from '../../hooks';
import { getApplicationSelector, getUserSelector } from '../../redux/selectors';
import { ROUT } from '../../router';
import { buttonContent } from './Registration.templates';

interface RegistrationHookData {
  REGISTRATION_FORM_BUTTON: FormButton
  errorMessage: string
  isLoading: boolean

  onSubmit: (formValue: FormState) => void
}

/* eslint-disable react-hooks/exhaustive-deps */

export const useRegistration = (): RegistrationHookData => {
  const navigate = useNavigate();

  const { signUp, setErrorMessage } = useActions();
  const { isLoading } = useTypedSelector(getApplicationSelector);
  const { errorMessage = '' } = useTypedSelector(getUserSelector);

  const successRedirect = useCallback(() => {
    navigate(ROUT.WALLET);
  }, [navigate]);

  const onSubmit = useCallback((formValue: FormState) => {
    const formData = {
      login: formValue.login,
      password: formValue.password,
    } as RegistrationRequest;

    signUp({
      formData,
      successRedirect,
    });
  }, [signUp, successRedirect]);

  const REGISTRATION_FORM_BUTTON: FormButton = useMemo(() => ({
    type: FormButtonTypes.submit,
    content: buttonContent,
    disabled: isLoading,
    onSubmit,
  }), [isLoading, onSubmit]);

  useEffect((): () => void => () => setErrorMessage(''), []);

  return {
    REGISTRATION_FORM_BUTTON,
    errorMessage,
    isLoading,

    onSubmit,
  };
};
