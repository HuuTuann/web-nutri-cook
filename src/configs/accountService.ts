import Cookies from "js-cookie";

const ADMIN_NUTRI_COOK = "admin-nutri-cook";

export const setAdminCookie = (value: string, days: number) => {
  Cookies.set(ADMIN_NUTRI_COOK, value, { expires: days });
};

export const getAdminCookie = (): string | undefined => {
  return Cookies.get(ADMIN_NUTRI_COOK);
};

export const removeAdminCookie = () => {
  Cookies.remove(ADMIN_NUTRI_COOK);
};
