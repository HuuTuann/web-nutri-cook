import { formatValueOrNull } from "@/lib/utils";
import { RecipeKey, RecipeResponse } from "@/queries/Recipes/types";
import { ColumnsType } from "antd/es/table";

export const allColumns: ColumnsType<RecipeResponse> = [
  {
    title: "Name",
    dataIndex: RecipeKey.NAME,
    key: RecipeKey.NAME,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Description",
    dataIndex: RecipeKey.DESCRIPTION,
    key: RecipeKey.DESCRIPTION,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Cooking Instructions",
    dataIndex: RecipeKey.COOKING_INSTRUCTIONS,
    key: RecipeKey.COOKING_INSTRUCTIONS,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Calories",
    dataIndex: RecipeKey.CALORIES,
    key: RecipeKey.CALORIES,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Protein",
    dataIndex: RecipeKey.PROTEIN,
    key: RecipeKey.PROTEIN,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Fat",
    dataIndex: RecipeKey.FAT,
    key: RecipeKey.FAT,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Carbs",
    dataIndex: RecipeKey.CARBS,
    key: RecipeKey.CARBS,
    render: (value) => formatValueOrNull(value),
  },
];
