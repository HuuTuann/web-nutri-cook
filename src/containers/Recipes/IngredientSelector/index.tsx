import { allColumns } from "./allColumns";
import { Table } from "@/modules/web-feature-shared";
import { IngredientSelectorType } from "@/queries";
import { Flex } from "antd";
import React from "react";

type Props = {
  recipeIngredients: IngredientSelectorType[];
};

export const IngredientSelector: React.FC<Props> = ({ recipeIngredients }) => {
  return (
    <Flex vertical gap={4} align="flex-start" className="ml-20">
      <span className="font-semibold">Recipe Ingredient List: </span>
      <Table<IngredientSelectorType>
        columns={allColumns()}
        dataSource={recipeIngredients}
      />
    </Flex>
  );
};
