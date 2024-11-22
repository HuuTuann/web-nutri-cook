import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { deleteRecipe } from "./api";

export const useDeleteRecipeById = (
  options?: UseMutationOptions<unknown, Error, string>,
) => {
  const { mutate, isPending } = useMutation<unknown, Error, string>({
    mutationFn: async (id: string) => deleteRecipe(id),
    ...options,
  });

  return {
    onDeleteRecipe: mutate,
    isLoadingDeleteRecipe: isPending,
  };
};
