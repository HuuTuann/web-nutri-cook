import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistMonoThin = localFont({
  src: "./fonts/Roboto-Thin.woff",
  variable: "--font-geist-mono-thin",
  weight: "100",
});

const geistMonoRegular = localFont({
  src: "./fonts/Roboto-Regular.woff",
  variable: "--font-geist-mono-regular",
  weight: "400",
});

const geistMonoMedium = localFont({
  src: "./fonts/Roboto-Medium.woff",
  variable: "--font-geist-mono-medium",
  weight: "500",
});

const geistMonoBold = localFont({
  src: "./fonts/Roboto-Bold.woff",
  variable: "--font-geist-mono-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Nutri Cook",
  description: "Nutri Cook is a recipe sharing platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = `${geistMonoThin.variable} ${geistMonoRegular.variable} ${geistMonoMedium.variable} ${geistMonoBold.variable}`;

  return (
    <html lang="en">
      <body
        className={cn(fontVariables, "h-screen max-h-screen overflow-y-scroll")}
      >
        {children}
      </body>
    </html>
  );
}
