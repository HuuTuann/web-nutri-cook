import { RecipeKey } from "@/queries";
import { z } from "zod";

export const ingredientSelectorSchema = z.object({
  [RecipeKey.INGREDIENT_ID]: z.string().nonempty({
    message: "Ingredient name is required",
  }),
  [RecipeKey.UNIT]: z.string().nonempty({
    message: "Unit is required",
  }),
  [RecipeKey.QUANTITY]: z.number().positive({
    message: "Quantity must be more than 0",
  }),
});

export const getDefaultValue = () => {
  return {
    [RecipeKey.INGREDIENT_ID]: "",
    [RecipeKey.UNIT]: "",
    [RecipeKey.QUANTITY]: 0,
  };
};
