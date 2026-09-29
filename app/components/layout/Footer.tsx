import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block text-2xl font-bold">
              MiniShop
            </Link>

            <p className="max-w-xs text-sm leading-6 text-gray-400">
              Discover quality products at great prices. Simple, fast, and
              reliable shopping.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>

              <Link href="/products" className="transition hover:text-white">
                Products
              </Link>

              <Link href="/cart" className="transition hover:text-white">
                Cart
              </Link>

              <Link href="/login" className="transition hover:text-white">
                Login
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Categories</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link
                href="/products?category=beauty"
                className="transition hover:text-white"
              >
                Beauty
              </Link>

              <Link
                href="/products?category=fragrances"
                className="transition hover:text-white"
              >
                Fragrances
              </Link>

              <Link
                href="/products?category=furniture"
                className="transition hover:text-white"
              >
                Furniture
              </Link>

              <Link
                href="/products?category=groceries"
                className="transition hover:text-white"
              >
                Groceries
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:bg-white hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:bg-white hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:bg-white hover:text-black"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2026 MiniShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
