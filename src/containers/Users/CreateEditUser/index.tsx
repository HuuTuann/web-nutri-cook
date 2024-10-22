"use client";

import {
  genderOptions,
  userSchema,
} from "@/containers/Users/CreateEditUser/helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Modal, Input, Flex, Row, Col, InputNumber } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { defaultValues } from "./helpers";
import { useCreateUser, useGetAllUser, UserPayload, UsersKey } from "@/queries";
import { Select } from "@/modules/web-feature-shared";
import { pickBy } from "lodash";
import { useToastify } from "@/hooks/useToastify";

type Props = {
  content: React.ReactNode;
  isEdit?: boolean;
};

export const CreateEditUser = ({ content, isEdit }: Props) => {
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
    handleSubmit,
    formState: { errors },
  } = useForm<UserPayload>({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(userSchema),
  });

  const { handleInvalidateUser } = useGetAllUser();

  const { onCreateUser, isLoadingCreateUser } = useCreateUser({
    onSuccess: () => {
      handleCloseModal();
      handleInvalidateUser();
      toastify.success("Create user success!");
    },
    onError: () => {
      toastify.error("Something went wrong! Please try again.");
    },
  });

  const handleOk = (data: UserPayload) => {
    const payload = pickBy(data) as unknown as UserPayload;
    onCreateUser(payload);
  };

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        title={isEdit ? "Edit User" : "Create User"}
        open={open}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingCreateUser}
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
                label="Password"
                validateStatus={errors[UsersKey.PASSWORD] ? "error" : ""}
                help={errors[UsersKey.PASSWORD]?.message ?? ""}
                required
              >
                <Controller
                  name={UsersKey.PASSWORD}
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
            <Col span={8}>
              <Form.Item
                label="Age"
                validateStatus={errors[UsersKey.AGE] ? "error" : ""}
                help={errors[UsersKey.AGE]?.message ?? ""}
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
            <Col span={8}>
              <Form.Item
                label="Weight"
                validateStatus={errors[UsersKey.WEIGHT] ? "error" : ""}
                help={errors[UsersKey.WEIGHT]?.message ?? ""}
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
            <Col span={8}>
              <Form.Item
                label="Height"
                validateStatus={errors[UsersKey.HEIGHT] ? "error" : ""}
                help={errors[UsersKey.HEIGHT]?.message ?? ""}
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
              >
                <Controller
                  name={UsersKey.GENDER}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder="Select a type"
                      style={{ width: "100%" }}
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
