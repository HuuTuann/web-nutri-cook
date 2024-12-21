import { z } from "zod";
import {
  IngredientSelectorType,
  RecipeKey,
  RecipePayload,
  RecipesDifficultyLevel,
  RecipesMealType,
  RecipesNutritionalQuantity,
} from "@/queries";
import { ingredientSelectorSchema } from "../IngredientSelector/CreateEditIngredientSelector/helpers";

export const recipeSchema = z.object({
  [RecipeKey.NAME]: z.string().nonempty({
    message: "Name is required",
  }),
  [RecipeKey.COOKING_INSTRUCTIONS]: z.string().nonempty({
    message: "Cooking instructions is required",
  }),
  [RecipeKey.INGREDIENT_LIST]: z.array(ingredientSelectorSchema).nonempty({
    message: "Ingredient is required",
  }),
  [RecipeKey.MEAL_TYPE]: z.array(z.string()).nonempty({
    message: "Meal type is required",
  }),
  [RecipeKey.PREP_TIME]: z.number().min(0, {
    message: "Prep time is required",
  }),
  [RecipeKey.COOK_TIME]: z.number().min(0, {
    message: "Cook time is required",
  }),
  [RecipeKey.DIFFICULTY_LEVEL]: z.string().nonempty({
    message: "Difficulty level is required",
  }),
  [RecipeKey.NUTRITIONAL_QUALITY]: z.array(z.string()).nonempty({
    message: "Nutritional quality is required",
  }),
  [RecipeKey.DESCRIPTION]: z.string(),
  [RecipeKey.IMAGE_URL]: z.string().nonempty({
    message: "Image is required",
  }),
});

export const defaultValues: RecipePayload = {
  [RecipeKey.NAME]: "",
  [RecipeKey.COOKING_INSTRUCTIONS]: "",
  [RecipeKey.DESCRIPTION]: "",
  [RecipeKey.IMAGE_URL]: "",
  [RecipeKey.MEAL_TYPE]: [],
  [RecipeKey.INGREDIENT_LIST]: [],
  [RecipeKey.PREP_TIME]: 0,
  [RecipeKey.COOK_TIME]: 0,
  [RecipeKey.DIFFICULTY_LEVEL]: "",
  [RecipeKey.NUTRITIONAL_QUALITY]: [],
};

export const getDefaultValue = (recipe?: RecipePayload) => {
  return {
    [RecipeKey.NAME]: recipe?.[RecipeKey.NAME] || "",
    [RecipeKey.COOKING_INSTRUCTIONS]:
      recipe?.[RecipeKey.COOKING_INSTRUCTIONS] || "",
    [RecipeKey.DESCRIPTION]: recipe?.[RecipeKey.DESCRIPTION] || "",
    [RecipeKey.IMAGE_URL]: recipe?.[RecipeKey.IMAGE_URL] || "",
    [RecipeKey.MEAL_TYPE]: recipe?.[RecipeKey.MEAL_TYPE] || [],
    [RecipeKey.INGREDIENT_LIST]: recipe?.[RecipeKey.INGREDIENT_LIST] || [],
    [RecipeKey.PREP_TIME]: recipe?.[RecipeKey.PREP_TIME] || 0,
    [RecipeKey.COOK_TIME]: recipe?.[RecipeKey.COOK_TIME] || 0,
    [RecipeKey.DIFFICULTY_LEVEL]: recipe?.[RecipeKey.DIFFICULTY_LEVEL] || "",
    [RecipeKey.NUTRITIONAL_QUALITY]:
      recipe?.[RecipeKey.NUTRITIONAL_QUALITY] || [],
  };
};

export const mealTypeOptions = [
  { label: "Bữa sáng", value: RecipesMealType.BREAKFAST },
  { label: "Bữa trưa", value: RecipesMealType.LUNCH },
  { label: "Bữa tối", value: RecipesMealType.DINNER },
  { label: "Bữa ăn nhẹ", value: RecipesMealType.SNACK },
];

export const difficultyLevelOptions = [
  { label: "Dễ", value: RecipesDifficultyLevel.EASY },
  { label: "Trung bình", value: RecipesDifficultyLevel.MEDIUM },
  { label: "Khó", value: RecipesDifficultyLevel.HARD },
];

export const nutritionalQuantityOptions = [
  { label: "Nhiều đạm", value: RecipesNutritionalQuantity.HIGH_PROTEIN },
  { label: "Ít đạm", value: RecipesNutritionalQuantity.LOW_PROTEIN },
  { label: "Nhiều calorie", value: RecipesNutritionalQuantity.HIGH_CALORIE },
  { label: "Ít calorie", value: RecipesNutritionalQuantity.LOW_CALORIE },
  { label: "Nhiều carb", value: RecipesNutritionalQuantity.HIGH_CARB },
  { label: "Ít carb", value: RecipesNutritionalQuantity.LOW_CARB },
  { label: "Nhiều béo", value: RecipesNutritionalQuantity.HIGH_FAT },
  { label: "Ít béo", value: RecipesNutritionalQuantity.LOW_FAT },
  { label: "Cân bằng", value: RecipesNutritionalQuantity.BALANCED },
  { label: "Keto", value: RecipesNutritionalQuantity.KETO },
  { label: "Thuần chay", value: RecipesNutritionalQuantity.VEGAN },
  { label: "Chay", value: RecipesNutritionalQuantity.VEGETARIAN },
  { label: "Paleo", value: RecipesNutritionalQuantity.PALEO },
  { label: "Không gluten", value: RecipesNutritionalQuantity.GLUTEN_FREE },
];

export const formatIngredientList = (
  ingredientList: IngredientSelectorType[],
) => {
  return ingredientList?.map((ingredient) => ({
    [RecipeKey.INGREDIENT_ID]: ingredient[RecipeKey.INGREDIENT_ID],
    [RecipeKey.QUANTITY]: ingredient[RecipeKey.QUANTITY],
  }));
};
