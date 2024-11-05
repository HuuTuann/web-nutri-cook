import { httpService } from "@/modules/web-feature-shared";
import { stringifyParams, TableParams } from "@/modules/web-feature-shared";
import { RecipePayload } from "@/queries";

export const getAllRecipes = (params: TableParams) => {
  const queryString = stringifyParams(params);
  return httpService.get(`/recipe?${queryString}`);
};

export const createRecipe = (payload: RecipePayload) => {
  return httpService.post("/recipe", payload);
};
