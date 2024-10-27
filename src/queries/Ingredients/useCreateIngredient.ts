import { IngredientPayload } from "@/queries";
import { createIngredient } from "./api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useCreateIngredient = (
  options?: UseMutationOptions<unknown, Error, IngredientPayload>,
) => {
  const { mutate, isPending } = useMutation<unknown, Error, IngredientPayload>({
    mutationFn: async (payload: IngredientPayload) => createIngredient(payload),
    ...options,
  });

  return {
    onCreateIngredient: mutate,
    isLoadingCreateIngredient: isPending,
  };
};
