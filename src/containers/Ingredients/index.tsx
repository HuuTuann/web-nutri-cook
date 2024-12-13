"use client";

import { Flex } from "antd";
import {
  initialPageParam,
  Table,
  TablePaginationConfig,
} from "@/modules/web-feature-shared";
import { IngredientPayload, useGetAllIngredient } from "@/queries";
import { allColumns } from "./allColumns";
import { Toolbar } from "./Toolbar";
import { useEffect } from "react";

export const Ingredients = () => {
  const {
    ingredients,
    isLoading,
    pageSize = 0,
    totalRecords = 0,
    ingredientParams,
    setIngredientParams,
  } = useGetAllIngredient();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    const { current = 1, pageSize = 10 } = pagination;
    setIngredientParams({
      ...ingredientParams,
      pageNo: current,
      pageSize,
    });
  };
  useEffect(() => {
    setIngredientParams(initialPageParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex vertical gap={16}>
      <Toolbar
        ingredientParams={ingredientParams}
        setIngredientParams={setIngredientParams}
      />
      <Table<IngredientPayload>
        columns={allColumns()}
        dataSource={ingredients}
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
