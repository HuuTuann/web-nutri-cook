import { DeleteIngredient } from "./Actions/DeleteIngredient";
import { CreateEditIngredient } from "./CreateEditIngredient";
import { formatValueOrNull } from "@/lib/utils";
import { Button, PreviewImage, Tag } from "@/modules/web-feature-shared";
import { IngredientKey, IngredientResponse, IngredientType } from "@/queries";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Flex, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { capitalize } from "lodash";
import { mapType } from "./helpers";

type Props = (id: string) => void;
export const allColumns = (
  handleClick: Props,
): ColumnsType<IngredientResponse> => [
  {
    title: "Name",
    dataIndex: IngredientKey.NAME,
    key: IngredientKey.NAME,
    width: 192,
    onCell: (record) => ({
      onClick: () => handleClick(record?.[IngredientKey.ID]),
    }),
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Type",
    dataIndex: IngredientKey.TYPE,
    key: IngredientKey.TYPE,
    width: 112,
    onCell: (record) => ({
      onClick: () => handleClick(record?.[IngredientKey.ID]),
    }),
    render: (value: IngredientType) => (
      <Tag variant="default">{mapType[value]}</Tag>
    ),
  },
  {
    title: "Calories",
    dataIndex: IngredientKey.CALORIES,
    key: IngredientKey.CALORIES,
    width: 112,
    onCell: (record) => ({
      onClick: () => handleClick(record?.[IngredientKey.ID]),
    }),
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Protein",
    dataIndex: IngredientKey.PROTEIN,
    key: IngredientKey.PROTEIN,
    width: 112,
    onCell: (record) => ({
      onClick: () => handleClick(record?.[IngredientKey.ID]),
    }),
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Fat",
    dataIndex: IngredientKey.FAT,
    key: IngredientKey.FAT,
    width: 112,
    onCell: (record) => ({
      onClick: () => handleClick(record?.[IngredientKey.ID]),
    }),
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Carbs",
    dataIndex: IngredientKey.CARBS,
    key: IngredientKey.CARBS,
    width: 112,
    onCell: (record) => ({
      onClick: () => handleClick(record?.[IngredientKey.ID]),
    }),
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Unit",
    dataIndex: IngredientKey.UNIT,
    key: IngredientKey.UNIT,
    width: 96,
    onCell: (record) => ({
      onClick: () => handleClick(record?.[IngredientKey.ID]),
    }),
    render: (value) => formatValueOrNull(capitalize(value)),
  },
  {
    title: "Actions",
    key: "actions",
    fixed: "right",
    width: 40,
    render: (value: IngredientResponse) => {
      return (
        <Flex gap={8}>
          <PreviewImage url={value?.[IngredientKey.IMAGE_URL]} />
          <CreateEditIngredient
            content={
              <Button type="default" size="small" icon={<EditOutlined />} />
            }
            id={value?.[IngredientKey.ID]}
          />
          <DeleteIngredient
            content={
              <Tooltip
                title={
                  value?.[IngredientKey.ACTIVE]
                    ? "The item cannot be deleted because it is currently in use."
                    : ""
                }
              >
                <Flex>
                  <Button
                    type="default"
                    danger
                    size="small"
                    icon={<DeleteOutlined />}
                    disabled={value?.[IngredientKey.ACTIVE]}
                  />
                </Flex>
              </Tooltip>
            }
            id={value?.[IngredientKey.ID]}
          />
        </Flex>
      );
    },
  },
];
