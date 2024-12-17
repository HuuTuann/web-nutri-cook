import { useToastify } from "@/hooks/useToastify";
import { Modal } from "@/modules/web-feature-shared";
import { useDeleteRecipeById, useGetAllRecipe } from "@/queries";
import { Flex } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  content: React.ReactNode;
  id: string;
  isNavigate?: boolean;
};

export const DeleteRecipe = ({ content, id, isNavigate }: Props) => {
  const router = useRouter();
  const { toastify } = useToastify();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const { handleInvalidateRecipe } = useGetAllRecipe();

  const { onDeleteRecipe, isLoadingDeleteRecipe } = useDeleteRecipeById();

  const handleOk = () => {
    onDeleteRecipe(id, {
      onSuccess: () => {
        handleCloseModal();
        toastify.success("Recipe deleted successfully");
        handleInvalidateRecipe();
        if (isNavigate) {
          router.push("/recipes");
        }
      },
      onError: () => {
        toastify.error("Failed to delete recipe");
      },
    });
  };

  return (
    <>
      <Flex onClick={showModal}>{content}</Flex>
      <Modal
        width={384}
        title="Delete Recipe"
        open={open}
        onOk={handleOk}
        onCancel={handleCloseModal}
        confirmLoading={isLoadingDeleteRecipe}
      >
        <span>
          Are you sure you want to delete this recipe?
          <br />
          This action cannot be undone.
        </span>
      </Modal>
    </>
  );
};
