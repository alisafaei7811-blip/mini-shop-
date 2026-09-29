import { useQuery } from "@tanstack/react-query";
import Response from "../api/Response";

type UseProductOptions = {
  limit: number;
  category?: string;
};

export default function useProduct({ limit, category }: UseProductOptions) {
  return useQuery({
    queryKey: ["products", limit, category],

    queryFn: () => Response(limit, category),
  });
}
