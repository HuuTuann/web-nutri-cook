export enum AuthKey {
  EMAIL = "email",
  PASSWORD = "password",
}

export interface LoginPayload {
  [AuthKey.EMAIL]: string;
  [AuthKey.PASSWORD]: string;
}
