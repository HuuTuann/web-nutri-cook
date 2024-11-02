import { updateIngredient } from "@/queries/Ingredients/api";
import { IngredientPayload } from "@/queries/Ingredients/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export function useUpdateIngredientById(
  options?: UseMutationOptions<unknown, Error, IngredientPayload> & {
    id?: string;
  },
) {
  const { mutate, isPending } = useMutation<unknown, Error, IngredientPayload>({
    mutationFn: async (payload: IngredientPayload) => updateIngredient(payload),
    ...options,
  });

  return {
    onUpdateIngredientById: mutate,
    isLoadingUpdateIngredientById: isPending,
  };
}
