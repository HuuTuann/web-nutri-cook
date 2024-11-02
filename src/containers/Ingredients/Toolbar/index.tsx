import { Flex, Tooltip } from "antd";
import { CreateEditIngredient } from "../CreateEditIngredient";
// import { Button as ButtonAntd } from "antd";
import { useGetAllIngredient } from "@/queries";
import { SyncOutlined } from "@ant-design/icons";
import { Button } from "@/modules/web-feature-shared";

export const Toolbar = () => {
  const { handleInvalidateIngredient } = useGetAllIngredient();

  return (
    <Flex justify="end" gap={8}>
      <Tooltip title="Refresh">
        <Button
          type="default"
          icon={<SyncOutlined />}
          onClick={handleInvalidateIngredient}
        />
      </Tooltip>
      <CreateEditIngredient content={<Button>Create Ingredient</Button>} />
    </Flex>
  );
};
