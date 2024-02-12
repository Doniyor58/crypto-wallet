/* eslint-disable react/react-in-jsx-scope */

import { Navigate } from 'react-router-dom';

import { ACCESS_CONTROL, ProtectedRoute } from '../components';
import {
  AuthPage,
  CoinsGenerationPage,
  CoinsGenerationSummaryPage,
  CreateWalletPage,
  RegistrationPage,
  SettingsPage,
  TransferPage,
  TransferSummaryPage,
  WalletPage,
} from '../pages';
import {
  COINS_GENERATION_ROUTE,
  COINS_GENERATION_SUMMARY_ROUTE,
  CREATE_WALLET_ROUTE,
  REGISTRATION_ROUTE,
  ROUT,
  ROUTES,
  SETTINGS_ROUTE,
  TRANSFER_ROUTE,
  TRANSFER_SUMMARY_ROUTE,
  WALLET_ROUTE,
} from './routes';

export const routesConfig = [
  {
    index: true,
    element: (
      <ProtectedRoute
        redirectPage={ROUT.WALLET}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_AUTHORIZED}
      >
        <AuthPage />
      </ProtectedRoute>),
  },
  {
    path: ROUTES[REGISTRATION_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.MAIN}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_AUTHORIZED}
      >
        <RegistrationPage />
      </ProtectedRoute>),
  },

  {
    path: ROUTES[WALLET_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.AUTH}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED}
      >
        <WalletPage />
      </ProtectedRoute>),
  },
  {
    path: ROUTES[CREATE_WALLET_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.AUTH}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED}
      >
        <CreateWalletPage />
      </ProtectedRoute>),
  },

  {
    path: ROUTES[TRANSFER_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.AUTH}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED}
      >
        <TransferPage />
      </ProtectedRoute>),
  },
  {
    path: ROUTES[TRANSFER_SUMMARY_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.AUTH}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED}
      >
        <TransferSummaryPage />
      </ProtectedRoute>),
  },

  {
    path: ROUTES[COINS_GENERATION_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.AUTH}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED}
      >
        <CoinsGenerationPage />
      </ProtectedRoute>),
  },
  {
    path: ROUTES[COINS_GENERATION_SUMMARY_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.AUTH}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED}
      >
        <CoinsGenerationSummaryPage />
      </ProtectedRoute>),
  },

  {
    path: ROUTES[SETTINGS_ROUTE],
    element: (
      <ProtectedRoute
        redirectPage={ROUT.AUTH}
        accessControl={ACCESS_CONTROL.FORBIDDEN_FOR_UNAUTHORIZED}
      >
        <SettingsPage />
      </ProtectedRoute>),
  },

  {
    path: '*',
    element: <Navigate to={ROUT.MAIN} replace />,
  },

];
