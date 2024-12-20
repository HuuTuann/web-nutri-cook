import { Button, Flex, Layout, Tooltip } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { LogoutOutlined } from "@ant-design/icons";
import "../styles.scss";

type HeaderProps = {
  heading: string;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  handleLogout: () => void;
};

export const Header = ({
  collapsed,
  setCollapsed,
  heading,
  handleLogout,
}: HeaderProps) => {
  const { Header: HeaderCore } = Layout;

  return (
    <HeaderCore className="header">
      <Flex justify="space-between" align="center" className="w-full">
        <Flex>
          <Button
            type="text"
            icon={collapsed ? <FaAngleRight /> : <FaAngleLeft />}
            onClick={() => setCollapsed(!collapsed)}
            className="collapse-button"
            size="middle"
          />
          <h1 className="heading">{heading}</h1>
        </Flex>
        <Tooltip title="Log Out">
          <Button
            type="text"
            size="middle"
            className="log-out-button"
            icon={<LogoutOutlined size={20} />}
            onClick={handleLogout}
          />
        </Tooltip>
      </Flex>
    </HeaderCore>
  );
};
