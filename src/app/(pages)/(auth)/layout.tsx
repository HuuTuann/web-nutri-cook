import React from "react";
import { Flex } from "antd";
import Image from "next/image";
import backgroundAuth from "../../../assets/images/background_auth_1.svg";
import logo from "../../../assets/images/logo.svg";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex align="stretch" className="h-screen bg-bgSecondary">
      <Flex className="flex flex-grow items-center justify-center bg-[#eef6ff]">
        <Image src={backgroundAuth} alt="Background Auth" className="w-96" />
      </Flex>
      <Flex className="flex flex-grow flex-col items-center justify-center gap-4">
        <Image src={logo} alt="Logo" />
        {children}
      </Flex>
    </Flex>
  );
}
