export enum UserRole {
  admin = 'admin',
  client = 'client',
}

export interface AuthRequest {
  login: string;
  password: string;
}

export interface AuthSuccessResponse {
  accessToken: string,
  expiresIn: number,
  refreshToken: string,
  tokenType: string
}

export interface AuthFailureResponse {
  code: string;
  description: string;
  moreInformation: string;
}
