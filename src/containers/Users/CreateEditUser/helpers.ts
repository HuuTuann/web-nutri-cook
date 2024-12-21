import {
  UsersKey,
  UserPayload,
  UserGender,
  UserDietType,
  UserNutritionPlan,
  UserActivityFactor,
} from "@/queries";
import { z } from "zod";

export const userSchema = z.object({
  [UsersKey.USERNAME]: z.string().nonempty({
    message: "Username is required",
  }),
  [UsersKey.EMAIL]: z.string().email(),
  [UsersKey.FULL_NAME]: z.string().nonempty({
    message: "Full name is required",
  }),
  [UsersKey.NUTRITION_PLAN]: z.string().nonempty({
    message: "Nutrition plan is required",
  }),
  [UsersKey.DIET_TYPE]: z.string().nonempty({
    message: "Diet type is required",
  }),
  [UsersKey.ACTIVITY_FACTOR]: z.string().nonempty({
    message: "Activity factor is required",
  }),
  [UsersKey.AGE]: z.number().int().positive({
    message: "Age must be a positive number",
  }),
  [UsersKey.GENDER]: z.number().int(),
  [UsersKey.WEIGHT]: z.number().int().positive({
    message: "Weight must be a positive number",
  }),
  [UsersKey.HEIGHT]: z.number().int().positive({
    message: "Height must be a positive number",
  }),
});

export const getDefaultValue = (user?: UserPayload) => {
  return {
    [UsersKey.USERNAME]: user?.[UsersKey.USERNAME] || "",
    [UsersKey.PASSWORD]: user?.[UsersKey.PASSWORD] || "",
    [UsersKey.EMAIL]: user?.[UsersKey.EMAIL] || "",
    [UsersKey.FULL_NAME]: user?.[UsersKey.FULL_NAME] || "",
    [UsersKey.AGE]: user?.[UsersKey.AGE] || 0,
    [UsersKey.WEIGHT]: user?.[UsersKey.WEIGHT] || 0,
    [UsersKey.HEIGHT]: user?.[UsersKey.HEIGHT] || 0,
    [UsersKey.ROLE]: ["user"],
    [UsersKey.ACTIVITY_FACTOR]: user?.[UsersKey.ACTIVITY_FACTOR] || "",
    [UsersKey.NUTRITION_PLAN]: user?.[UsersKey.NUTRITION_PLAN] || "",
    [UsersKey.DIET_TYPE]: user?.[UsersKey.DIET_TYPE] || "",
    [UsersKey.GENDER]: user?.[UsersKey.GENDER] ? 1 : 0,
  };
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

export const dietTypeOptions = [
  {
    label: "Weight Loss",
    value: UserDietType.LOSS,
  },
  {
    label: "Weight Maintain",
    value: UserDietType.MAINTAIN,
  },
  {
    label: "Weight Gain",
    value: UserDietType.GAIN,
  },
];

export const nutritionPlanOptions = [
  {
    label: "Balanced",
    value: UserNutritionPlan.BALANCED,
  },
  {
    label: "High Protein",
    value: UserNutritionPlan.HIGH_PROTEIN,
  },
  {
    label: "Low Carb",
    value: UserNutritionPlan.LOW_CARB,
  },
  {
    label: "Durable",
    value: UserNutritionPlan.DURABLE,
  },
  {
    label: "After Weight Loss",
    value: UserNutritionPlan.AFTER_WEIGHT_LOSS,
  },
  {
    label: "Maintain Muscles",
    value: UserNutritionPlan.MAINTAIN_MUSCLES,
  },
  {
    label: "High Energy",
    value: UserNutritionPlan.HIGH_ENERGY,
  },
  {
    label: "Build Muscle",
    value: UserNutritionPlan.BUILD_MUSCLE,
  },
  {
    label: "Athlete",
    value: UserNutritionPlan.ATHLETE,
  },
];

export const activityFactorOptions = [
  {
    label: "Sedentary",
    value: UserActivityFactor.SEDENTARY,
  },
  {
    label: "Lightly Active",
    value: UserActivityFactor.LIGHTLY_ACTIVE,
  },
  {
    label: "Moderately Active",
    value: UserActivityFactor.MODERATELY_ACTIVE,
  },
  {
    label: "Very Active",
    value: UserActivityFactor.VERY_ACTIVE,
  },
  {
    label: "Extra Active",
    value: UserActivityFactor.EXTRA_ACTIVE,
  },
];
