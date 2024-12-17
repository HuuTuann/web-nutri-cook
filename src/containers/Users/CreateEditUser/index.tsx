"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Modal, Input, Flex, Row, Col, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  defaultValues,
  genderOptions,
  getDefaultValue,
  userSchema,
} from "./helpers";
import {
  useGetAllUser,
  useGetUserById,
  UserPayload,
  UsersKey,
  useUpdateUserById,
} from "@/queries";
import { Select } from "@/modules/web-feature-shared";
import { pickBy } from "lodash";
import { useToastify } from "@/hooks/useToastify";

type Props = {
  content: React.ReactNode;
  id?: string;
};

export const CreateEditUser = ({ content, id }: Props) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPayload>({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(userSchema),
  });

  const { user } = useGetUserById({ id });

  useEffect(() => {
    if (id) {
      reset(getDefaultValue(user));
    }
  }, [id, user, reset]);

  const { handleInvalidateUser } = useGetAllUser();

  const { onUpdateUser, isLoadingUpdateUser } = useUpdateUserById({
    id,
    onSuccess: () => {
      handleCloseModal();
      handleInvalidateUser();
      toastify.success("Update user success!");
    },
    onError: () => {
      toastify.error("Something went wrong! Please try again.");
    },
  });

  const handleOk = (data: UserPayload) => {
    const payload = pickBy({
      ...data,
      [UsersKey.ROLE]: ["USER"],
      [UsersKey.GENDER]: data[UsersKey.GENDER] === 1 ? true : false,
    }) as unknown as UserPayload;
    onUpdateUser(payload);
  };

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        title={id ? "Edit User" : "Create User"}
        open={open}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingUpdateUser}
      >
        <Form layout="vertical">
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item
                label="Username"
                validateStatus={errors[UsersKey.USERNAME] ? "error" : ""}
                help={errors[UsersKey.USERNAME]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.USERNAME}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Full Name"
                validateStatus={errors[UsersKey.FULL_NAME] ? "error" : ""}
                help={errors[UsersKey.FULL_NAME]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.FULL_NAME}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item
                label="Email"
                validateStatus={errors[UsersKey.EMAIL] ? "error" : ""}
                help={errors[UsersKey.EMAIL]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.EMAIL}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Age"
                validateStatus={errors[UsersKey.AGE] ? "error" : ""}
                help={errors[UsersKey.AGE]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.AGE}
                  control={control}
                  render={({ field }) => (
                    <InputNumber style={{ width: "100%" }} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item
                label="Weight"
                validateStatus={errors[UsersKey.WEIGHT] ? "error" : ""}
                help={errors[UsersKey.WEIGHT]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.WEIGHT}
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      suffix="Kg (s)"
                      style={{ width: "100%" }}
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Height"
                validateStatus={errors[UsersKey.HEIGHT] ? "error" : ""}
                help={errors[UsersKey.HEIGHT]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.HEIGHT}
                  control={control}
                  render={({ field }) => (
                    <InputNumber
                      suffix="cm (s)"
                      style={{ width: "100%" }}
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item
                label="Gender"
                validateStatus={errors[UsersKey.GENDER] ? "error" : ""}
                help={errors[UsersKey.GENDER]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.GENDER}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder="Select a type"
                      options={genderOptions}
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Goal"
                validateStatus={errors[UsersKey.GOAL] ? "error" : ""}
                help={errors[UsersKey.GOAL]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.GOAL}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
