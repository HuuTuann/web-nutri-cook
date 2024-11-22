import {
  Col,
  initialPageParam,
  Table,
  Select,
  InputNumber,
  Button,
} from "@/modules/web-feature-shared";
import {
  IngredientKey,
  IngredientSelectorType,
  RecipeKey,
  RecipePayload,
  useGetAllIngredient,
} from "@/queries";
import { Card, Empty, Form, Input, Row } from "antd";
import { useCallback, useEffect, useMemo } from "react";
import { allColumns } from "../allColumns";
import { Controller, useForm, UseFormSetValue } from "react-hook-form";
import { getDefaultValue, ingredientSelectorSchema } from "./helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import "../styles.scss";

type Props = {
  listIngredients: IngredientSelectorType[];
  setListIngredients: UseFormSetValue<RecipePayload>;
};

export const CreateEditIngredientSelector: React.FC<Props> = ({
  listIngredients,
  setListIngredients,
}) => {
  const { ingredients, setIngredientParams } = useGetAllIngredient();

  useEffect(() => {
    setIngredientParams(initialPageParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    control,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IngredientSelectorType>({
    defaultValues: getDefaultValue(),
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(ingredientSelectorSchema),
  });

  useEffect(() => {
    reset(getDefaultValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ingredientOptions = useMemo(
    () =>
      ingredients
        .filter(
          (ingredient) =>
            !listIngredients.some(
              (item) =>
                item[RecipeKey.INGREDIENT_ID] === ingredient[IngredientKey.ID],
            ),
        )
        .map((ingredient) => ({
          label: ingredient[IngredientKey.NAME],
          value: ingredient[IngredientKey.ID],
        })),
    [ingredients, listIngredients],
  );

  const handleOk = (data: IngredientSelectorType) => {
    const ingredientName = ingredients.find(
      (ingredient) =>
        ingredient[IngredientKey.ID] === data[RecipeKey.INGREDIENT_ID],
    )?.[IngredientKey.NAME] as string;

    listIngredients.push({
      ...data,
      [IngredientKey.NAME]: ingredientName,
    });
    setListIngredients(RecipeKey.INGREDIENT_LIST, listIngredients);
    reset(getDefaultValue());
  };

  const handleDeleteIngredient = useCallback(
    (id: string) => {
      const newListIngredients = listIngredients.filter(
        (ingredient) => ingredient[RecipeKey.INGREDIENT_ID] !== id,
      );
      setListIngredients(RecipeKey.INGREDIENT_LIST, newListIngredients);
    },
    [listIngredients, setListIngredients],
  );

  return (
    <Card
      title={
        <Form layout="vertical" className="mt-4 pr-6">
          <Row gutter={[8, 8]}>
            <Col span={7}>
              <Form.Item
                label="Ingredient Name"
                validateStatus={errors[RecipeKey.INGREDIENT_ID] ? "error" : ""}
                help={errors[RecipeKey.INGREDIENT_ID]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.INGREDIENT_ID}
                  control={control}
                  render={({ field: { value, onChange, ...props } }) => (
                    <Select
                      placeholder="Select ingredient"
                      options={ingredientOptions}
                      value={value || []}
                      onChange={(value) => {
                        onChange(value);
                        const ingredientUnit = ingredients.find(
                          (ingredient) =>
                            ingredient[IngredientKey.ID] === value,
                        )?.[IngredientKey.UNIT] as string;

                        setValue(RecipeKey.UNIT, ingredientUnit);
                      }}
                      {...props}
                    />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item
                label="Unit"
                validateStatus={errors[RecipeKey.UNIT] ? "error" : ""}
                help={errors[RecipeKey.UNIT]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.UNIT}
                  control={control}
                  render={({ field }) => (
                    <Input placeholder="Enter unit" disabled {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={7}>
              <Form.Item
                label="Quantity"
                validateStatus={errors[RecipeKey.QUANTITY] ? "error" : ""}
                help={errors[RecipeKey.QUANTITY]?.message ?? ""}
                required
              >
                <Controller
                  name={RecipeKey.QUANTITY}
                  control={control}
                  render={({ field }) => (
                    <InputNumber placeholder="Enter quantity" {...field} />
                  )}
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Button
                type="default"
                size="middle"
                className="mt-[30px] w-full"
                onClick={handleSubmit(handleOk)}
              >
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      }
    >
      {listIngredients?.length > 0 ? (
        <Table<IngredientSelectorType>
          columns={allColumns(handleDeleteIngredient)}
          dataSource={listIngredients}
        />
      ) : (
        <Empty />
      )}
    </Card>
  );
};
