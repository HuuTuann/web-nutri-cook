import { IngredientPayload, IngredientKey, IngredientType } from "@/queries";
import { z } from "zod";

export const ingredientSchema = z.object({
  [IngredientKey.NAME]: z.string().nonempty({
    message: "Name is required",
  }),
  [IngredientKey.TYPE]: z.string().nonempty({
    message: "Type is required",
  }),
  [IngredientKey.CALORIES]: z.number({
    message: "Calories must be a number",
  }),
  [IngredientKey.PROTEIN]: z.number({
    message: "Protein must be a number",
  }),
  [IngredientKey.FAT]: z.number({
    message: "Fat must be a number",
  }),
  [IngredientKey.CARBS]: z.number().positive({
    message: "Carbs must be more than 0",
  }),
  [IngredientKey.IMAGE_URL]: z.string().nonempty({
    message: "Image is required",
  }),
  [IngredientKey.UNIT]: z.string().nonempty({
    message: "Unit is required",
  }),
  [IngredientKey.DESCRIPTION]: z.string(),
});

export const getDefaultValue = (ingredient?: IngredientPayload) => {
  return {
    [IngredientKey.NAME]: ingredient?.[IngredientKey.NAME] || "",
    [IngredientKey.TYPE]: ingredient?.[IngredientKey.TYPE] || "",
    [IngredientKey.DESCRIPTION]: ingredient?.[IngredientKey.DESCRIPTION] || "",
    [IngredientKey.CALORIES]: ingredient?.[IngredientKey.CALORIES] || 0,
    [IngredientKey.PROTEIN]: ingredient?.[IngredientKey.PROTEIN] || 0,
    [IngredientKey.FAT]: ingredient?.[IngredientKey.FAT] || 0,
    [IngredientKey.CARBS]: ingredient?.[IngredientKey.CARBS] || 0,
    [IngredientKey.IMAGE_URL]: ingredient?.[IngredientKey.IMAGE_URL] || "",
    [IngredientKey.UNIT]: ingredient?.[IngredientKey.UNIT] || "",
  };
};

export const ingredientTypeOptions = [
  { label: "Vegetable", value: IngredientType.VEGETABLE },
  { label: "Fruit", value: IngredientType.FRUIT },
  { label: "Protein", value: IngredientType.PROTEIN },
  { label: "Dairy", value: IngredientType.DAIRY },
  { label: "Grain", value: IngredientType.GRAIN },
  { label: "Spice", value: IngredientType.SPICE },
  { label: "Other", value: IngredientType.OTHER },
];
