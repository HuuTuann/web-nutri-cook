import { httpService } from "@/configs/httpService";
import { LoginPayload } from "@/queries/Auth/types";

export const login = (payload: LoginPayload) => {
  return httpService.post("/auth/admin/login", payload);
};
