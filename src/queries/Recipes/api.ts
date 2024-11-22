import { httpService, ParamsType } from "@/modules/web-feature-shared";
import { stringifyParams, TableParams } from "@/modules/web-feature-shared";
import { RecipePayload } from "@/queries";

export const getAllRecipes = (params: TableParams) => {
  const queryString = stringifyParams(params);
  return httpService.get(`/recipe?${queryString}`);
};

export const createRecipe = (payload: RecipePayload) => {
  return httpService.post("/recipe", payload);
};

export const getRecipeDetail = (options: ParamsType) => {
  return httpService.get(`/recipe/${options.id}`);
};

export const deleteRecipe = (id: string) => {
  return httpService.delete(`/recipe/${id}`);
};

export const updateRecipe = (id: string, payload: RecipePayload) => {
  return httpService.put(`/recipe/${id}`, payload);
};
