export interface TransferRequest {
  coins: number;
  publicKeyTo: string;
}

export interface TransferFailureResponse {
  code: string;
  description: string;
  moreInformation: string;
}
