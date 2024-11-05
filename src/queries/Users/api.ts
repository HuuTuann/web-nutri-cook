import { httpService } from "@/modules/web-feature-shared";
import { stringifyParams, TableParams } from "@/modules/web-feature-shared";
import { UserPayload } from "@/queries";

export const getAllUsers = (params: TableParams) => {
  const queryString = stringifyParams(params);
  return httpService.get(`/user/all?${queryString}`);
};

export const createUser = (payload: UserPayload) => {
  return httpService.post("/user", payload);
};
