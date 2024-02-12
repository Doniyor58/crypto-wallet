export interface UserReducer {
  id?: string | null;
  isAdmin?: boolean | null;
  userName?: string;
  publicKey?: string;

  coins?: number;
  errorMessage?: string;
}
