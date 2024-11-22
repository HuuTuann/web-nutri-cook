import { ParamsType, ResponseType } from "@/modules/web-feature-shared";
import { RecipeResponse } from "./types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API_QUERY_KEYS } from "../keys";
import { getRecipeDetail } from "./api";

export function useGetRecipeById(
  options?: ParamsType & {
    id?: string;
  },
) {
  const { data, isLoading } = useQuery<
    ResponseType<RecipeResponse>,
    Error,
    ResponseType<RecipeResponse>
  >({
    queryKey: [API_QUERY_KEYS.GET_RECIPES_DETAIL, options],
    queryFn: async () => getRecipeDetail({ ...options }),
    enabled: !!options?.id,
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateRecipeById = () =>
    queryClient.invalidateQueries({
      queryKey: [API_QUERY_KEYS.GET_ALL_RECIPES, options],
    });

  return {
    recipe: data?.data as RecipeResponse,
    isLoading,
    handleInvalidateRecipeById,
  };
}
