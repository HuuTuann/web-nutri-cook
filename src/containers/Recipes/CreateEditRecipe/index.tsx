"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Modal, Input, Flex } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { defaultValues, recipeSchema } from "./helpers";
import {
  useGetAllUser,
  RecipePayload,
  RecipeKey,
  useCreateRecipe,
} from "@/queries";
import { pickBy } from "lodash";
import { useToastify } from "@/hooks/useToastify";
import { Row, Col, InputNumber } from "@/modules/web-feature-shared";

type Props = {
  content: React.ReactNode;
  isEdit?: boolean;
};

export const CreateEditRecipe = ({ content, isEdit }: Props) => {
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
  } = useForm<RecipePayload>({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(recipeSchema),
  });

  const { handleInvalidateUser } = useGetAllUser();

  const { onCreateRecipe, isLoadingCreateRecipe } = useCreateRecipe({
    onSuccess: () => {
      handleCloseModal();
      handleInvalidateUser();
      toastify.success("Create recipe success!");
    },
    onError: () => {
      handleInvalidateUser();
      toastify.error("Something went wrong! Please try again.");
    },
  });

  const handleOk = (data: RecipePayload) => {
    console.log("🚀 ~ handleOk ~ data:", data);
    const payload = pickBy(data) as unknown as RecipePayload;
    console.log("🚀 ~ handleOk ~ payload:", payload);
    onCreateRecipe(payload);
  };

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        title={isEdit ? "Edit User" : "Create User"}
        open={open}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingCreateRecipe}
      >
        <Form layout="vertical">
          <Row>
            <Col>
              <Form.Item
                label="Recipe Name"
                validateStatus={errors[RecipeKey.NAME] ? "error" : ""}
                help={errors[RecipeKey.NAME]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.NAME}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Cooking Instructions"
                validateStatus={
                  errors[RecipeKey.COOKING_INSTRUCTIONS] ? "error" : ""
                }
                help={errors[RecipeKey.COOKING_INSTRUCTIONS]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.COOKING_INSTRUCTIONS}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                label="Calories"
                validateStatus={errors[RecipeKey.CALORIES] ? "error" : ""}
                help={errors[RecipeKey.CALORIES]?.message ?? ""}
              >
                <Controller
                  name={RecipeKey.CALORIES}
                  control={control}
                  render={({ field }) => (
                    <InputNumber style={{ width: "100%" }} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Protein"
                validateStatus={errors[RecipeKey.PROTEIN] ? "error" : ""}
                help={errors[RecipeKey.PROTEIN]?.message ?? ""}
              >
                <Controller
                  name={RecipeKey.PROTEIN}
                  control={control}
                  render={({ field }) => (
                    <InputNumber style={{ width: "100%" }} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                label="Fat"
                validateStatus={errors[RecipeKey.FAT] ? "error" : ""}
                help={errors[RecipeKey.FAT]?.message ?? ""}
              >
                <Controller
                  name={RecipeKey.FAT}
                  control={control}
                  render={({ field }) => (
                    <InputNumber style={{ width: "100%" }} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Carbs"
                validateStatus={errors[RecipeKey.CARBS] ? "error" : ""}
                help={errors[RecipeKey.CARBS]?.message ?? ""}
              >
                <Controller
                  name={RecipeKey.CARBS}
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
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Description"
                validateStatus={errors[RecipeKey.DESCRIPTION] ? "error" : ""}
                help={errors[RecipeKey.DESCRIPTION]?.message ?? ""}
              >
                <Controller
                  name={RecipeKey.DESCRIPTION}
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
