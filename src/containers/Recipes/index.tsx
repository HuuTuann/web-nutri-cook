"use client";

import { Flex } from "antd";
import {
  initialPageParam,
  Table,
  TablePaginationConfig,
} from "@/modules/web-feature-shared";
import { allColumns } from "./allColumns";
import { RecipeKey, RecipeResponse } from "@/queries/Recipes/types";
import { Toolbar } from "./Toolbar";
import { useGetAllRecipe } from "@/queries";
import { useEffect } from "react";
import { IngredientSelector } from "@/containers/Recipes/IngredientSelector";
import { useRouter } from "next/navigation";

export const Recipes = () => {
  const router = useRouter();

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

  useEffect(() => {
    setRecipeParams(initialPageParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: string) => {
    router.push(`/recipes/${id}`);
  };

  return (
    <Flex vertical gap={16}>
      <Toolbar recipeParams={recipeParams} setRecipeParams={setRecipeParams} />
      <Table<RecipeResponse>
        columns={allColumns(handleClick)}
        dataSource={recipes.map((recipe) => ({
          ...recipe,
          key: recipe[RecipeKey.ID],
        }))}
        pagination={{
          pageSize: pageSize,
          total: totalRecords,
        }}
        onChange={handleTableChange}
        loading={isLoading}
        expandable={{
          expandedRowRender: (record) => (
            <Flex className="ml-20">
              <IngredientSelector
                recipeIngredients={record[RecipeKey.INGREDIENT_LIST]}
              />
            </Flex>
          ),
          rowExpandable: (record) =>
            record[RecipeKey.INGREDIENT_LIST].length > 0,
        }}
      />
    </Flex>
  );
};
