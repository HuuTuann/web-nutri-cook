export enum IngredientKey {
  ID = "ingredient_ID",
  NAME = "ingredientName",
  TYPE = "ingredientType",
  DESCRIPTION = "ingredientDescription",
  CALORIES = "calories",
  PROTEIN = "protein",
  FAT = "fat",
  CARBS = "carbs",
  IMAGE_URL = "imageURL",
  UNIT = "unit",
  ACTIVE = "active",
}

export interface IngredientPayload {
  [IngredientKey.ID]: string;
  [IngredientKey.NAME]: string;
  [IngredientKey.TYPE]: IngredientType | string;
  [IngredientKey.DESCRIPTION]: string;
  [IngredientKey.CALORIES]: number;
  [IngredientKey.PROTEIN]: number;
  [IngredientKey.FAT]: number;
  [IngredientKey.CARBS]: number;
  [IngredientKey.IMAGE_URL]: string;
  [IngredientKey.UNIT]: string;
}

export interface IngredientResponse extends IngredientPayload {
  [IngredientKey.ACTIVE]: boolean;
}

export enum IngredientType {
  VEGETABLE = "VEGETABLE",
  FRUIT = "FRUIT",
  PROTEIN = "PROTEIN",
  DAIRY = "DAIRY",
  GRAIN = "GRAIN",
  SPICE = "SPICE",
  OTHER = "OTHER",
}
