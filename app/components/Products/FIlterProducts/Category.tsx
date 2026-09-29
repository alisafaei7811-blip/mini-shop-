"use client";

import { useRouter } from "next/navigation";

export default function FilterCategory() {
  const route = useRouter();

  const categories = [
    { label: "Beauty", value: "beauty" },
    { label: "Fragrances", value: "fragrances" },
    { label: "Furniture", value: "furniture" },
    { label: "Groceries", value: "groceries" },
    { label: "Home Decoration", value: "home-decoration" },
    { label: "Kitchen Accessories", value: "kitchen-accessories" },
    { label: "Laptops", value: "laptops" },
    { label: "Men's Shirts", value: "mens-shirts" },
    { label: "Men's Shoes", value: "mens-shoes" },
    { label: "Men's Watches", value: "mens-watches" },
    { label: "Mobile Accessories", value: "mobile-accessories" },
    { label: "Motorcycle", value: "motorcycle" },
    { label: "Smartphones", value: "smartphones" },
    { label: "Tablets", value: "tablets" },
  ];

  return (
    <div className="mt-30 flex justify-around items-center gap-5 border-2 rounded-2xl p-3">
      {categories.map((item) => (
        <div key={item.value} >
          <button
            onClick={() => {
              route.push(`/products?category=${item.value}`);
            }}
          >
            {item.label}
          </button>
          
        </div>
      ))}
    </div>
  );
}
