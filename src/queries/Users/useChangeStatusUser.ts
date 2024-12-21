import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { UserStatusPayload } from "./types";
import { updateUserStatusUser } from "./api";

export function useChangeStatusUser(
  options?: UseMutationOptions<unknown, Error, UserStatusPayload>,
) {
  const { mutate, isPending } = useMutation<unknown, Error, UserStatusPayload>({
    mutationFn: async (payload: UserStatusPayload) =>
      updateUserStatusUser(payload),
    ...options,
  });

  return {
    onUpdateStatusUser: mutate,
    isLoadingUpdateStatusUser: isPending,
  };
}
