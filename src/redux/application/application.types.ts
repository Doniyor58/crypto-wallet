/** reducer * */
import { ROUT } from '../../router';

export interface ApplicationReducer {
  isLoading: boolean;

  accessToken?: string | null;
  refreshToken?: string | null;
  expiresIn?: number | null;
  tokenType?: string | null

  redirectRout?: ROUT
}

/** PayloadActions * */
export interface SetAuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}
