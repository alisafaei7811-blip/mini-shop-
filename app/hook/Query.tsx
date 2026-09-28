"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
type children = {
  children: ReactNode;
};
const query = new QueryClient();
export default function Query({children}: children) {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
}
