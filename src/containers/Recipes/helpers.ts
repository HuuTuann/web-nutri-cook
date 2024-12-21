import {
  RecipesDifficultyLevel,
  RecipesMealType,
  RecipesNutritionalQuantity,
} from "@/queries";

export const mapDifficultyLevel = {
  [RecipesDifficultyLevel.EASY]: "Dễ",
  [RecipesDifficultyLevel.MEDIUM]: "Trung bình",
  [RecipesDifficultyLevel.HARD]: "Khó",
};

export const mapMealType = {
  [RecipesMealType.LUNCH]: "Trưa",
  [RecipesMealType.DINNER]: "Tối",
  [RecipesMealType.BREAKFAST]: "Sáng",
  [RecipesMealType.SNACK]: "Ăn vặt",
};

export const mapNutritionalQuality = {
  [RecipesNutritionalQuantity.HIGH_PROTEIN]: "Nhiều đạm",
  [RecipesNutritionalQuantity.LOW_PROTEIN]: "Ít đạm",
  [RecipesNutritionalQuantity.HIGH_CALORIE]: "Nhiều calorie",
  [RecipesNutritionalQuantity.LOW_CALORIE]: "Ít calorie",
  [RecipesNutritionalQuantity.HIGH_CARB]: "Nhiều carb",
  [RecipesNutritionalQuantity.LOW_CARB]: "Ít carb",
  [RecipesNutritionalQuantity.HIGH_FAT]: "Nhiều béo",
  [RecipesNutritionalQuantity.LOW_FAT]: "Ít béo",
  [RecipesNutritionalQuantity.BALANCED]: "Cân bằng",
  [RecipesNutritionalQuantity.KETO]: "Keto",
  [RecipesNutritionalQuantity.VEGAN]: "Thuần chay",
  [RecipesNutritionalQuantity.VEGETARIAN]: "Chay",
  [RecipesNutritionalQuantity.PALEO]: "Paleo",
  [RecipesNutritionalQuantity.GLUTEN_FREE]: "Không gluten",
};
