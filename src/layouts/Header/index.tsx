import { Button, Layout } from "antd";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "../styles.scss";

type HeaderProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  heading: string;
};

export const Header = ({ collapsed, setCollapsed, heading }: HeaderProps) => {
  const { Header: HeaderCore } = Layout;

  return (
    <HeaderCore className="header">
      <Button
        type="text"
        icon={collapsed ? <FaAngleRight /> : <FaAngleLeft />}
        onClick={() => setCollapsed(!collapsed)}
        size="middle"
      />
      <h1 className="heading">{heading}</h1>
    </HeaderCore>
  );
};
