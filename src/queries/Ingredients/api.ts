import { httpService } from "@/configs/httpService";
import { stringifyParams, TableParams } from "@/modules/web-feature-shared";
import { IngredientPayload } from "@/queries";

export const getAllIngredient = (params: TableParams) => {
  const queryString = stringifyParams(params);
  return httpService.get(`/ingredient?${queryString}`);
};

export const createIngredient = (payload: IngredientPayload) => {
  return httpService.post("/ingredient", payload);
};
