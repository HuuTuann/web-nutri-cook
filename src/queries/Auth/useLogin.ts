import { login } from "./api";
import { LoginPayload } from "@/queries/Auth/types";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export const useLogin = (
  options?: UseMutationOptions<unknown, Error, LoginPayload>,
) => {
  const { mutate: onLogin, isPending } = useMutation<
    unknown,
    Error,
    LoginPayload
  >({
    mutationFn: async (payload: LoginPayload) => login(payload),
    ...options,
  });

  return {
    onLogin,
    isPending,
  };
};
