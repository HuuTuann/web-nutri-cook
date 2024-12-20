import { Layout } from "antd";
import { useEffect, useState } from "react";
import "./styles.scss";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { usePathname, useRouter } from "next/navigation";
import { Paths } from "@/constants";
import { removeAdminCookie } from "@/modules/web-feature-shared";
import { useToastify } from "@/hooks/useToastify";

type LayoutsProps = {
  children: React.ReactNode;
};

export const Layouts = ({ children }: LayoutsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { toastify } = useToastify();

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

  const handleLogout = () => {
    removeAdminCookie();
    toastify.success("Logout success");
    router.push("/login");
  };

  return (
    <Layout>
      <Sider collapsed={collapsed}></Sider>
      <Layout style={{ height: "100vh" }}>
        <Header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          heading={heading}
          handleLogout={handleLogout}
        />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
