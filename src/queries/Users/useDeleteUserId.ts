import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { deleteUser } from "./api";

export const useDeleteUserById = (
  options?: UseMutationOptions<unknown, Error, string>,
) => {
  const { mutate, isPending } = useMutation<unknown, Error, string>({
    mutationFn: async (id: string) => deleteUser(id),
    ...options,
  });

  return {
    onDeleteUser: mutate,
    isLoadingDeleteUser: isPending,
  };
};
