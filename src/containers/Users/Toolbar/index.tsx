import { Flex } from "antd";
import { CreateEditUser } from "../CreateEditUser";
import { Button } from "@/modules/web-feature-shared";

export const Toolbar = () => {
  return (
    <Flex justify="end">
      <CreateEditUser content={<Button>Create User</Button>} />
    </Flex>
  );
};
