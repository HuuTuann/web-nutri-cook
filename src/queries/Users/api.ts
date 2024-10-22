import { httpService } from "@/configs/httpService";
import { stringifyParams, TableParams } from "@/modules/web-feature-shared";

export const getAllUsers = (params: TableParams) => {
  const queryString = stringifyParams(params);
  return httpService.get(`/users?${queryString}`);
};
