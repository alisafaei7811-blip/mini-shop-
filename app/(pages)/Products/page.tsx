import FilterCategory from "@/app/components/Products/FIlterProducts/Category";
import InputFilter from "@/app/components/Products/FIlterProducts/inputFilter";
import Products from "@/app/components/Products/products";

export default function Produts() {
  return (
    <div>
      <FilterCategory></FilterCategory>
      <InputFilter></InputFilter>
      <Products></Products>
    </div>
  );
}
