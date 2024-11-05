import { httpService } from "@/modules/web-feature-shared";
import { LoginPayload } from "@/queries/Auth/types";

export const login = (payload: LoginPayload) => {
  return httpService.post("/auth/admin/login", payload);
};
