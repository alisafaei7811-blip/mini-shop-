import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-2xl border  shadow-sm w-[300px] transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex h-56 items-center justify-center">
        <Link href={`/products/productCard/${item.id}`}>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={200}
            draggable="false"
            className="h-full w-full object-contain p-5 transition duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="space-y-3 p-5">
        <h2 className="line-clamp-2 min-h-12 text-lg font-semibold ">
          {item.title}
        </h2>

        <p className="text-xl font-bold ">${item.price}</p>

        <button className="w-full rounded-xl bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800 active:scale-95">
          BUY
        </button>
      </div>
    </div>
  );
}
