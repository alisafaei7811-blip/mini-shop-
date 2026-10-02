"use client";

import { useSearchParams } from "next/navigation";
import useProduct from "@/app/hook/useProduct";
import ProductCard from "../productCard";

export default function Products() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const { data, isLoading, error } = useProduct({
    limit: 100,
    category: category ?? "",
  });

  if (isLoading)
    return <p className="text-center text-2xl font-bold">Loading...</p>;

  if (error)
    return <p className="text-center text-2xl font-bold">{error.message}</p>;

  return (
    <div className="flex justify-around items-center w-[88%] mt-20 gap-5 m-auto flex-wrap">
      {data?.products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}
