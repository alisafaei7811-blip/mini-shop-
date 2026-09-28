import { useRouter, useSearchParams } from "next/navigation";

export default function FilterCategory() {
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
  const route = useRouter();
  const searchParams = useSearchParams;

  return (
    <div className="flex justify-around items-center flex-wrap mt-30 gap-5">
      {categories.map((item) => (
        <div key={item.value}>
          <button className=" border-2 rounded-2xl p-3">{item.label}</button>
        </div>
      ))}
    </div>
  );
}
