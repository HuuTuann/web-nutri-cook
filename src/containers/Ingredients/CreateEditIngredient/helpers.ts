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
  [IngredientKey.CARBS]: z.number({
    message: "Carbs must be a number",
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
  { label: "Rau", value: IngredientType.VEGETABLE },
  { label: "Trái cây", value: IngredientType.FRUIT },
  { label: "Chất đạm", value: IngredientType.PROTEIN },
  { label: "Sữa", value: IngredientType.DAIRY },
  { label: "Ngũ cốc", value: IngredientType.GRAIN },
  { label: "Gia vị", value: IngredientType.SPICE },
  { label: "Khác", value: IngredientType.OTHER },
];
