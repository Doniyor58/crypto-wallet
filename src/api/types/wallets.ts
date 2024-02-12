export interface WalletSuccessResponse {
  wallets: [
    {
      balance: number,
      publicKey: string
    },
  ]
}
