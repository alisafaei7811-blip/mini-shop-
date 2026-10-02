import FilterCategory from "@/app/components/products/FIlterProducts/Category";
import InputFilter from "@/app/components/products/FIlterProducts/inputFilter";
import Products from "@/app/components/products/products";


export default function ProductsPage() {
  return (
    <div>
      <FilterCategory></FilterCategory>
      <InputFilter></InputFilter>
      <Products></Products>
    </div>
  );
}
