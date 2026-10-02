import { useQuery } from "@tanstack/react-query";
import Response from "../getData/Response";

type UseProductOptions = {
  limit: number;
  skip: number;
  category?: string;
};

export default function useProduct({
  skip,
  limit,
  category,
}: UseProductOptions) {
  return useQuery({
    queryKey: ["products", limit, category, skip],

    queryFn: () => Response(limit, skip, category),
  });
}
