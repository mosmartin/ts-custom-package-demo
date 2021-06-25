import { InvalidFoodAmountError } from "./../src/errors/InvalidFoodAmountError";
import { EmptyFoodNameError } from "./../src/errors/EmptyFoodNameError";
import { Food } from "./../src/Food";

describe("Food", () => {
  it("should create a food object", () => {
    const baseValues = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };
    const food = new Food("Rice", "g", baseValues);

    expect(food).toBeDefined();
    expect(food.getName()).toEqual("Rice");
    expect(food.getUnit()).toEqual("g");
    expect(food.getBaseValues().amount).toEqual(100);
    expect(food.getBaseValues().fat).toEqual(30);
    expect(food.getBaseValues().carbohydrate).toEqual(40);
    expect(food.getBaseValues().protein).toEqual(65);
    expect(food.getBaseValues().calories).toEqual(124);
  });

  it("should throw an error when food with an empty name is created", () => {
    const baseValues = {
      amount: 100,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    expect(() => {
      const food = new Food("", "g", baseValues);
    }).toThrowError(EmptyFoodNameError);
  });

  it("should throw an error when food with a 0 amount is created", () => {
    const baseValues = {
      amount: 0,
      fat: 30,
      carbohydrate: 40,
      protein: 65,
      calories: 124,
    };

    expect(() => {
      const food = new Food("Rice", "g", baseValues);
    }).toThrowError(InvalidFoodAmountError);
  });
});
