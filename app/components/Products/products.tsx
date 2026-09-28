"use client";
import useProduct from "@/app/hook/useProduct";
import ProductCard from "../productCard";

export default function Products() {
  const { data, isLoading, error } = useProduct({ limit: 20 });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className=" flex justify-around items-center flex-wrap ml-auto mt-10 gap-5">
      {data?.products.map((item) => (
        <ProductCard item={item} key={item.id}></ProductCard>
      ))}
    </div>
  );
}
