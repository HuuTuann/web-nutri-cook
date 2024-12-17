import { DeleteIngredient } from "./Actions/DeleteIngredient";
import { CreateEditIngredient } from "./CreateEditIngredient";
import { formatValueOrNull } from "@/lib/utils";
import { Button, PreviewImage, Tag } from "@/modules/web-feature-shared";
import { IngredientKey, IngredientPayload } from "@/queries";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { capitalize, startCase } from "lodash";

export const allColumns = (): ColumnsType<IngredientPayload> => [
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
    width: 112,
    render: (value: string) => (
      <Tag variant="default">
        {capitalize(startCase(value.replace(/_/g, " ")))}
      </Tag>
    ),
  },
  {
    title: "Calories",
    dataIndex: IngredientKey.CALORIES,
    key: IngredientKey.CALORIES,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Protein",
    dataIndex: IngredientKey.PROTEIN,
    key: IngredientKey.PROTEIN,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Fat",
    dataIndex: IngredientKey.FAT,
    key: IngredientKey.FAT,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Carbs",
    dataIndex: IngredientKey.CARBS,
    key: IngredientKey.CARBS,
    width: 112,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Unit",
    dataIndex: IngredientKey.UNIT,
    key: IngredientKey.UNIT,
    width: 96,
    render: (value) => formatValueOrNull(capitalize(value)),
  },
  {
    title: "Description",
    dataIndex: IngredientKey.DESCRIPTION,
    key: IngredientKey.DESCRIPTION,
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
          <PreviewImage url={value[IngredientKey.IMAGE_URL]} />
          <CreateEditIngredient
            content={
              <Button type="default" size="small" icon={<EditOutlined />} />
            }
            id={value[IngredientKey.ID]}
          />
          <DeleteIngredient
            content={
              <Button
                type="default"
                danger
                size="small"
                icon={<DeleteOutlined />}
              />
            }
            id={value[IngredientKey.ID]}
          />
        </Flex>
      );
    },
  },
];
