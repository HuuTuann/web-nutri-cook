import { httpService, ParamsType } from "@/modules/web-feature-shared";
import { stringifyParams, TableParams } from "@/modules/web-feature-shared";
import { UserPayload, UserStatusPayload } from "@/queries";

export const getAllUsers = (params: TableParams) => {
  const queryString = stringifyParams(params);
  return httpService.get(`/user/all?${queryString}`);
};

export const getUserDetail = (options: ParamsType) => {
  return httpService.get(`/user/${options.id}`);
};

export const createUser = (payload: UserPayload) => {
  return httpService.post("/user", payload);
};

export const deleteUser = (id: string) => {
  return httpService.delete(`/user/${id}`);
};

export const updateUser = (id: string, payload: UserPayload) => {
  return httpService.put(`/user/${id}`, payload);
};

export const updateUserStatusUser = (payload: UserStatusPayload) => {
  const { user_ID } = payload;
  return httpService.put(`/user/${user_ID}`, payload);
};
