import { formatValueOrNull } from "@/lib/utils";
import { IngredientKey, IngredientResponse } from "@/queries";
import { Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { isEmpty } from "lodash";

export const allColumns: ColumnsType<IngredientResponse> = [
  {
    title: "Name",
    dataIndex: IngredientKey.NAME,
    key: IngredientKey.NAME,
    width: 192,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Type",
    dataIndex: IngredientKey.TYPE,
    key: IngredientKey.TYPE,
    width: 96,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Calories",
    dataIndex: IngredientKey.CALORIES,
    key: IngredientKey.CALORIES,
    width: 96,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Protein",
    dataIndex: IngredientKey.PROTEIN,
    key: IngredientKey.PROTEIN,
    width: 96,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Fat",
    dataIndex: IngredientKey.FAT,
    key: IngredientKey.FAT,
    width: 96,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Carbs",
    dataIndex: IngredientKey.CARBS,
    key: IngredientKey.CARBS,
    width: 96,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Unit",
    dataIndex: IngredientKey.UNIT,
    key: IngredientKey.UNIT,
    width: 80,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Image",
    dataIndex: IngredientKey.IMAGE_URL,
    key: IngredientKey.IMAGE_URL,
    render: (value) => {
      if (isEmpty(value)) return "--";
      return <Image src={value} width={192} alt="Image" />;
    },
  },
  {
    title: "Description",
    dataIndex: IngredientKey.DESCRIPTION,
    key: IngredientKey.DESCRIPTION,
    width: 256,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Actions",
    key: "actions",
    fixed: "right",
    width: 40,
    render: (_, record) => {
      return <span>{record[IngredientKey.ID]}</span>;
    },
  },
];
