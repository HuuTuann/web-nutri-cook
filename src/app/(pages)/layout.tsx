"use client";

import React from "react";
import { queryClient } from "@/modules/web-feature-shared";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastifyProvider } from "@/hooks/useToastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_ENVIRONMENT === "development"}
      />
      <ToastifyProvider>{children}</ToastifyProvider>
    </QueryClientProvider>
  );
}
