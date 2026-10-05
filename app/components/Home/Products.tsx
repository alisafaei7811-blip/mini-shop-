"use client";

import useProduct from "@/app/hook/useProduct";
import ProductCard from "../productCard";

export default function Products() {
  const { data, isLoading, error } = useProduct({ limit: 4, skip: 0 });
  if (isLoading)
    return <p className="text-center text-2xl font-bold mt-5">loading...</p>;
  if (error)
    return (
      <p className="text-center text-2xl font-bold mt-5">{error.message}</p>
    );

  return (
    <div className="flex justify-around items-center w-[88%] mt-20 m-auto">
      {data?.products.map((item) => (
        <div key={item.id}>
          <ProductCard item={item}></ProductCard>
        </div>
      ))}
    </div>
  );
}
