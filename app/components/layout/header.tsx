"use client";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";
import { TiDelete } from "react-icons/ti";

import Link from "next/link";
import { MdOutlineAddAlert } from "react-icons/md";
import { useState } from "react";

export default function Header() {
  const [modale, setModale] = useState(false);
  return (
    <header className="m-auto mt-5 flex w-[90%] items-center justify-between rounded-3xl border-2 p-5">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        MiniShop
      </Link>

      {/* Navbar */}
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-gray-500">
          Home
        </Link>

        <Link href="/Products" className="hover:text-gray-500">
          Products
        </Link>

        <Link href="/products/sale" className="hover:text-gray-500">
          card
        </Link>
      </nav>

      {/* Search + Icons */}
      <section className="flex items-center gap-5">
        <button onClick={() => setModale(!modale)}>
          <SlMagnifier size={25}></SlMagnifier>
        </button>
        {modale && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/65">
            <button className="absolute top-5 right-5 hover:text-red-700" onClick={()=>setModale(false)}>
              <TiDelete size={30}></TiDelete>
            </button>
            <input
              type="text"
              placeholder="Search your item"
              className="rounded-lg bg-white py-4 px-8 text-2xl text-black outline-none"
            />
          </div>
        )}

        <Link href="/card">
          <FaShoppingCart size={25} />
        </Link>

        <AiFillLike size={25} />

        <Link href="/login">
          <FaUserCircle size={25} />
        </Link>
      </section>
    </header>
  );
}
