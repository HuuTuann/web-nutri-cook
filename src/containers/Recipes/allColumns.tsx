import { formatValueOrNull } from "@/lib/utils";
import { Button, PreviewImage, Tag } from "@/modules/web-feature-shared";
import { RecipeKey, RecipeResponse } from "@/queries/Recipes/types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { ColumnsType } from "antd/es/table";
import { CreateEditRecipe } from "./CreateEditRecipe";
import { DeleteRecipe } from "./Actions/DeleteRecipe";
import { capitalize, startCase } from "lodash";

type Props = (id: string) => void;

export const allColumns = (handleClick: Props): ColumnsType<RecipeResponse> => {
  return [
    {
      title: "Name",
      dataIndex: RecipeKey.NAME,
      key: RecipeKey.NAME,
      width: 192,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value) => formatValueOrNull(value),
    },
    {
      title: "Difficulty Level",
      dataIndex: RecipeKey.DIFFICULTY_LEVEL,
      key: RecipeKey.DIFFICULTY_LEVEL,
      width: 192,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value: string) => (
        <Tag variant="default">
          {capitalize(startCase(value.replace(/_/g, " ")))}
        </Tag>
      ),
    },
    {
      title: "Meal Type",
      dataIndex: RecipeKey.MEAL_TYPE,
      key: RecipeKey.MEAL_TYPE,
      width: 256,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value: string[]) => (
        <Flex wrap="wrap" gap={8}>
          {value?.map((val, index) => (
            <Tag key={index} variant="default">
              {capitalize(startCase(val.replace(/_/g, " ")))}
            </Tag>
          ))}
        </Flex>
      ),
    },
    {
      title: "Nutritional Quality",
      dataIndex: RecipeKey.NUTRITIONAL_QUALITY,
      key: RecipeKey.NUTRITIONAL_QUALITY,
      width: 256,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value: string[]) => (
        <Flex wrap="wrap" gap={8}>
          {value?.map((val, index) => (
            <Tag key={index} variant="default">
              {capitalize(startCase(val.replace(/_/g, " ")))}
            </Tag>
          ))}
        </Flex>
      ),
    },
    {
      title: "Prep Time",
      dataIndex: RecipeKey.PREP_TIME,
      key: RecipeKey.PREP_TIME,
      width: 112,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value) => formatValueOrNull(value),
    },
    {
      title: "Cook Time",
      dataIndex: RecipeKey.COOK_TIME,
      key: RecipeKey.COOK_TIME,
      width: 112,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value) => formatValueOrNull(value),
    },
    {
      title: "Calories",
      dataIndex: RecipeKey.CALORIES,
      key: RecipeKey.CALORIES,
      width: 112,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value) => formatValueOrNull(value),
    },
    {
      title: "Protein",
      dataIndex: RecipeKey.PROTEIN,
      key: RecipeKey.PROTEIN,
      width: 112,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value) => formatValueOrNull(value),
    },
    {
      title: "Fat",
      dataIndex: RecipeKey.FAT,
      key: RecipeKey.FAT,
      width: 112,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value) => formatValueOrNull(value),
    },
    {
      title: "Carbs",
      dataIndex: RecipeKey.CARBS,
      key: RecipeKey.CARBS,
      width: 112,
      onCell: (record) => ({
        onClick: () => handleClick(record?.[RecipeKey.ID]),
      }),
      render: (value) => formatValueOrNull(value),
    },
    {
      title: "Actions",
      key: "actions",
      fixed: "right",
      width: 40,
      render: (value) => {
        return (
          <Flex gap={8}>
            <PreviewImage url={value[RecipeKey.IMAGE_URL]} />
            <CreateEditRecipe
              content={
                <Button type="default" size="small" icon={<EditOutlined />} />
              }
              id={value[RecipeKey.ID]}
            />
            <DeleteRecipe
              content={
                <Button
                  type="default"
                  danger
                  size="small"
                  icon={<DeleteOutlined />}
                />
              }
              id={value[RecipeKey.ID]}
            />
          </Flex>
        );
      },
    },
  ];
};
