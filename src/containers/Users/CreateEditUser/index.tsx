"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Modal, Input, Flex, Row, Col, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  activityFactorOptions,
  dietTypeOptions,
  genderOptions,
  getDefaultValue,
  nutritionPlanOptions,
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
import { isEmpty } from "lodash";
import { useToastify } from "@/hooks/useToastify";

type Props = {
  content: React.ReactNode;
  id?: string;
};

export const CreateEditUser = ({ content, id }: Props) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const { user } = useGetUserById({ id });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserPayload>({
    defaultValues: getDefaultValue(user),
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    if (user) {
      reset(getDefaultValue(user));
    }
  }, [user, reset]);

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    reset(getDefaultValue(user));
  };

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
    const payload = {
      ...data,
      [UsersKey.ROLE]: ["USER"],
      [UsersKey.GENDER]: data[UsersKey.GENDER] === 1 ? true : false,
    };
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
                label="Diet Type"
                validateStatus={errors[UsersKey.DIET_TYPE] ? "error" : ""}
                help={errors[UsersKey.DIET_TYPE]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.DIET_TYPE}
                  control={control}
                  render={({ field: { value, ...props } }) => (
                    <Select
                      placeholder="Select Diet Type"
                      options={dietTypeOptions}
                      value={isEmpty(value) ? [] : value}
                      {...props}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Activity Factor"
                validateStatus={errors[UsersKey.ACTIVITY_FACTOR] ? "error" : ""}
                help={errors[UsersKey.ACTIVITY_FACTOR]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.ACTIVITY_FACTOR}
                  control={control}
                  render={({ field: { value, ...props } }) => (
                    <Select
                      placeholder="Select Activity Factor"
                      options={activityFactorOptions}
                      value={isEmpty(value) ? [] : value}
                      {...props}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Nutrition Plan"
                validateStatus={errors[UsersKey.NUTRITION_PLAN] ? "error" : ""}
                help={errors[UsersKey.NUTRITION_PLAN]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.NUTRITION_PLAN}
                  control={control}
                  render={({ field: { value, ...props } }) => (
                    <Select
                      placeholder="Select Nutrition Plan"
                      options={nutritionPlanOptions}
                      value={isEmpty(value) ? [] : value}
                      {...props}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
