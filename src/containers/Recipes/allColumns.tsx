import { formatValueOrNull } from "@/lib/utils";
import { Button, PreviewImage } from "@/modules/web-feature-shared";
import { RecipeKey, RecipeResponse } from "@/queries/Recipes/types";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { CreateEditRecipe } from "./CreateEditRecipe";
import { DeleteRecipe } from "./Actions/DeleteRecipe";
import { capitalize, startCase } from "lodash";

export const allColumns: ColumnsType<RecipeResponse> = [
  {
    title: "Name",
    dataIndex: RecipeKey.NAME,
    key: RecipeKey.NAME,
    width: 192,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Cooking Instructions",
    dataIndex: RecipeKey.COOKING_INSTRUCTIONS,
    key: RecipeKey.COOKING_INSTRUCTIONS,
    width: 256,
    render: (value) => (
      <Typography.Paragraph
        ellipsis={{
          rows: 1,
          expandable: true,
          symbol: "More",
        }}
      >
        {formatValueOrNull(value)}
      </Typography.Paragraph>
    ),
  },
  {
    title: "Nutritional Quality",
    dataIndex: RecipeKey.NUTRITIONAL_QUALITY,
    key: RecipeKey.NUTRITIONAL_QUALITY,
    width: 112,
    render: (value: string[]) => (
      <Flex>
        {value?.map((val, index) => (
          <Typography.Text key={index}>
            {capitalize(startCase(val.replace(/_/g, " ")))}
          </Typography.Text>
        ))}
      </Flex>
    ),
  },
  {
    title: "Calories",
    dataIndex: RecipeKey.CALORIES,
    key: RecipeKey.CALORIES,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Protein",
    dataIndex: RecipeKey.PROTEIN,
    key: RecipeKey.PROTEIN,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Fat",
    dataIndex: RecipeKey.FAT,
    key: RecipeKey.FAT,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Carbs",
    dataIndex: RecipeKey.CARBS,
    key: RecipeKey.CARBS,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Description",
    dataIndex: RecipeKey.DESCRIPTION,
    key: RecipeKey.DESCRIPTION,
    width: 256,
    render: (value) => (
      <Typography.Paragraph
        ellipsis={{
          rows: 1,
          expandable: true,
          symbol: "More",
        }}
      >
        {formatValueOrNull(value)}
      </Typography.Paragraph>
    ),
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
