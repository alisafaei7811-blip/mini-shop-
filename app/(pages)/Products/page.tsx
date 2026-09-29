import Products from "@/app/components/Home/Products";
import FilterCategory from "@/app/components/products/FIlterProducts/Category";
import InputFilter from "@/app/components/products/FIlterProducts/inputFilter";


export default function ProductsPage() {
  return (
    <div>
      <FilterCategory></FilterCategory>
      <InputFilter></InputFilter>
      <Products></Products>
    </div>
  );
}
