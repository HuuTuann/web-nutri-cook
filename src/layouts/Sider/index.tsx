import { Flex, Layout, Menu } from "antd";
import "../styles.scss";
import { menuItems } from "./helpers";
import { usePathname, useRouter } from "next/navigation";
import { FaBowlFood } from "react-icons/fa6";

export const Sider = ({ collapsed }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const { Sider: SiderCore } = Layout;

  return (
    <SiderCore collapsible trigger={null} collapsed={collapsed} width={256}>
      <Flex
        justify="center"
        align="center"
        gap={8}
        style={{
          height: 64,
        }}
      >
        <FaBowlFood size={32} color="var(--color-primary)" />
        {!collapsed && <h1 className="logo">Nutri Cook</h1>}
      </Flex>
      <Menu
        onClick={(e) => router.push(e.key)}
        selectedKeys={[pathname]}
        mode="inline"
        items={menuItems}
      />
    </SiderCore>
  );
};

type Props = {
  collapsed: boolean;
};
