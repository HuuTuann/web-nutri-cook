"use client";

import { initialValues, loginSchema } from "./helpers";
import { AuthKey, LoginPayload, LoginResponse, useLogin } from "@/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { setAdminCookie } from "@/configs/accountService";
import { useToastify } from "@/hooks/useToastify";

export const Login = () => {
  const router = useRouter();
  const { toastify } = useToastify();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    defaultValues: initialValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const { onLogin } = useLogin({
    onSuccess: (data) => {
      setAdminCookie((data as LoginResponse)?.data?.token, 7);
      toastify.success("Login success");
      router.push("/users");
    },
    onError: () => {
      toastify.error("Login failed");
    },
  });

  const onSubmit = (data: LoginPayload) => {
    onLogin(data);
  };

  return (
    <Flex vertical={true} className="w-96">
      <Form layout="vertical">
        <Form.Item
          label="Username"
          validateStatus={errors[AuthKey.USERNAME] ? "error" : ""}
          help={errors[AuthKey.USERNAME]?.message ?? ""}
        >
          <Controller
            name={AuthKey.USERNAME}
            control={control}
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          validateStatus={errors[AuthKey.PASSWORD] ? "error" : ""}
          help={errors[AuthKey.PASSWORD]?.message ?? ""}
        >
          <Controller
            name={AuthKey.PASSWORD}
            control={control}
            render={({ field }) => <Input.Password {...field} />}
          />
        </Form.Item>
      </Form>
      <Button
        size="large"
        type="primary"
        className="mt-8 w-full"
        onClick={handleSubmit(onSubmit)}
      >
        Login
      </Button>
    </Flex>
  );
};
