export class InvalidFoodAmountError extends Error {
  constructor(amount: number) {
    super(`Invalid amount ${amount}. Amount must be a positive number`);
  }
}
