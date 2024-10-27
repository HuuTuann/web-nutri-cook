import { RecipeKey, RecipeResponse } from "@/queries/Recipes/types";

export const recipesMock: RecipeResponse[] = [
  {
    [RecipeKey.ID]: "1",
    [RecipeKey.NAME]: "Chicken Breast",
    [RecipeKey.COOKING_INSTRUCTIONS]: "Lean chicken breast",
    [RecipeKey.DESCRIPTION]: "Lean chicken breast",
    [RecipeKey.CALORIES]: 165,
    [RecipeKey.PROTEIN]: 31,
    [RecipeKey.FAT]: 3.6,
    [RecipeKey.CARBS]: 0,
  },
];
