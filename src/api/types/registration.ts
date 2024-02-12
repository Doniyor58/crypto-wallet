import { AuthFailureResponse, AuthRequest } from './auth';

export type RegistrationRequest = AuthRequest;

export interface RegistrationSuccessResponse {
  id: string,
  username: string
}

export type RegistrationFailureResponse = AuthFailureResponse;
