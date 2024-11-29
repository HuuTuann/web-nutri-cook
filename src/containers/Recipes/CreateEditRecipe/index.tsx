"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Input, Flex, Image } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  difficultyLevelOptions,
  formatIngredientList,
  getDefaultValue,
  mealTypeOptions,
  nutritionalQuantityOptions,
  recipeSchema,
} from "./helpers";
import {
  RecipePayload,
  RecipeKey,
  useCreateRecipe,
  useGetAllRecipe,
  useGetRecipeById,
  useUpdateRecipeById,
} from "@/queries";
import { isEmpty, pickBy } from "lodash";
import { useToastify } from "@/hooks/useToastify";
import {
  Row,
  Col,
  Dragger,
  Button,
  Modal,
  Select,
  InputNumber,
} from "@/modules/web-feature-shared";
import { DeleteOutlined } from "@ant-design/icons";
import { CreateEditIngredientSelector } from "../IngredientSelector/CreateEditIngredientSelector";

type Props = {
  content: React.ReactNode;
  id?: string;
};

export const CreateEditRecipe = ({ content, id }: Props) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const { recipe } = useGetRecipeById({ id, enabled: !!id });

  const {
    control,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<RecipePayload>({
    defaultValues: getDefaultValue(recipe),
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(recipeSchema),
  });

  useEffect(() => {
    if (recipe) {
      reset(getDefaultValue(recipe));
    }
  }, [recipe, reset]);

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    reset(getDefaultValue(recipe));
  };

  const { handleInvalidateRecipe } = useGetAllRecipe();

  const { onCreateRecipe, isLoadingCreateRecipe } = useCreateRecipe({
    onSuccess: () => {
      handleCloseModal();
      handleInvalidateRecipe();
      toastify.success("Create recipe success!");
    },
    onError: () => {
      handleInvalidateRecipe();
      toastify.error("Something went wrong! Please try again.");
    },
  });

  const { onUpdateRecipeById, isLoadingUpdateRecipeById } = useUpdateRecipeById(
    {
      id,
      onSuccess: () => {
        handleCloseModal();
        handleInvalidateRecipe();
        toastify.success("Update recipe success!");
      },
      onError: () => {
        handleInvalidateRecipe();
        toastify.error("Something went wrong! Please try again.");
      },
    },
  );

  const handleOk = (data: RecipePayload) => {
    const payload = pickBy({
      ...data,
      [RecipeKey.INGREDIENT_LIST]: formatIngredientList(
        data[RecipeKey.INGREDIENT_LIST],
      ),
    }) as unknown as RecipePayload;
    if (id) {
      onUpdateRecipeById(payload);
      return;
    }

    onCreateRecipe(payload);
  };

  const handleClearImage = useCallback(() => {
    setValue(RecipeKey.IMAGE_URL, "");
  }, [setValue]);

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        title={id ? "Edit Recipe" : "Create Recipe"}
        open={open}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingCreateRecipe || isLoadingUpdateRecipeById}
      >
        <Form layout="vertical">
          <Row>
            <Col span={8}>
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
            <Col span={8}>
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
            <Col span={8}>
              <Form.Item
                label="Meal Type"
                validateStatus={errors[RecipeKey.MEAL_TYPE] ? "error" : ""}
                help={errors[RecipeKey.MEAL_TYPE]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.MEAL_TYPE}
                  control={control}
                  render={({ field }) => (
                    <Select
                      mode="multiple"
                      placeholder="Select ingredient"
                      options={mealTypeOptions}
                      allowClear
                      {...field}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Difficulty Level"
                validateStatus={
                  errors[RecipeKey.DIFFICULTY_LEVEL] ? "error" : ""
                }
                help={errors[RecipeKey.DIFFICULTY_LEVEL]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.DIFFICULTY_LEVEL}
                  control={control}
                  render={({ field }) => (
                    <Select options={difficultyLevelOptions} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Nutritional Quantity"
                validateStatus={
                  errors[RecipeKey.NUTRITIONAL_QUALITY] ? "error" : ""
                }
                help={errors[RecipeKey.NUTRITIONAL_QUALITY]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.NUTRITIONAL_QUALITY}
                  control={control}
                  render={({ field }) => (
                    <Select options={nutritionalQuantityOptions} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item
                label="Prep Time"
                validateStatus={errors[RecipeKey.PREP_TIME] ? "error" : ""}
                help={errors[RecipeKey.PREP_TIME]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.PREP_TIME}
                  control={control}
                  render={({ field }) => <InputNumber {...field} />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Cook Time"
                validateStatus={errors[RecipeKey.COOK_TIME] ? "error" : ""}
                help={errors[RecipeKey.COOK_TIME]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.COOK_TIME}
                  control={control}
                  render={({ field }) => <InputNumber {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Ingredient List"
                validateStatus={
                  errors[RecipeKey.INGREDIENT_LIST] ? "error" : ""
                }
                help={errors[RecipeKey.INGREDIENT_LIST]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.INGREDIENT_LIST}
                  control={control}
                  render={() => (
                    <CreateEditIngredientSelector
                      listIngredients={watch(RecipeKey.INGREDIENT_LIST)}
                      setListIngredients={setValue}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              {isEmpty(watch(RecipeKey.IMAGE_URL)) ? (
                <Form.Item
                  label="Image"
                  validateStatus={errors[RecipeKey.IMAGE_URL] ? "error" : ""}
                  help={errors[RecipeKey.IMAGE_URL]?.message ?? ""}
                  required
                >
                  <Controller
                    name={RecipeKey.IMAGE_URL}
                    control={control}
                    render={({ field: { onChange } }) => (
                      <Dragger onChange={onChange} />
                    )}
                  />
                </Form.Item>
              ) : (
                <>
                  <Flex className="w-full items-center justify-between pb-2">
                    <span>Image</span>
                    <Button
                      danger
                      type="default"
                      size="small"
                      icon={<DeleteOutlined />}
                      onClick={handleClearImage}
                    />
                  </Flex>
                  <Image
                    width="100%"
                    className="rounded-md"
                    src={watch(RecipeKey.IMAGE_URL)}
                    alt="Ingredient Image"
                  />
                </>
              )}
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
                  render={({ field }) => (
                    <Input.TextArea
                      autoSize={{
                        minRows: 3,
                        maxRows: 5,
                      }}
                      maxLength={1024}
                      {...field}
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
