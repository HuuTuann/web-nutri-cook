import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { UserPayload } from "./types";
import { updateUser } from "./api";

export function useUpdateUserById(
  options?: UseMutationOptions<unknown, Error, UserPayload> & {
    id?: string;
  },
) {
  const { mutate, isPending } = useMutation<unknown, Error, UserPayload>({
    mutationFn: async (payload: UserPayload) =>
      updateUser(options?.id as string, payload),
    ...options,
  });

  return {
    onUpdateUser: mutate,
    isLoadingUpdateUser: isPending,
  };
}
