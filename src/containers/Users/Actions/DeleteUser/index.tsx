import { useToastify } from "@/hooks/useToastify";
import { Modal } from "@/modules/web-feature-shared";
import { useDeleteUserById, useGetAllUser } from "@/queries";
import { Flex } from "antd";
import { useState } from "react";

type Props = {
  content: React.ReactNode;
  id: string;
};

export const DeleteUser = ({ content, id }: Props) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const { handleInvalidateUser } = useGetAllUser();

  const { onDeleteUser, isLoadingDeleteUser } = useDeleteUserById();

  const handleOk = () => {
    onDeleteUser(id, {
      onSuccess: () => {
        handleCloseModal();
        toastify.success("User deleted successfully");
        handleInvalidateUser();
      },
      onError: () => {
        toastify.error("Failed to delete user");
      },
    });
  };

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        width={384}
        title="Delete User"
        open={open}
        onOk={handleOk}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingDeleteUser}
      >
        <span>
          Are you sure you want to delete this user?
          <br />
          This action cannot be undone.
        </span>
      </Modal>
    </>
  );
};
