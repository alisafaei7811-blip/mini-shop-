"use client";

import { useSearchParams } from "next/navigation";
import useProduct from "@/app/hook/useProduct";
import ProductCard from "../productCard";
import { useEffect, useState } from "react";
import { Product } from "@/app/getData/Response";

export default function ProductItems() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [skip, setSkip] = useState(0);

  const [products, setProducts] = useState<Product[]>([]);

  const { data, isLoading, error, isFetching } = useProduct({
    skip,
    limit: 20,
    category: category ?? "",
  });

  useEffect(() => {
    if (data?.products) {
      setProducts((prev) => {
        const merged = [...prev, ...data.products];

        return merged.filter(
          (item, index, self) =>
            index === self.findIndex((p) => p.id === item.id),
        );
      });
    }
  }, [data]);

  if (isLoading && products.length === 0)
    return <p className="text-center text-2xl font-bold">Loading...</p>;

  if (error)
    return <p className="text-center text-2xl font-bold">{error.message}</p>;

  return (
    <div className="flex justify-around items-center w-[88%] mt-20 gap-5 m-auto flex-wrap">
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
      <button
        onClick={() => {
          setSkip((prev) => prev + 20);
        }}
        className="block mx-auto my-10 px-6 py-3 bg-black text-white rounded"
      >
        new products
      </button>
    </div>
  );
}
