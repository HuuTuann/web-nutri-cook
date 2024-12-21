export enum UsersKey {
  ID = "user_ID",
  USERNAME = "username",
  PASSWORD = "password",
  EMAIL = "email",
  FULL_NAME = "fullname",
  AGE = "age",
  GENDER = "gender",
  WEIGHT = "weight",
  HEIGHT = "height",
  ROLE = "roles",
  ACTIVITY_FACTOR = "activityFactor",
  NUTRITION_PLAN = "nutritionPlan",
  DIET_TYPE = "dietType",
  CREATED_AT = "createdAt",
  IS_ACTIVE = "active",
}

export interface UserPayload {
  [UsersKey.USERNAME]: string;
  [UsersKey.PASSWORD]: string;
  [UsersKey.EMAIL]: string;
  [UsersKey.FULL_NAME]: string;
  [UsersKey.AGE]: number;
  [UsersKey.GENDER]: number | boolean;
  [UsersKey.WEIGHT]: number;
  [UsersKey.HEIGHT]: number;
  [UsersKey.ROLE]: string[];
  [UsersKey.ACTIVITY_FACTOR]: string;
  [UsersKey.NUTRITION_PLAN]: string;
  [UsersKey.DIET_TYPE]: string;
}

export interface UsersResponse extends UserPayload {
  [UsersKey.ID]: string;
  [UsersKey.IS_ACTIVE]: boolean;
  [UsersKey.CREATED_AT]: string;
}

export interface UserStatusPayload {
  [UsersKey.ID]: string;
  [UsersKey.IS_ACTIVE]: boolean;
}

export enum UserGender {
  FEMALE = 0,
  MALE = 1,
}

export enum UserDietType {
  LOSS = "WEIGHT_LOSS",
  MAINTAIN = "WEIGHT_MAINTAIN",
  GAIN = "WEIGHT_GAIN",
}

export enum UserNutritionPlan {
  DURABLE = "DURABLE",
  HIGH_PROTEIN = "HIGH_PROTEIN",
  LOW_CARB = "LOW_CARB",
  BALANCED = "BALANCED",
  AFTER_WEIGHT_LOSS = "AFTER_WEIGHT_LOSS",
  MAINTAIN_MUSCLES = "MAINTAIN_MUSCLES",
  HIGH_ENERGY = "HIGH_ENERGY",
  BUILD_MUSCLE = "BUILD_MUSCLE",
  ATHLETE = "ATHLETE",
  CARDIO_TRAINING = "CARDIO_TRAINING",
}

export enum UserActivityFactor {
  SEDENTARY = "SEDENTARY",
  LIGHTLY_ACTIVE = "LIGHTLY_ACTIVE",
  MODERATELY_ACTIVE = "MODERATELY_ACTIVE",
  VERY_ACTIVE = "VERY_ACTIVE",
  EXTRA_ACTIVE = "EXTRA_ACTIVE",
}
