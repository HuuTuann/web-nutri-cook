import React from "react";
import { Flex } from "antd";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex align="stretch" className="h-screen bg-bgSecondary">
      <Flex className="flex max-w-[50%] flex-grow items-center justify-center bg-[#0361d0]">
        <Flex className="flex max-w-[80%] flex-col text-white">
          <h1 className="relative text-wrap text-[42px] font-extrabold before:absolute before:left-0 before:top-[-2px] before:h-1 before:w-44 before:rounded-xl before:bg-[#84BBFF] before:content-['']">
            Welcome to Nutri Cook!
          </h1>
          <p className="mt-2 text-lg">
            Ready to start your journey toward better health and fitness?
          </p>
        </Flex>
      </Flex>
      <Flex className="flex flex-grow flex-col items-center justify-center gap-4 bg-[#eef6ff]">
        <Flex className="rounded-xl bg-white px-7 py-9">{children}</Flex>
      </Flex>
    </Flex>
  );
}
