import { UserPayload } from "@/queries";
import { createUser } from "./api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useCreateUser = (
  options?: UseMutationOptions<unknown, Error, UserPayload>,
) => {
  const { mutate, isPending } = useMutation<unknown, Error, UserPayload>({
    mutationFn: async (payload: UserPayload) => createUser(payload),
    ...options,
  });

  return {
    onCreateUser: mutate,
    isLoadingCreateUser: isPending,
  };
};
