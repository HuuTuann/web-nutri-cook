import { useRouter } from "next/router";
import { getAdminCookie } from "./accountService";
import axios from "axios";

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

    if (!isPublicPath && !token) {
      const router = useRouter();
      router.push("/login");
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
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const router = useRouter();
      router.push("/login");
    }
    return Promise.reject(error);
  },
);
