import { UsersKey, UserPayload, UserGender } from "@/queries";
import { z } from "zod";

export const userSchema = z.object({
  [UsersKey.USERNAME]: z.string().nonempty({
    message: "Username is required",
  }),
  [UsersKey.PASSWORD]: z.string().nonempty({
    message: "Password is required",
  }),
  [UsersKey.EMAIL]: z.string().email(),
  [UsersKey.FULL_NAME]: z.string().nonempty({
    message: "Full name is required",
  }),
  [UsersKey.AGE]: z.number().int().positive(),
  [UsersKey.GENDER]: z.number().int(),
  [UsersKey.WEIGHT]: z.number().int().positive(),
  [UsersKey.HEIGHT]: z.number().int().positive(),
  [UsersKey.GOAL]: z.string(),
});

export const defaultValues: UserPayload = {
  [UsersKey.USERNAME]: "",
  [UsersKey.PASSWORD]: "",
  [UsersKey.EMAIL]: "",
  [UsersKey.FULL_NAME]: "",
  [UsersKey.AGE]: 0,
  [UsersKey.GENDER]: 0,
  [UsersKey.WEIGHT]: 0,
  [UsersKey.HEIGHT]: 0,
  [UsersKey.GOAL]: "",
  [UsersKey.ROLE]: "user",
};

export const genderOptions = [
  {
    label: "Male",
    value: UserGender.MALE,
  },
  {
    label: "Female",
    value: UserGender.FEMALE,
  },
];
