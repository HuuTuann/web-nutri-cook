import { Flex, Tooltip } from "antd";
import { CreateEditUser } from "../CreateEditUser";
import { Button } from "@/modules/web-feature-shared";
import { SyncOutlined } from "@ant-design/icons";
import { useGetAllUser } from "@/queries";

export const Toolbar = () => {
  const { handleInvalidateUser } = useGetAllUser();

  return (
    <Flex justify="end" gap={8}>
      <Tooltip title="Refresh">
        <Button
          type="default"
          icon={<SyncOutlined />}
          onClick={handleInvalidateUser}
        />
      </Tooltip>
      <CreateEditUser content={<Button disabled>Create User</Button>} />
    </Flex>
  );
};
