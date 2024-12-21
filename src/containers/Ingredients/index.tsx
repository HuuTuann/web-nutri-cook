"use client";

import { Flex } from "antd";
import {
  initialPageParam,
  Table,
  TablePaginationConfig,
} from "@/modules/web-feature-shared";
import { IngredientResponse, useGetAllIngredient } from "@/queries";
import { allColumns } from "./allColumns";
import { Toolbar } from "./Toolbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const Ingredients = () => {
  const router = useRouter();

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

  const handleClick = (id: string) => {
    router.push(`/ingredients/${id}`);
  };

  return (
    <Flex vertical gap={16}>
      <Toolbar
        ingredientParams={ingredientParams}
        setIngredientParams={setIngredientParams}
      />
      <Table<IngredientResponse>
        columns={allColumns(handleClick)}
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
