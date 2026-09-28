"use client"

import { useQuery } from "@tanstack/react-query";
import Response from "../api/Response";
type UseProductOptions = {
  limit: number;
};
export default function useProduct({ limit }: UseProductOptions) {
  return useQuery({
    queryKey: ["products", limit],
    queryFn: () => Response(limit),
  });
}
