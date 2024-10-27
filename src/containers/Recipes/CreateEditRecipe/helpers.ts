import { RecipeKey, RecipePayload } from "@/queries/Recipes/types";
import { z } from "zod";

export const recipeSchema = z.object({
  [RecipeKey.NAME]: z.string().nonempty({
    message: "Name is required",
  }),
  [RecipeKey.COOKING_INSTRUCTIONS]: z.string().nonempty({
    message: "Cooking instructions is required",
  }),
  [RecipeKey.CALORIES]: z.number().int(),
  [RecipeKey.PROTEIN]: z.number().int(),
  [RecipeKey.FAT]: z.number().int(),
  [RecipeKey.CARBS]: z.number().int(),
  [RecipeKey.DESCRIPTION]: z.string(),
});

export const defaultValues: RecipePayload = {
  [RecipeKey.NAME]: "",
  [RecipeKey.COOKING_INSTRUCTIONS]: "",
  [RecipeKey.CALORIES]: 0,
  [RecipeKey.PROTEIN]: 0,
  [RecipeKey.FAT]: 0,
  [RecipeKey.CARBS]: 0,
  [RecipeKey.DESCRIPTION]: "",
};
