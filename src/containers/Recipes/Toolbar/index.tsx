import { Flex } from "antd";
import { CreateEditRecipe } from "../CreateEditRecipe";
import { Button } from "@/modules/web-feature-shared";

export const Toolbar = () => {
  return (
    <Flex justify="end">
      <CreateEditRecipe content={<Button>Create Recipe</Button>} />
    </Flex>
  );
};
