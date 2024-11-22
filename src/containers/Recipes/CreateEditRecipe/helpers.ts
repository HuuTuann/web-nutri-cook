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
  [RecipeKey.NUTRITIONAL_QUALITY]: z.string().nonempty({
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
  [RecipeKey.NUTRITIONAL_QUALITY]: "",
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
      recipe?.[RecipeKey.NUTRITIONAL_QUALITY] || "",
  };
};

export const mealTypeOptions = [
  { label: "Breakfast", value: RecipesMealType.BREAKFAST },
  { label: "Lunch", value: RecipesMealType.LUNCH },
  { label: "Dinner", value: RecipesMealType.DINNER },
];

export const difficultyLevelOptions = [
  { label: "Easy", value: RecipesDifficultyLevel.EASY },
  { label: "Medium", value: RecipesDifficultyLevel.MEDIUM },
  { label: "Hard", value: RecipesDifficultyLevel.HARD },
];

export const nutritionalQuantityOptions = [
  { label: "High Protein", value: RecipesNutritionalQuantity.HIGH_PROTEIN },
  { label: "Low Protein", value: RecipesNutritionalQuantity.LOW_PROTEIN },
  { label: "High Calories", value: RecipesNutritionalQuantity.HIGH_CALORIES },
  { label: "Low Calories", value: RecipesNutritionalQuantity.LOW_CALORIES },
  { label: "High Carbs", value: RecipesNutritionalQuantity.HIGH_CARBS },
  { label: "Low Carbs", value: RecipesNutritionalQuantity.LOW_CARBS },
  { label: "High Fat", value: RecipesNutritionalQuantity.HIGH_FAT },
  { label: "Low Fat", value: RecipesNutritionalQuantity.LOW_FAT },
  { label: "Balanced", value: RecipesNutritionalQuantity.BALANCED },
  { label: "Keto", value: RecipesNutritionalQuantity.KETO },
  { label: "Vegan", value: RecipesNutritionalQuantity.VEGAN },
];

export const formatIngredientList = (
  ingredientList: IngredientSelectorType[],
) => {
  return ingredientList.map((ingredient) => ({
    [RecipeKey.INGREDIENT_ID]: ingredient[RecipeKey.INGREDIENT_ID],
    [RecipeKey.QUANTITY]: ingredient[RecipeKey.QUANTITY],
  }));
};
