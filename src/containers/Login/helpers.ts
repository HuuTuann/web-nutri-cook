import { AuthKey, LoginPayload } from "@/queries";
import { z } from "zod";

export const loginSchema = z.object({
  [AuthKey.EMAIL]: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email"),
  [AuthKey.PASSWORD]: z.string().nonempty("Password is required"),
});

export const initialValues: LoginPayload = {
  [AuthKey.EMAIL]: "",
  [AuthKey.PASSWORD]: "",
};
