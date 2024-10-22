import {
  PageResponseType,
  ParamsType,
  TableParams,
} from "@/modules/web-feature-shared";
import { API_QUERY_KEYS } from "@/queries/keys";
import { getAllUsers } from "@/queries/Users/api";
import { UsersResponse } from "@/queries/Users/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { isEmpty } from "lodash";
import { useState } from "react";

export const useGetAllUser = (options?: ParamsType) => {
  const [params, setParams] = useState<TableParams>({});

  const { data, isLoading } = useQuery<PageResponseType<UsersResponse>, Error>({
    queryKey: [API_QUERY_KEYS.GET_ALL_USERS, params],
    queryFn: async () => getAllUsers({ ...options, ...params }),
    enabled: !isEmpty(params),
    ...options,
  });

  const { data: users = [], pageNo, pageSize, totalRecords } = data ?? {};

  const queryClient = useQueryClient();

  const handleInvalidateUser = () =>
    queryClient.invalidateQueries({ queryKey: [API_QUERY_KEYS.GET_ALL_USERS] });

  return {
    users,
    isLoading,
    pageNo,
    pageSize,
    totalRecords,
    userParams: params,
    setUserParams: setParams,
    handleInvalidateUser,
  };
};
