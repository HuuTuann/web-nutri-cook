import { DateFormat } from "@/constants";
import { CreateEditUser } from "@/containers/Users/CreateEditUser";
import { formatDate, formatValueOrNull } from "@/lib/utils";
import { Button } from "@/modules/web-feature-shared";
import { UsersKey, UsersResponse } from "@/queries";
import { ColumnsType } from "antd/es/table";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Flex } from "antd";

export const allColumns = (): ColumnsType<UsersResponse> => [
  {
    title: "Username",
    dataIndex: UsersKey.USERNAME,
    key: UsersKey.USERNAME,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Email",
    dataIndex: UsersKey.EMAIL,
    key: UsersKey.EMAIL,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Full Name",
    dataIndex: UsersKey.FULL_NAME,
    key: UsersKey.FULL_NAME,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Age",
    dataIndex: UsersKey.AGE,
    key: UsersKey.AGE,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Gender",
    dataIndex: UsersKey.GENDER,
    key: UsersKey.GENDER,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Weight",
    dataIndex: UsersKey.WEIGHT,
    key: UsersKey.WEIGHT,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Height",
    dataIndex: UsersKey.HEIGHT,
    key: UsersKey.HEIGHT,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Goal",
    dataIndex: UsersKey.GOAL,
    key: UsersKey.GOAL,
    render: (value) => formatValueOrNull(value),
  },
  {
    title: "Created At",
    dataIndex: UsersKey.CREATED_AT,
    key: UsersKey.CREATED_AT,
    render: (value) => formatDate(value, DateFormat),
  },
  {
    title: "Actions",
    key: "actions",
    width: 100,
    render: () => (
      <Flex gap={4}>
        <CreateEditUser
          content={<Button type="text" icon={<FiEdit />} />}
          isEdit
        />
        <Button danger type="text" icon={<AiOutlineDelete />} />
      </Flex>
    ),
  },
];
