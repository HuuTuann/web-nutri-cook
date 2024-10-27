"use client";

import {
  IngredientKey,
  IngredientPayload,
  useCreateIngredient,
  useGetAllIngredient,
} from "@/queries";
import { Button, Flex, Form, Image, Input } from "antd";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { defaultValues } from "./helpers";
import { useToastify } from "@/hooks/useToastify";
import { isEmpty, pickBy } from "lodash";
import {
  Modal,
  Dragger,
  InputNumber,
  Row,
  Col,
} from "@/modules/web-feature-shared";
import { DeleteOutlined } from "@ant-design/icons";
import "./styles.scss";

type Props = {
  content: React.ReactNode;
  isEdit?: boolean;
};

export const CreateEditIngredient = ({ content, isEdit }: Props) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const {
    control,
    watch,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IngredientPayload>({
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    // resolver: zodResolver(ingredientSchema),
  });

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    reset(defaultValues);
  };

  const { handleInvalidateIngredient } = useGetAllIngredient();

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

  const handleOk = (data: IngredientPayload) => {
    const payload = pickBy(data) as unknown as IngredientPayload;
    onCreateIngredient(payload);
  };

  const handleClearImage = useCallback(() => {
    setValue(IngredientKey.IMAGE_URL, "");
  }, [setValue]);

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        title={isEdit ? "Edit Ingredient" : "Create Ingredient"}
        open={open}
        onOk={handleSubmit(handleOk)}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingCreateIngredient}
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
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Unit"
                validateStatus={errors[IngredientKey.UNIT] ? "error" : ""}
                help={errors[IngredientKey.UNIT]?.message ?? ""}
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
              >
                <Controller
                  name={IngredientKey.CALORIES}
                  control={control}
                  render={({ field }) => <InputNumber {...field} />}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Protein"
                validateStatus={errors[IngredientKey.PROTEIN] ? "error" : ""}
                help={errors[IngredientKey.PROTEIN]?.message ?? ""}
              >
                <Controller
                  name={IngredientKey.PROTEIN}
                  control={control}
                  render={({ field }) => <InputNumber {...field} />}
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
              >
                <Controller
                  name={IngredientKey.FAT}
                  control={control}
                  render={({ field }) => <InputNumber {...field} />}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                label="Carbs"
                validateStatus={errors[IngredientKey.CARBS] ? "error" : ""}
                help={errors[IngredientKey.CARBS]?.message ?? ""}
              >
                <Controller
                  name={IngredientKey.CARBS}
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
