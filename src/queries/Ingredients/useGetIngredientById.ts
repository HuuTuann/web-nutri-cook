import { ParamsType, ResponseType } from "@/modules/web-feature-shared";
import { API_QUERY_KEYS, IngredientResponse } from "@/queries";
import { getIngredientDetail } from "@/queries/Ingredients/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetIngredientById(
  options?: ParamsType & {
    id?: string;
  },
) {
  const { data, isLoading } = useQuery<
    ResponseType<IngredientResponse>,
    Error,
    ResponseType<IngredientResponse>
  >({
    queryKey: [API_QUERY_KEYS.GET_INGREDIENTS_DETAIL, options?.id],
    queryFn: async () => getIngredientDetail({ ...options }),
    enabled: !!options?.id,
    ...options,
  });

  const queryClient = useQueryClient();

  const handleInvalidateIngredientById = () =>
    queryClient.invalidateQueries({
      queryKey: [API_QUERY_KEYS.GET_INGREDIENTS_DETAIL, options?.id],
    });

  return {
    ingredient: data?.data as IngredientResponse,
    isLoading,
    handleInvalidateIngredientById,
  };
}
