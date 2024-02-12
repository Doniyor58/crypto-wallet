import React from 'react';
import { Navigate } from 'react-router-dom';

import { useProtectedRoute } from './ProtectedRoute.hook';
import { ACCESS_CONTROL, ProtectedRouteProps } from './ProtectedRoute.types';

const ProtectedRoute = ({
  accessControl,
  children,
  redirectPage,
}: ProtectedRouteProps): JSX.Element => {
  const { isAuthorizedUser } = useProtectedRoute();

  switch (accessControl) {
    case ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED:
      return !isAuthorizedUser
        ? <Navigate to={redirectPage} replace />
        : children;

    case ACCESS_CONTROL.FORBIDDEN_FOR_AUTHORIZED:
      return isAuthorizedUser
        ? <Navigate to={redirectPage} replace />
        : children;

    default:
      return children;
  }
};

export default React.memo(ProtectedRoute);
