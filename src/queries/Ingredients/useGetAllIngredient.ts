import {
  PageResponseType,
  ParamsType,
  TableParams,
} from "@/modules/web-feature-shared";
import { IngredientResponse, API_QUERY_KEYS } from "@/queries";
import { getAllIngredient } from "./api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { isEmpty } from "lodash";

export const useGetAllIngredient = (options?: ParamsType) => {
  const [params, setParams] = useState<TableParams>({});

  const { data, isLoading } = useQuery<
    PageResponseType<IngredientResponse>,
    Error
  >({
    queryKey: [API_QUERY_KEYS.GET_ALL_INGREDIENTS, params],
    queryFn: async () => getAllIngredient({ ...options, ...params }),
    enabled: !isEmpty(params),
    ...options,
  });

  const {
    data: ingredients = [],
    pageNo = 1,
    pageSize = 10,
    totalRecords,
  } = data ?? {};

  const queryClient = useQueryClient();

  const handleInvalidateIngredient = () =>
    queryClient.invalidateQueries({
      queryKey: [API_QUERY_KEYS.GET_ALL_INGREDIENTS, params],
    });

  return {
    ingredients,
    isLoading,
    pageNo,
    pageSize,
    totalRecords,
    ingredientParams: params,
    setIngredientParams: setParams,
    handleInvalidateIngredient,
  };
};
