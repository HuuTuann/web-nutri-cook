"use client";

import { Toolbar } from "./Toolbar";
import { Flex } from "antd";
import { Table } from "@/modules/web-feature-shared";
import { UsersResponse } from "@/queries";
import { usersMock } from "@/mocks";
import { allColumns } from "./allColumns";

export const Users = () => {
  return (
    <Flex vertical gap={16}>
      <Toolbar />
      <Table<UsersResponse> columns={allColumns()} dataSource={usersMock} />
    </Flex>
  );
};
