import { IngredientKey, IngredientResponse } from "@/queries";

export const ingredientsMock: IngredientResponse[] = [
  {
    [IngredientKey.ID]: "1",
    [IngredientKey.NAME]: "Chicken Breast",
    [IngredientKey.TYPE]: "Protein",
    [IngredientKey.DESCRIPTION]: "Lean chicken breast",
    [IngredientKey.CALORIES]: 165,
    [IngredientKey.PROTEIN]: 31,
    [IngredientKey.FAT]: 3.6,
    [IngredientKey.CARBS]: 0,
  },
  {
    [IngredientKey.ID]: "2",
    [IngredientKey.NAME]: "Broccoli",
    [IngredientKey.TYPE]: "Vegetable",
    [IngredientKey.DESCRIPTION]: "Fresh broccoli",
    [IngredientKey.CALORIES]: 55,
    [IngredientKey.PROTEIN]: 3.7,
    [IngredientKey.FAT]: 0.6,
    [IngredientKey.CARBS]: 11.2,
  },
  {
    [IngredientKey.ID]: "3",
    [IngredientKey.NAME]: "Olive Oil",
    [IngredientKey.TYPE]: "Fat",
    [IngredientKey.DESCRIPTION]: "Extra virgin olive oil",
    [IngredientKey.CALORIES]: 119,
    [IngredientKey.PROTEIN]: 0,
    [IngredientKey.FAT]: 13.5,
    [IngredientKey.CARBS]: 0,
  },
  {
    [IngredientKey.ID]: "4",
    [IngredientKey.NAME]: "Brown Rice",
    [IngredientKey.TYPE]: "Carbohydrate",
    [IngredientKey.DESCRIPTION]: "Whole grain brown rice",
    [IngredientKey.CALORIES]: 216,
    [IngredientKey.PROTEIN]: 5,
    [IngredientKey.FAT]: 1.8,
    [IngredientKey.CARBS]: 44.8,
  },
  {
    [IngredientKey.ID]: "5",
    [IngredientKey.NAME]: "Almonds",
    [IngredientKey.TYPE]: "Nut",
    [IngredientKey.DESCRIPTION]: "Raw almonds",
    [IngredientKey.CALORIES]: 164,
    [IngredientKey.PROTEIN]: 6,
    [IngredientKey.FAT]: 14,
    [IngredientKey.CARBS]: 6,
  },
];
