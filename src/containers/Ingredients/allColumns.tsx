import { formatValueOrNull } from "@/lib/utils";
import { IngredientKey, IngredientResponse } from "@/queries";
import { ColumnsType } from "antd/es/table";

export const allColumns: ColumnsType<IngredientResponse> = [
  {
    title: "Name",
    dataIndex: IngredientKey.NAME,
    key: IngredientKey.NAME,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Type",
    dataIndex: IngredientKey.TYPE,
    key: IngredientKey.TYPE,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Description",
    dataIndex: IngredientKey.DESCRIPTION,
    key: IngredientKey.DESCRIPTION,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Calories",
    dataIndex: IngredientKey.CALORIES,
    key: IngredientKey.CALORIES,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Protein",
    dataIndex: IngredientKey.PROTEIN,
    key: IngredientKey.PROTEIN,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Fat",
    dataIndex: IngredientKey.FAT,
    key: IngredientKey.FAT,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Carbs",
    dataIndex: IngredientKey.CARBS,
    key: IngredientKey.CARBS,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => {
      return <span>{record[IngredientKey.ID]}</span>;
    },
  },
];
