import { DateFormat } from "@/constants";
import { formatDate, formatValueOrNull } from "@/lib/utils";
import { UsersKey, UsersResponse } from "@/queries";
import { ColumnsType } from "antd/es/table";
import { getGenderLabel } from "./helpers";
import { Button, Flex } from "antd";
import { DeleteUser } from "./Actions/DeleteUser";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { CreateEditUser } from "./CreateEditUser";

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
    render: (value) => getGenderLabel(value),
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
    fixed: "right",
    width: 40,
    render: (value) => {
      return (
        <Flex gap={8}>
          <CreateEditUser
            content={
              <Button type="default" size="small" icon={<EditOutlined />} />
            }
            id={value[UsersKey.ID]}
          />
          <DeleteUser
            content={
              <Button
                type="default"
                danger
                size="small"
                icon={<DeleteOutlined />}
              />
            }
            id={value[UsersKey.ID]}
          />
        </Flex>
      );
    },
  },
];
