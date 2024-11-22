import { ParamsType, ResponseType } from "@/modules/web-feature-shared";
import { UserPayload } from "./types";
import { useQuery } from "@tanstack/react-query";
import { API_QUERY_KEYS } from "../keys";
import { getUserDetail } from "./api";

export function useGetUserById(options?: ParamsType & { id?: string }) {
  const { data, isLoading } = useQuery<
    ResponseType<UserPayload>,
    Error,
    ResponseType<UserPayload>
  >({
    queryKey: [API_QUERY_KEYS.GET_USER_DETAIL, options],
    queryFn: async () => getUserDetail({ ...options }),
    enabled: !!options?.id,
    ...options,
  });

  return {
    user: data?.data as UserPayload,
    isLoading,
  };
}
