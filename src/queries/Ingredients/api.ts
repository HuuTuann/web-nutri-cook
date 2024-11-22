import { httpService } from "@/modules/web-feature-shared";
import {
  ParamsType,
  stringifyParams,
  TableParams,
} from "@/modules/web-feature-shared";
import { IngredientPayload } from "@/queries";

export const createIngredient = (payload: IngredientPayload) => {
  return httpService.post("/ingredient", payload);
};

export const getAllIngredient = (params: TableParams) => {
  const queryString = stringifyParams(params);
  return httpService.get(`/ingredient?${queryString}`);
};

export const getIngredientDetail = (options: ParamsType) => {
  return httpService.get(`/ingredient/${options.id}`);
};

export const updateIngredient = (payload: IngredientPayload) => {
  return httpService.put(`/ingredient/${payload.ingredient_ID}`, payload);
};

export const deleteIngredient = (id: string) => {
  return httpService.delete(`/ingredient/${id}`);
};
