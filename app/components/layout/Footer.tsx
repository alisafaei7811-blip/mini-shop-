import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
  
  export default function Footer() {
    return (
      <footer className="mt-16 border-t bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
  
            {/* Brand */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">
                MiniShop
              </h2>
  
              <p className="max-w-xs text-sm leading-6 text-gray-400">
                Discover quality products at great prices.
                Simple, fast, and reliable shopping.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Quick Links
              </h3>
  
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a href="/s" className="transition hover:text-white">
                  Home
                </a>
  
                <a
                  href="/products"
                  className="transition hover:text-white"
                >
                  Products
                </a>
  
                <a
                  href="/cart"
                  className="transition hover:text-white"
                >
                  Cart
                </a>
  
                <a
                  href="/login"
                  className="transition hover:text-white"
                >
                  Login
                </a>
              </div>
            </div>
  
            {/* Categories */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Categories
              </h3>
  
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a
                  href="/products?category=beauty"
                  className="transition hover:text-white"
                >
                  Beauty
                </a>
  
                <a
                  href="/products?category=fragrances"
                  className="transition hover:text-white"
                >
                  Fragrances
                </a>
  
                <a
                  href="/products?category=furniture"
                  className="transition hover:text-white"
                >
                  Furniture
                </a>
  
                <a
                  href="/products?category=groceries"
                  className="transition hover:text-white"
                >
                  Groceries
                </a>
              </div>
            </div>
  
            {/* Social */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">
                Follow Us
              </h3>
  
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:bg-white hover:text-black"
                >
                  <FaFacebookF />
                </a>
  
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 transition hover:bg-white hover:text-black"
                >
                  <FaInstagram />
                </a>
  
                <a
                  href="#"
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