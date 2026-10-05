"use client";

import CartItem from "@/app/components/cardItems";
import { UseContext } from "@/app/context/UseContext";
import { useContext } from "react";

export default function ProductCards() {
  const context = useContext(UseContext);

  if (!context) return null;

  const { state } = context;

  return (
    <div>
      {state.items.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
}