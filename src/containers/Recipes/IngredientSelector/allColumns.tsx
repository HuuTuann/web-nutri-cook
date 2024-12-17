import { formatValueOrNull } from "@/lib/utils";
import { Button } from "@/modules/web-feature-shared";
import { IngredientSelectorType, RecipeKey } from "@/queries";
import { CloseOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { ColumnsType } from "antd/es/table";
import { capitalize } from "lodash";

export const allColumns = (
  handleDeleteIngredient?: (id: string) => void,
): ColumnsType<IngredientSelectorType> => {
  const columns: ColumnsType<IngredientSelectorType> = [
    {
      title: "Name",
      dataIndex: RecipeKey.INGREDIENT_NAME,
      key: RecipeKey.INGREDIENT_NAME,
      width: 192,
    },
    {
      title: "Quantity",
      dataIndex: RecipeKey.QUANTITY,
      key: RecipeKey.QUANTITY,
      width: 112,
    },
    {
      title: "Unit",
      dataIndex: RecipeKey.UNIT,
      key: RecipeKey.UNIT,
      width: 112,
      render: (value) => formatValueOrNull(capitalize(value)),
    },
  ];

  if (handleDeleteIngredient) {
    columns.push({
      title: "Action",
      key: "action",
      width: 40,
      render: (value) => {
        return (
          <Flex gap={8}>
            <Button
              type="default"
              danger
              size="small"
              icon={<CloseOutlined />}
              onClick={() => {
                if (handleDeleteIngredient) {
                  handleDeleteIngredient(value[RecipeKey.INGREDIENT_ID]);
                }
              }}
            />
          </Flex>
        );
      },
    });
  }

  return columns;
};
