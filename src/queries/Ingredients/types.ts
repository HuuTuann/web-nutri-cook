export enum IngredientKey {
  ID = "id",
  NAME = "name",
  TYPE = "type",
  DESCRIPTION = "description",
  CALORIES = "calories",
  PROTEIN = "protein",
  FAT = "fat",
  CARBS = "carbs",
}

export interface IngredientResponse {
  [IngredientKey.ID]: string;
  [IngredientKey.NAME]: string;
  [IngredientKey.TYPE]: string;
  [IngredientKey.DESCRIPTION]: string;
  [IngredientKey.CALORIES]: number;
  [IngredientKey.PROTEIN]: number;
  [IngredientKey.FAT]: number;
  [IngredientKey.CARBS]: number;
}
