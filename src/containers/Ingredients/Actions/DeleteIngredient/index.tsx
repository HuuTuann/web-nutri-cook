import { useToastify } from "@/hooks/useToastify";
import { Modal } from "@/modules/web-feature-shared";
import { useDeleteIngredientById, useGetAllIngredient } from "@/queries";
import { Flex } from "antd";
import { useState } from "react";

type Props = {
  content: React.ReactNode;
  id: string;
};

export const DeleteIngredient = ({ content, id }: Props) => {
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const { handleInvalidateIngredient } = useGetAllIngredient();

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const { onDeleteIngredient, isLoadingDeleteIngredient } =
    useDeleteIngredientById();

  const handleOk = () => {
    onDeleteIngredient(id, {
      onSuccess: () => {
        setOpen(false);
        toastify.success("Ingredient deleted successfully");
        handleInvalidateIngredient();
      },
      onError: () => {
        setOpen(false);
        toastify.error("Failed to delete ingredient");
      },
    });
  };
  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        width={384}
        title="Delete Ingredient"
        open={open}
        onOk={handleOk}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingDeleteIngredient}
      >
        <span>
          Are you sure you want to delete this ingredient?
          <br />
          This action cannot be undone.
        </span>
      </Modal>
    </>
  );
};
