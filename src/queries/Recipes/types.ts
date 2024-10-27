export enum RecipeKey {
  ID = "id",
  NAME = "recipeName",
  DESCRIPTION = "description",
  COOKING_INSTRUCTIONS = "cookingInstructions",
  CALORIES = "totalCalories",
  PROTEIN = "totalProtein",
  FAT = "totalFat",
  CARBS = "totalCarbs",
}

export interface RecipePayload {
  [RecipeKey.NAME]: string;
  [RecipeKey.DESCRIPTION]: string;
  [RecipeKey.COOKING_INSTRUCTIONS]: string;
  [RecipeKey.CALORIES]: number;
  [RecipeKey.PROTEIN]: number;
  [RecipeKey.FAT]: number;
  [RecipeKey.CARBS]: number;
}

export interface RecipeResponse extends RecipePayload {
  [RecipeKey.ID]: string;

}
