import { IngredientPayload, IngredientKey } from "@/queries";
import { z } from "zod";

export const ingredientSchema = z.object({
  // [IngredientKey.IMAGE_URL]: z.string().nonempty("Image is required"),
});

export const defaultValues: IngredientPayload = {
  [IngredientKey.NAME]: "",
  [IngredientKey.TYPE]: "",
  [IngredientKey.DESCRIPTION]: "",
  [IngredientKey.CALORIES]: 0,
  [IngredientKey.PROTEIN]: 0,
  [IngredientKey.FAT]: 0,
  [IngredientKey.CARBS]: 0,
  [IngredientKey.IMAGE_URL]: "",
  [IngredientKey.UNIT]: "",
};
