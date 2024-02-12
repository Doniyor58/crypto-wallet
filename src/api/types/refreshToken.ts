import { AuthSuccessResponse } from './auth';

export interface RefreshTokenRequest {
  refreshToken: string
}

export type RefreshTokenSuccessRequest = AuthSuccessResponse;
