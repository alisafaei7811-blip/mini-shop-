"use client"
import useProduct from "@/app/hook/useProduct";
import Image from "next/image";

export default function ProductCard(
  params: Promise<{
    params: {
      id: string;
    };
  }>,
) {
  const { data, isLoading, error } = useProduct({ limit: 1 });
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      {data?.products.map((item) => (
        <div key={item.id} className="flex w-[50%] m-auto justify-around items-center h-screen">
            <Image src={item.thumbnail} alt={item.title} width={1000} height={1000}></Image>
            <div>
                <h1 className="text-4xl">{item.title}</h1>
                <h2 className="flex justify-end py-3">{item.price}</h2>
                <p>{item.description}</p>
                <button className="mt-10 flex justify-center items-center w-full bg-black py-3 rounded-2xl hover:bg-gray-700">BUY</button>
            </div>
        </div>
        
      ))}
    </div>
  );
}
