import { InvalidFoodAmountError } from "./errors/InvalidFoodAmountError";
import { EmptyFoodNameError } from "./errors/EmptyFoodNameError";
import { Nutrition } from "./types/Nutrition";

export class Food {
  constructor(
    private readonly name: string,
    private readonly unit: string,
    private readonly baseValues: Nutrition
  ) {
    this.validateFoodName(name);

    this.validateFoodAmount(baseValues);
  }
  private validateFoodName(name: string): void {
    if (name.length === 0) {
      throw new EmptyFoodNameError();
    }
  }

  private validateFoodAmount(baseValues: Nutrition): void {
    if (baseValues.amount <= 0) {
      throw new InvalidFoodAmountError(baseValues.amount);
    }
  }

  getName(): string {
    return this.name;
  }

  getUnit(): string {
    return this.unit;
  }

  getBaseValues(): Nutrition {
    return this.baseValues;
  }
}
