"use client"

import useProduct from "@/app/hook/useProduct";
import ProductCard from "../productCard";

export default function Products() {
  const { data, isLoading, error } = useProduct({ limit: 4 });
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="flex justify-around items-center w-[88%] m-auto">
      {data?.products.map((item) => (
        <div key={item.id}>
          <ProductCard  item={item} ></ProductCard>
        </div>
      ))}
    </div>
  );
}
