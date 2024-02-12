import { useEffect } from 'react';

import { useActions, useTypedSelector } from '../hooks';
import { isAuthorizedUserSelector } from '../redux';

export const useApplication = () => {
  const isAuthorizedUser = useTypedSelector(isAuthorizedUserSelector);
  const { getUserInfo } = useActions();

  useEffect(() => {
    if (isAuthorizedUser) {
      getUserInfo();
    }
  }, [isAuthorizedUser, getUserInfo]);
};
