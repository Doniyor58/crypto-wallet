import { AuthFailureResponse } from './auth';

export interface UserInfoSuccessResponse {
  id: string;
  isAdmin: boolean;
  username: string;
}

export type UserInfoFailureResponse = AuthFailureResponse;
