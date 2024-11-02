import { deleteIngredient } from "./api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useDeleteIngredientById = (
  options?: UseMutationOptions<unknown, Error, string>,
) => {
  const { mutate, isPending } = useMutation<unknown, Error, string>({
    mutationFn: async (id: string) => deleteIngredient(id),
    ...options,
  });

  return {
    onDeleteIngredient: mutate,
    isLoadingDeleteIngredient: isPending,
  };
};
