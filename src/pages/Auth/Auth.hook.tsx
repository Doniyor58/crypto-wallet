import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthRequest } from '../../api';
import { FormButton, FormButtonTypes, FormState } from '../../components';
import { useActions, useTypedSelector } from '../../hooks';
import { getApplicationSelector, getUserSelector } from '../../redux';
import { ROUT } from '../../router';
import { buttonContent } from './Auth.templates';

interface AuthHookData {
  AUTH_FORM_BUTTON: FormButton
  errorMessage: string
  isLoading: boolean

  onSubmit: (formValue: FormState) => void
}

/* eslint-disable react-hooks/exhaustive-deps */

export const useAuth = (): AuthHookData => {
  const navigate = useNavigate();

  const { logIn, setErrorMessage } = useActions();
  const { isLoading } = useTypedSelector(getApplicationSelector);
  const { errorMessage = '' } = useTypedSelector(getUserSelector);

  const successRedirect = useCallback(() => {
    navigate(ROUT.WALLET);
  }, [navigate]);

  const onSubmit = useCallback((formValue: FormState) => {
    const formData = formValue as unknown as AuthRequest;

    logIn({
      formData,
      successRedirect,
    });
  }, [logIn, successRedirect]);

  const AUTH_FORM_BUTTON: FormButton = useMemo(() => ({
    type: FormButtonTypes.submit,
    content: buttonContent,
    disabled: isLoading,
    onSubmit,
  }), [isLoading, onSubmit]);

  useEffect((): () => void => () => setErrorMessage(''), []);

  return {
    AUTH_FORM_BUTTON,
    errorMessage,
    isLoading,

    onSubmit,
  };
};
