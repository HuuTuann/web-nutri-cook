import { RecipeKey } from "@/queries";
import { z } from "zod";

export const instructionSchema = z.object({
  [RecipeKey.COOKING_INSTRUCTIONS]: z.string().nonempty({
    message: "Cooking instructions cannot be empty",
  }),
});

export const getDefaultValue = (cookingInstructions?: string) => {
  return {
    [RecipeKey.COOKING_INSTRUCTIONS]: cookingInstructions ?? "",
  };
};
