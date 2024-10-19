"use client";

import React from "react";
import { Layouts } from "@/layouts";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layouts>{children}</Layouts>;
}
