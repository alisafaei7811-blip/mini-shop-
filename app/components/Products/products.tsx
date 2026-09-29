"use client";

import { useSearchParams } from "next/navigation";
import useProduct from "@/app/hook/useProduct";
import ProductCard from "../productCard";

export default function Products() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const { data, isLoading, error } = useProduct({
    limit: 10,
    category: category ?? "",
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex flex-wrap items-center justify-around gap-5 ml-auto mt-10">
      {data?.products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
}
