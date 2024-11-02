import axios from "axios";
import {
  getAdminCookie,
  removeAdminCookie,
} from "@/modules/web-feature-shared";
import { isEmpty } from "lodash";

const publicPaths = ["/login"];

export const httpService = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

httpService.interceptors.request.use(
  (config) => {
    const token = getAdminCookie();

    const isPublicPath = publicPaths.some((path) => config.url?.includes(path));

    if (!isPublicPath && isEmpty(token)) {
      window.location.href = "/login";
      return Promise.reject("Unauthorized");
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpService.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    if (error?.response?.status === 401) {
      removeAdminCookie();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
