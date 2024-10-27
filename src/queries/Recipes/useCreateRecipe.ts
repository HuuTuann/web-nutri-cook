import { RecipePayload } from "@/queries";
import { createRecipe } from "./api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useCreateRecipe = (
  options?: UseMutationOptions<unknown, Error, RecipePayload>,
) => {
  const { mutate, isPending } = useMutation<unknown, Error, RecipePayload>({
    mutationFn: async (payload: RecipePayload) => createRecipe(payload),
    ...options,
  });

  return {
    onCreateRecipe: mutate,
    isLoadingCreateRecipe: isPending,
  };
};
