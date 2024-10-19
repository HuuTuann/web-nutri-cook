import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import { DateFormatWithYear, DateFormat } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(value: string, format = DateFormatWithYear) {
  if (!value) return "--";
  return dayjs(value).format(format);
}

export function formatAndExtraDate(value: string, format = DateFormat) {
  if (!value) return "--";
  const extraDate = value.split("T")[0];

  return dayjs(extraDate).format(format);
}

export function formatValueOrNull(value: string | number) {
  if (!value) return "--";
  return value;
}

export function formatCurrency(value: number) {
  if (!value) return "--";
  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
}

export function formatNumberWithCommas(value: number) {
  return value?.toLocaleString("vi-VN");
}

export function parseNumberFromCommas(value: string): number {
  return Number(value?.replace(/\./g, ""));
}

export function capitalizeFirstLetter(value: string) {
  if (!value) return "--";
  return value.charAt(0).toUpperCase() + value.slice(1);
}
