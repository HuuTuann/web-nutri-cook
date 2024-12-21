import { useToastify } from "@/hooks/useToastify";
import { Modal } from "@/modules/web-feature-shared";
import {
  useChangeStatusUser,
  useGetAllUser,
  UsersKey,
  UserStatusPayload,
} from "@/queries";
import { Switch } from "antd";
import { useState } from "react";

type Props = {
  id: string;
  status: boolean;
};

export const ChangeStatusUser: React.FC<Props> = ({ id, status }) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);
  const [statusUser, setStatusUser] = useState(status);

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const { handleInvalidateUser } = useGetAllUser();

  const { onUpdateStatusUser, isLoadingUpdateStatusUser } = useChangeStatusUser(
    {
      onSuccess: () => {
        handleCloseModal();
        toastify.success("User status changed successfully");
        setStatusUser(!statusUser);
        handleInvalidateUser();
      },
      onError: () => {
        toastify.error("Failed to change user status");
      },
    },
  );

  const handleOk = () => {
    const payload: UserStatusPayload = {
      [UsersKey.ID]: id,
      [UsersKey.IS_ACTIVE]: !status,
    };

    onUpdateStatusUser(payload);
  };

  const handleSwitchChange = (newStatus: boolean) => {
    if (!newStatus) {
      showModal();
    } else {
      const payload: UserStatusPayload = {
        [UsersKey.ID]: id,
        [UsersKey.IS_ACTIVE]: newStatus,
      };

      onUpdateStatusUser(payload);
    }
  };

  return (
    <>
      <Switch
        size="small"
        checked={statusUser}
        onChange={handleSwitchChange}
        loading={isLoadingUpdateStatusUser}
      />
      {open && (
        <Modal
          width={384}
          title="Change User Status"
          open={open}
          onOk={handleOk}
          onCancel={handleCloseModal}
          confirmLoading={isLoadingUpdateStatusUser}
        >
          <span>
            Are you sure you want to change this user status?
            <br />
            Setting the status to inactive will block login access.
          </span>
        </Modal>
      )}
    </>
  );
};
