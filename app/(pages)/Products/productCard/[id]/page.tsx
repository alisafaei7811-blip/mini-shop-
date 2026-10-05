"use client";
import useProduct from "@/app/hook/useProduct";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
export default function ProductCard(
  params: Promise<{
    params: {
      id: string;
    };
  }>,
) {
  const { data, isLoading, error } = useProduct({ limit: 1, skip: 0 });
  if (isLoading)
    return <p className="text-center text-2xl font-bold mt-10">loading...</p>;
  if (error)
    return (
      <p className="text-center text-2xl font-bold mt-10">{error.message}</p>
    );
  return (
    <div>
      {data?.products.map((item) => (
        <div
          key={item.id}
          className="flex w-[50%] m-auto justify-around items-center h-screen"
        >
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={1000}
            height={1000}
          ></Image>
          <div>
            <h1 className="text-4xl">{item.title}</h1>
            <h2 className=" py-3">{item.price}</h2>
            <p>{item.description}</p>
            <div className="flex justify-center items-center mt-10 gap-5">
              <button className="w-full bg-black py-3 hover:bg-gray-700">
                BUY
              </button>
              <button className="p-3 bg-black">
                <AiFillLike size={28}></AiFillLike>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
