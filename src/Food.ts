import { EmptyFoodNameError } from "./errors/EmptyFoodNameError";
import { Nutrition } from "./types/Nutrition";

export class Food {
  constructor(
    private readonly name: string,
    private readonly unit: string,
    private readonly baseValues: Nutrition
  ) {
    if (name.length === 0) {
      throw new EmptyFoodNameError();
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
