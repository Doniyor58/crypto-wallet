import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useActions, useTypedSelector } from '../../hooks';
import {
  getApplicationSelector,
  isAuthorizedUserSelector,
  isNotEnoughUserDataSelector,
} from '../../redux';

interface ProtectedRouteData {
  isAuthorizedUser: boolean;
}

export const useProtectedRoute = (): ProtectedRouteData => {
  const navigate = useNavigate();

  const { redirectRout } = useTypedSelector(getApplicationSelector);
  const isAuthorizedUser = useTypedSelector(isAuthorizedUserSelector);
  const isNotEnoughUserData = useTypedSelector(isNotEnoughUserDataSelector);

  const { getUserInfo } = useActions();

  useEffect(() => {
    if (isNotEnoughUserData) {
      getUserInfo();
    }
  }, []);

  useEffect(() => {
    if (redirectRout) {
      navigate(redirectRout);
    }
  }, [navigate, redirectRout]);

  return {
    isAuthorizedUser,
  };
};
