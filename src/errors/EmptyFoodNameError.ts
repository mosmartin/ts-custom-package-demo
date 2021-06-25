export class EmptyFoodNameError extends Error {
  constructor(message = "Empty food name is not allowed") {
    super(message);
  }
}
