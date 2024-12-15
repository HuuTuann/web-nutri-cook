export enum RecipeKey {
  ID = "recipe_ID",
  NAME = "recipeName",
  DESCRIPTION = "description",
  COOKING_INSTRUCTIONS = "cookingInstructions",
  IMAGE_URL = "imageURL",
  CALORIES = "totalCalories",
  PROTEIN = "totalProtein",
  FAT = "totalFat",
  CARBS = "totalCarbs",
  INGREDIENT_ID = "ingredientId",
  INGREDIENT_LIST = "ingredientList",
  INGREDIENT_NAME = "ingredientName",
  QUANTITY = "quantity",
  UNIT = "unit",
  MEAL_TYPE = "mealType",
  PREP_TIME = "prepTime",
  COOK_TIME = "cookTime",
  DIFFICULTY_LEVEL = "difficultyLevel",
  NUTRITIONAL_QUALITY = "nutritionalQuality",
}

export interface IngredientSelectorType {
  [RecipeKey.INGREDIENT_ID]?: string;
  [RecipeKey.INGREDIENT_NAME]: string;
  [RecipeKey.QUANTITY]: number;
  [RecipeKey.UNIT]: string;
}

export interface RecipePayload {
  [RecipeKey.ID]?: string;
  [RecipeKey.NAME]: string;
  [RecipeKey.DESCRIPTION]: string;
  [RecipeKey.COOKING_INSTRUCTIONS]: string;
  [RecipeKey.IMAGE_URL]: string;
  [RecipeKey.MEAL_TYPE]: string[];
  [RecipeKey.INGREDIENT_LIST]: IngredientSelectorType[];
  [RecipeKey.PREP_TIME]: number;
  [RecipeKey.COOK_TIME]: number;
  [RecipeKey.DIFFICULTY_LEVEL]: string;
  [RecipeKey.NUTRITIONAL_QUALITY]: [];
}

export interface RecipeResponse {
  [RecipeKey.ID]: string;
  [RecipeKey.NAME]: string;
  [RecipeKey.DESCRIPTION]: string;
  [RecipeKey.COOKING_INSTRUCTIONS]: string;
  [RecipeKey.IMAGE_URL]: string;
  [RecipeKey.CALORIES]: number;
  [RecipeKey.PROTEIN]: number;
  [RecipeKey.FAT]: number;
  [RecipeKey.CARBS]: number;
  [RecipeKey.MEAL_TYPE]: string[];
  [RecipeKey.INGREDIENT_LIST]: IngredientSelectorType[];
  [RecipeKey.PREP_TIME]: number;
  [RecipeKey.COOK_TIME]: number;
  [RecipeKey.DIFFICULTY_LEVEL]: string;
  [RecipeKey.NUTRITIONAL_QUALITY]: [];
}

export enum RecipesMealType {
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  BREAKFAST = "BREAKFAST",
  SNACK = "SNACK",
}

export enum RecipesDifficultyLevel {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

export enum RecipesNutritionalQuantity {
  HIGH_PROTEIN = "HIGH_PROTEIN",
  LOW_PROTEIN = "LOW_PROTEIN",
  HIGH_CALORIE = "HIGH_CALORIE",
  LOW_CALORIE = "LOW_CALORIE",
  HIGH_CARB = "HIGH_CARB",
  LOW_CARB = "LOW_CARB",
  HIGH_FAT = "HIGH_FAT",
  LOW_FAT = "LOW_FAT",
  BALANCED = "BALANCED",
  KETO = "KETO",
  VEGAN = "VEGAN",
  VEGETARIAN = "VEGETARIAN",
  PALEO = "PALEO",
  GLUTEN_FREE = "GLUTEN_FREE",
}
