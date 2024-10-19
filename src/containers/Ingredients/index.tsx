"use client";

import { Flex } from "antd";
import { Table } from "@/modules/web-feature-shared";
import { IngredientResponse } from "@/queries";
import { ingredientsMock } from "@/mocks";
import { allColumns } from "./allColumns";

export const Ingredients = () => {
  return (
    <Flex vertical gap={16}>
      <Table<IngredientResponse>
        columns={allColumns}
        dataSource={ingredientsMock}
      />
    </Flex>
  );
};
