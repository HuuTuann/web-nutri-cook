"use client";

import { userSchema } from "@/containers/Users/CreateEditUser/helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Modal, Input, Flex, Row, Col } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { defaultValues } from "./helpers";
import { UserPayload, UsersKey } from "@/queries";

type Props = {
  content: React.ReactNode;
  isEdit?: boolean;
};

export const CreateEditUser = ({ content, isEdit }: Props) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm<UserPayload>({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(userSchema),
  });

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        title={isEdit ? "Edit User" : "Create User"}
        open={open}
        // onOk={handleSubmit(handleOk)}
        onCancel={handleCancel}
        // confirmLoading={isPending}
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
                label="Email"
                validateStatus={errors[UsersKey.EMAIL] ? "error" : ""}
                help={errors[UsersKey.EMAIL]?.message ?? ""}
              >
                <Controller
                  name={UsersKey.EMAIL}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item
                label="Full Name"
                validateStatus={errors[UsersKey.FULL_NAME] ? "error" : ""}
                help={errors[UsersKey.FULL_NAME]?.message ?? ""}
              >
                <Controller
                  name={UsersKey.FULL_NAME}
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
              >
                <Controller
                  name={UsersKey.AGE}
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
              >
                <Controller
                  name={UsersKey.GENDER}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Weight"
                validateStatus={errors[UsersKey.WEIGHT] ? "error" : ""}
                help={errors[UsersKey.WEIGHT]?.message ?? ""}
              >
                <Controller
                  name={UsersKey.WEIGHT}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <Form.Item
                label="Height"
                validateStatus={errors[UsersKey.HEIGHT] ? "error" : ""}
                help={errors[UsersKey.HEIGHT]?.message ?? ""}
              >
                <Controller
                  name={UsersKey.HEIGHT}
                  control={control}
                  render={({ field }) => <Input {...field} />}
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
