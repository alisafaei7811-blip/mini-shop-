import { FaSpa, FaSprayCan, FaCouch, FaShoppingBasket } from "react-icons/fa";
export const categories = [
  {
    title: "Beauty",
    description:
      "Discover skincare, makeup, and personal care products for your daily routine.",
    icon: FaSpa,
    href: "/products?category=beauty",
  },
  {
    title: "Fragrances",
    description:
      "Explore perfumes and fragrances with different styles and refreshing scents.",
    icon: FaSprayCan,
    href: "/products?category=fragrances",
  },
  {
    title: "Furniture",
    description:
      "Find modern and comfortable furniture to make your home more beautiful.",
    icon: FaCouch,
    href: "/products?category=furniture",
  },
  {
    title: "Groceries",
    description:
      "Shop everyday grocery essentials and useful products for your home.",
    icon: FaShoppingBasket,
    href: "/products?category=groceries",
  },
];
