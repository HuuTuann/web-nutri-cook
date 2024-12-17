"use client";

import {
  IngredientKey,
  IngredientPayload,
  useCreateIngredient,
  useGetAllIngredient,
  useGetIngredientById,
  useUpdateIngredientById,
} from "@/queries";
import { Button, Flex, Form, Image, Input } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  getDefaultValue,
  ingredientSchema,
  ingredientTypeOptions,
} from "./helpers";
import { useToastify } from "@/hooks/useToastify";
import { isEmpty, pickBy } from "lodash";
import {
  Modal,
  Dragger,
  InputNumber,
  Row,
  Col,
  Select,
} from "@/modules/web-feature-shared";
import { DeleteOutlined } from "@ant-design/icons";
import "./styles.scss";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  content: React.ReactNode;
  id?: string;
};

export const CreateEditIngredient = ({ content, id }: Props) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const { ingredient } = useGetIngredientById({
    id,
  });

  const {
    control,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IngredientPayload>({
    defaultValues: getDefaultValue(ingredient),
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(ingredientSchema),
  });

  useEffect(() => {
    if (ingredient) {
      reset(getDefaultValue(ingredient));
    }
  }, [ingredient, reset]);

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    reset(getDefaultValue());
  };

  const { handleInvalidateIngredient } = useGetAllIngredient();
  const { handleInvalidateIngredientById } = useGetIngredientById();

  const { onCreateIngredient, isLoadingCreateIngredient } = useCreateIngredient(
    {
      onSuccess: () => {
        handleCloseModal();
        handleInvalidateIngredient();
        toastify.success("Create ingredient success!");
      },
      onError: () => {
        toastify.error("Something went wrong! Please try again.");
      },
    },
  );

  const { onUpdateIngredientById, isLoadingUpdateIngredientById } =
    useUpdateIngredientById({
      onSuccess: () => {
        handleCloseModal();
        handleInvalidateIngredient();
        handleInvalidateIngredientById();
        toastify.success("Update ingredient success!");
      },
      onError: () => {
        toastify.error("Something went wrong! Please try again.");
      },
    });

  const handleOk = (data: IngredientPayload) => {
    const payload = pickBy(data) as unknown as IngredientPayload;
    if (id) {
      onUpdateIngredientById({ ...payload, [IngredientKey.ID]: id });
      return;
    }

    onCreateIngredient(payload);
  };

  const handleClearImage = useCallback(() => {
    setValue(IngredientKey.IMAGE_URL, "");
  }, [setValue]);

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        title={id ? "Edit Ingredient" : "Create Ingredient"}
        open={open}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCloseModal}
        confirmLoading={
          isLoadingCreateIngredient || isLoadingUpdateIngredientById
        }
      >
        <Form layout="vertical">
          <Row>
            <Col span={24}>
              <Form.Item
                label="Name"
                validateStatus={errors[IngredientKey.NAME] ? "error" : ""}
                help={errors[IngredientKey.NAME]?.message ?? ""}
                required
              >
                <Controller
                  name={IngredientKey.NAME}
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                label="Type"
                validateStatus={errors[IngredientKey.TYPE] ? "error" : ""}
                help={errors[IngredientKey.TYPE]?.message ?? ""}
                required
              >
                <Controller
                  name={IngredientKey.TYPE}
                  control={control}
                  render={({ field }) => (
                    <Select options={ingredientTypeOptions} {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Unit"
                validateStatus={errors[IngredientKey.UNIT] ? "error" : ""}
                help={errors[IngredientKey.UNIT]?.message ?? ""}
                required
              >
                <Controller
                  name={IngredientKey.UNIT}
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
                validateStatus={errors[IngredientKey.CALORIES] ? "error" : ""}
                help={errors[IngredientKey.CALORIES]?.message ?? ""}
                required
              >
                <Controller
                  name={IngredientKey.CALORIES}
                  control={control}
                  render={({ field }) => (
                    <InputNumber suffix="g (s)" {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Protein"
                validateStatus={errors[IngredientKey.PROTEIN] ? "error" : ""}
                help={errors[IngredientKey.PROTEIN]?.message ?? ""}
                required
              >
                <Controller
                  name={IngredientKey.PROTEIN}
                  control={control}
                  render={({ field }) => (
                    <InputNumber suffix="g (s)" {...field} />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Item
                label="Fat"
                validateStatus={errors[IngredientKey.FAT] ? "error" : ""}
                help={errors[IngredientKey.FAT]?.message ?? ""}
                required
              >
                <Controller
                  name={IngredientKey.FAT}
                  control={control}
                  render={({ field }) => (
                    <InputNumber suffix="g (s)" {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Carbs"
                validateStatus={errors[IngredientKey.CARBS] ? "error" : ""}
                help={errors[IngredientKey.CARBS]?.message ?? ""}
                required
              >
                <Controller
                  name={IngredientKey.CARBS}
                  control={control}
                  render={({ field }) => (
                    <InputNumber suffix="g (s)" {...field} />
                  )}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Description"
                validateStatus={
                  errors[IngredientKey.DESCRIPTION] ? "error" : ""
                }
                help={errors[IngredientKey.DESCRIPTION]?.message ?? ""}
              >
                <Controller
                  name={IngredientKey.DESCRIPTION}
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
          <Row>
            <Col span={24}>
              {isEmpty(watch(IngredientKey.IMAGE_URL)) ? (
                <Form.Item
                  label="Image"
                  validateStatus={
                    errors[IngredientKey.IMAGE_URL] ? "error" : ""
                  }
                  help={errors[IngredientKey.IMAGE_URL]?.message ?? ""}
                  required
                >
                  <Controller
                    name={IngredientKey.IMAGE_URL}
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
                    src={watch(IngredientKey.IMAGE_URL)}
                    alt="Ingredient Image"
                  />
                </>
              )}
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
