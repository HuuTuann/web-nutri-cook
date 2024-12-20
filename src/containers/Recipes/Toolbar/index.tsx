import { Flex, Input, Tooltip } from "antd";
import { CreateEditRecipe } from "../CreateEditRecipe";
import {
  Button,
  Select,
  TableParams,
  useDebounce,
} from "@/modules/web-feature-shared";
import { SyncOutlined } from "@ant-design/icons";
import { useGetAllRecipe } from "@/queries";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { nutritionalQuantityOptions } from "../CreateEditRecipe/helpers";

type Props = {
  recipeParams: TableParams;
  setRecipeParams: Dispatch<SetStateAction<TableParams>>;
};

export const Toolbar: React.FC<Props> = ({ recipeParams, setRecipeParams }) => {
  const { handleInvalidateRecipe } = useGetAllRecipe();

  const [search, setSearch] = useState<string>("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setRecipeParams({
      ...recipeParams,
      search: debouncedSearch,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <Flex justify="space-between">
      <Input
        placeholder="Search recipe by name"
        className="w-96"
        onChange={handleSearch}
      />
      <Flex justify="end" gap={8}>
        <Select
          allowClear
          placeholder="Select Nutritional Quantity"
          options={nutritionalQuantityOptions}
          onChange={(value) => {
            setRecipeParams({
              ...recipeParams,
              nutritionalQuality: value as string,
            });
          }}
          className="h-full w-56"
        />

        <Tooltip title="Refresh">
          <Button
            type="default"
            icon={<SyncOutlined />}
            onClick={handleInvalidateRecipe}
          />
        </Tooltip>
        <CreateEditRecipe content={<Button>Create Recipe</Button>} />
      </Flex>
    </Flex>
  );
};
