import { IngredientType } from "@/queries";

export const mapType = {
  [IngredientType.VEGETABLE]: "Rau",
  [IngredientType.FRUIT]: "Trái cây",
  [IngredientType.PROTEIN]: "Chất đạm",
  [IngredientType.DAIRY]: "Sữa",
  [IngredientType.GRAIN]: "Ngũ cốc",
  [IngredientType.SPICE]: "Gia vị",
  [IngredientType.OTHER]: "Khác",
};
