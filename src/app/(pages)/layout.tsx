"use client";

import React from "react";
import { queryClient } from "@/configs/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastifyProvider } from "@/hooks/useToastify";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastifyProvider>{children}</ToastifyProvider>
    </QueryClientProvider>
  );
}
