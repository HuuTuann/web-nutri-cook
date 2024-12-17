import { Layout } from "antd";
import { useEffect, useState } from "react";
import "./styles.scss";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { usePathname } from "next/navigation";
import { Paths } from "@/constants";

type LayoutsProps = {
  children: React.ReactNode;
};

export const Layouts = ({ children }: LayoutsProps) => {
  const pathname = usePathname();

  const { Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (pathname.startsWith(Paths.USERS)) {
      setHeading("Users");
    } else if (pathname.startsWith(Paths.INGREDIENTS)) {
      setHeading("Ingredients");
    } else if (pathname.startsWith(Paths.RECIPES_DETAIL)) {
      setHeading("Recipes Detail");
    } else {
      setHeading("Recipes");
    }
  }, [pathname]);

  return (
    <Layout>
      <Sider collapsed={collapsed}></Sider>
      <Layout style={{ height: "100vh" }}>
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          heading={heading}
        />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
