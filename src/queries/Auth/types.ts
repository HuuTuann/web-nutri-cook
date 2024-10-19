export enum AuthKey {
  USERNAME = "username",
  PASSWORD = "password",
}

export interface LoginPayload {
  [AuthKey.USERNAME]: string;
  [AuthKey.PASSWORD]: string;
}
