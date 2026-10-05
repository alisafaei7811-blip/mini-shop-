"use client";

import Image from "next/image";
import { useContext } from "react";
import { UseContext } from "@/app/context/UseContext";
import { Product } from "../getData/Response";



export default function CartItem({ item }) {
  const { dispatch } = useContext(UseContext)!;

  return (
    <div className="group flex items-center gap-6 border-b border-gray-200 p-5 transition hover:bg-gray-50">
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-100 p-3">
        <Image
          src={item.thumbnail}
          alt={item.title}
          width={100}
          height={100}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {item.title}
        </h2>

        <p className="text-lg font-bold text-gray-900">${item.price}</p>

        <p className="text-sm text-gray-500">
          Quantity:
          <span className="font-semibold text-gray-800">{item.quantity}</span>
        </p>
      </div>

      <button
        onClick={() =>
          dispatch({
            type: "delete",
            payload: item.id,
          })
        }
        className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white active:scale-95"
      >
        Delete
      </button>
    </div>
  );
}
