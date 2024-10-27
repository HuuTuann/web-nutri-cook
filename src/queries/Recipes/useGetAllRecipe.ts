import {
  PageResponseType,
  ParamsType,
  TableParams,
} from "@/modules/web-feature-shared";
import { RecipeResponse, API_QUERY_KEYS } from "@/queries";
import { getAllRecipes } from "./api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { useState } from "react";

export const useGetAllRecipe = (options?: ParamsType) => {
  const [params, setParams] = useState<TableParams>({});

  const { data, isLoading } = useQuery<PageResponseType<RecipeResponse>, Error>(
    {
      queryKey: [API_QUERY_KEYS.GET_ALL_USERS, params],
      queryFn: async () => getAllRecipes({ ...options, ...params }),
      enabled: !isEmpty(params),
      ...options,
    },
  );

  const { data: recipes = [], pageNo, pageSize, totalRecords } = data ?? {};

  const queryClient = useQueryClient();

  const handleInvalidateRecipe = () =>
    queryClient.invalidateQueries({ queryKey: [API_QUERY_KEYS.GET_ALL_USERS] });

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
