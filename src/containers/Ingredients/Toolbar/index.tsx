import { Flex, Tooltip } from "antd";
import { CreateEditIngredient } from "../CreateEditIngredient";
import { useGetAllIngredient } from "@/queries";
import { SyncOutlined } from "@ant-design/icons";
import { Button, TableParams, useDebounce } from "@/modules/web-feature-shared";
import { Input } from "antd";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  ingredientParams: TableParams;
  setIngredientParams: Dispatch<SetStateAction<TableParams>>;
};
export const Toolbar: React.FC<Props> = ({
  ingredientParams,
  setIngredientParams,
}) => {
  const { handleInvalidateIngredient } = useGetAllIngredient();

  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setIngredientParams({
      ...ingredientParams,
      search: debouncedSearch,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <Flex justify="space-between">
      <Input
        placeholder="Search ingredient by name"
        className="w-96"
        onChange={handleSearch}
      />
      <Flex justify="end" gap={8}>
        <Tooltip title="Refresh">
          <Button
            type="default"
            icon={<SyncOutlined />}
            onClick={handleInvalidateIngredient}
          />
        </Tooltip>
        <CreateEditIngredient content={<Button>Create Ingredient</Button>} />
      </Flex>
    </Flex>
  );
};
