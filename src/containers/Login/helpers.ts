import { AuthKey, LoginPayload } from "@/queries";
import { z } from "zod";

export const loginSchema = z.object({
  [AuthKey.USERNAME]: z.string().nonempty("Username is required"),
  [AuthKey.PASSWORD]: z.string().nonempty("Password is required"),
});

export const initialValues: LoginPayload = {
  [AuthKey.USERNAME]: "",
  [AuthKey.PASSWORD]: "",
};
