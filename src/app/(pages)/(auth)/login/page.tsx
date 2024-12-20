"use client";

import { getAdminCookie } from "@/modules/web-feature-shared";
import { Login } from "@/containers";
import { isEmpty } from "lodash";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const isLogin = getAdminCookie();

  if (!isEmpty(isLogin)) {
    router.push("/users");
  }

  return <Login />;
}
