import {
  PageResponseType,
  ParamsType,
  TableParams,
} from "@/modules/web-feature-shared";
import { API_QUERY_KEYS, RecipeResponse } from "@/queries";
import { getAllRecipes } from "./api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { useState } from "react";

export const useGetAllRecipe = (options?: ParamsType) => {
  const [params, setParams] = useState<TableParams>({});

  const { data, isLoading } = useQuery<PageResponseType<RecipeResponse>, Error>(
    {
      queryKey: [API_QUERY_KEYS.GET_ALL_RECIPES, params],
      queryFn: async () => getAllRecipes({ ...options, ...params }),
      enabled: !isEmpty(params),
      ...options,
    },
  );

  const { data: recipes = [], pageNo, pageSize, totalRecords } = data ?? {};

  const queryClient = useQueryClient();

  const handleInvalidateRecipe = () =>
    queryClient.invalidateQueries({
      queryKey: [API_QUERY_KEYS.GET_ALL_RECIPES, params],
    });

  return {
    recipes,
    isLoading,
    pageNo,
    pageSize,
    totalRecords,
    recipeParams: params,
    setRecipeParams: setParams,
    handleInvalidateRecipe,
  };
};
