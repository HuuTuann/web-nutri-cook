export enum UsersKey {
  ID = "id",
  USERNAME = "username",
  PASSWORD = "password",
  EMAIL = "email",
  FULL_NAME = "fullName",
  AGE = "age",
  GENDER = "gender",
  WEIGHT = "weight",
  HEIGHT = "height",
  GOAL = "goal",
  ROLE = "role",
  CREATED_AT = "createdAt",
}

export interface UserPayload {
  [UsersKey.USERNAME]: string;
  [UsersKey.PASSWORD]: string;
  [UsersKey.EMAIL]: string;
  [UsersKey.FULL_NAME]: string;
  [UsersKey.AGE]?: number;
  [UsersKey.GENDER]?: number;
  [UsersKey.WEIGHT]?: number;
  [UsersKey.HEIGHT]?: number;
  [UsersKey.GOAL]?: string;
  [UsersKey.ROLE]?: string;
}

export interface UsersResponse extends UserPayload {
  [UsersKey.ID]: string;
  [UsersKey.CREATED_AT]: string;
}

export enum UserGender {
  MALE = 0,
  FEMALE = 1,
}
