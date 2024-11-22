import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { RecipePayload } from "./types";
import { updateRecipe } from "./api";

export function useUpdateRecipeById(
  options?: UseMutationOptions<unknown, Error, RecipePayload> & {
    id?: string;
  },
) {
  const { mutate, isPending } = useMutation<unknown, Error, RecipePayload>({
    mutationFn: async (payload: RecipePayload) =>
      updateRecipe(options?.id as string, payload),
    ...options,
  });

  return {
    onUpdateRecipeById: mutate,
    isLoadingUpdateRecipeById: isPending,
  };
}
