import { Flex, Typography } from "antd";

const { Text } = Typography;

export const getCookingInstructions = (value: string) => {
  const cookingInstructions = value
    ?.split(/(?=\d\.\s)/)
    ?.map((step) => step.trim());

  return (
    <Flex className="ml-4 flex-col">
      {cookingInstructions?.map((step, index) => (
        <Text key={index}>{step}</Text>
      ))}
    </Flex>
  );
};

export const getTime = (value: number) => {
  if (!value) return "--";

  return `${value} mins`;
};
