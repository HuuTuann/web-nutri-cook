"use client";

import { Flex } from "antd";
import { Table, TablePaginationConfig } from "@/modules/web-feature-shared";
import { allColumns } from "./allColumns";
import { RecipeResponse } from "@/queries/Recipes/types";
import { Toolbar } from "./Toolbar";
import { useGetAllRecipe } from "@/queries";

export const Recipes = () => {
  const {
    recipes,
    isLoading,
    pageSize = 0,
    totalRecords = 0,
    recipeParams,
    setRecipeParams,
  } = useGetAllRecipe();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    const { current = 1, pageSize = 10 } = pagination;
    setRecipeParams({
      ...recipeParams,
      pageNo: current,
      pageSize,
    });
  };

  return (
    <Flex vertical gap={16}>
      <Toolbar />
      <Table<RecipeResponse>
        columns={allColumns}
        dataSource={recipes}
        pagination={{
          pageSize: pageSize,
          total: totalRecords,
        }}
        onChange={handleTableChange}
        loading={isLoading}
      />
    </Flex>
  );
};
