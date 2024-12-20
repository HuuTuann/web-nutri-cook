"use client";

import { Toolbar } from "./Toolbar";
import { Flex } from "antd";
import {
  initialPageParam,
  Table,
  TablePaginationConfig,
} from "@/modules/web-feature-shared";
import { useGetAllUser, UsersResponse } from "@/queries";
import { allColumns } from "./allColumns";
import { useEffect } from "react";

export const Users = () => {
  const {
    users,
    isLoadingGetAllUser,
    pageSize = 0,
    totalRecords = 0,
    userParams,
    setUserParams,
  } = useGetAllUser();

  const handleTableChange = (pagination: TablePaginationConfig) => {
    const { current = 1, pageSize = 10 } = pagination;
    setUserParams({
      ...userParams,
      pageNo: current,
      pageSize,
    });
  };

  useEffect(() => {
    setUserParams(initialPageParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex vertical gap={16}>
      <Toolbar />
      <Table<UsersResponse>
        columns={allColumns()}
        dataSource={users}
        pagination={{
          pageSize: pageSize,
          total: totalRecords,
        }}
        onChange={handleTableChange}
        loading={isLoadingGetAllUser}
      />
    </Flex>
  );
};
