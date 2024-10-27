import type { MenuProps } from "antd";
import { Paths } from "@/constants";
import { FaUserFriends } from "react-icons/fa";
import { GiFruitBowl, GiTomato } from "react-icons/gi";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  {
    key: Paths.USERS,
    label: "Users",
    icon: <FaUserFriends size={24} />,
  },
  {
    key: Paths.INGREDIENTS,
    label: "Ingredients",
    icon: <GiFruitBowl size={24} />,
  },
  {
    key: Paths.RECIPES,
    label: "Recipes",
    icon: <GiTomato size={24} />,
  },
];
