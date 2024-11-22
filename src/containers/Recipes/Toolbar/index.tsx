import { Flex, Tooltip } from "antd";
import { CreateEditRecipe } from "../CreateEditRecipe";
import { Button } from "@/modules/web-feature-shared";
import { SyncOutlined } from "@ant-design/icons";
import { useGetAllRecipe } from "@/queries";

export const Toolbar = () => {
  const { handleInvalidateRecipe } = useGetAllRecipe();

  return (
    <Flex justify="end" gap={8}>
      <Tooltip title="Refresh">
        <Button
          type="default"
          icon={<SyncOutlined />}
          onClick={handleInvalidateRecipe}
        />
      </Tooltip>
      <CreateEditRecipe content={<Button>Create Recipe</Button>} />
    </Flex>
  );
};
