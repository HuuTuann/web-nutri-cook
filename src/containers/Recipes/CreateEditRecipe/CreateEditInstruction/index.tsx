import { InstructionType, RecipeKey, RecipePayload } from "@/queries";
import { Controller, useForm, UseFormSetValue } from "react-hook-form";
import { getDefaultValue, instructionSchema } from "./helpers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Empty,
  Flex,
  Form,
  Input,
  Row,
  Switch,
  Typography,
} from "antd";
import { Button } from "@/modules/web-feature-shared";
import { isEmpty } from "lodash";

type Props = {
  cookingInstructions: string;
  setCookingInstructions: UseFormSetValue<RecipePayload>;
};

export const CreateEditInstruction: React.FC<Props> = ({
  cookingInstructions,
  setCookingInstructions,
}) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<InstructionType>({
    defaultValues: getDefaultValue(cookingInstructions),
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(instructionSchema),
  });
  const [isEditable, setIsEditable] = useState(false);
  const [cookingInstructionsList, setCookingInstructionsList] = useState(
    isEmpty(cookingInstructions)
      ? []
      : cookingInstructions
          .split(/(?=\d\.\s)/)
          .map((instruction) => instruction.replace(/^\d+\.\s*/, "").trim()),
  );

  useEffect(() => {
    reset(getDefaultValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetCookingInstructions = (cookingInstructions: string[]) => {
    setCookingInstructions(
      RecipeKey.COOKING_INSTRUCTIONS,
      cookingInstructions
        ?.map((instruction, index) => `${index + 1}. ${instruction}`)
        ?.join(" "),
    );
    setCookingInstructionsList(cookingInstructions);
  };

  const handleOk = (data: InstructionType) => {
    const newCookingInstructionsList = [
      ...cookingInstructionsList,
      data[RecipeKey.COOKING_INSTRUCTIONS],
    ];

    setCookingInstructionsList(newCookingInstructionsList);
    handleSetCookingInstructions(newCookingInstructionsList);

    reset(getDefaultValue());
  };

  return (
    <Card
      title={
        <Form layout="vertical" className="mt-4 pr-6">
          <Row gutter={[8, 8]}>
            <Col span={21}>
              <Form.Item
                label={`Step ${cookingInstructionsList?.length + 1}: `}
                validateStatus={
                  errors[RecipeKey.COOKING_INSTRUCTIONS] ? "error" : ""
                }
                help={errors[RecipeKey.COOKING_INSTRUCTIONS]?.message ?? ""}
              >
                <Controller
                  name={RecipeKey.COOKING_INSTRUCTIONS}
                  control={control}
                  render={({ field }) => (
                    <Flex align="center" gap={4}>
                      <Input.TextArea
                        autoSize={{
                          minRows: 1,
                          maxRows: 5,
                        }}
                        placeholder="Enter Cooking Instructions"
                        maxLength={1024}
                        {...field}
                      />
                    </Flex>
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
      {cookingInstructionsList?.length > 0 ? (
        <Flex vertical align="stretch" gap={16}>
          <Flex gap={8} align="center" justify="end">
            <Flex>
              <Typography.Text>{"Editable"}</Typography.Text>
            </Flex>
            <Switch
              defaultValue={isEditable}
              onChange={(value) => setIsEditable(value)}
            />
          </Flex>
          <Flex vertical gap={8} className="w-full">
            {isEditable ? (
              <>
                {cookingInstructionsList?.map((instruction, index) => (
                  <Flex key={index} gap={4} align="center">
                    <Typography.Text>{`Step ${index + 1}: `}</Typography.Text>
                    <Flex className="grow">
                      <Input.TextArea
                        value={instruction}
                        onChange={(e) => {
                          const newCookingInstructionsList = [
                            ...cookingInstructionsList,
                          ];
                          newCookingInstructionsList[index] = e.target.value;
                          handleSetCookingInstructions(
                            newCookingInstructionsList,
                          );
                        }}
                        autoSize={{
                          minRows: 1,
                          maxRows: 5,
                        }}
                      />
                    </Flex>
                    <Button
                      danger
                      type="default"
                      size="middle"
                      onClick={() => {
                        const newCookingInstructionsList = [
                          ...cookingInstructionsList,
                        ];
                        newCookingInstructionsList.splice(index, 1);
                        handleSetCookingInstructions(
                          newCookingInstructionsList,
                        );
                      }}
                    >
                      Remove
                    </Button>
                  </Flex>
                ))}
              </>
            ) : (
              <>
                {cookingInstructionsList?.map((instruction, index) => (
                  <Typography.Text
                    key={index}
                  >{`Step ${index + 1}: ${instruction}`}</Typography.Text>
                ))}
              </>
            )}
          </Flex>
        </Flex>
      ) : (
        <Empty />
      )}
    </Card>
  );
};
