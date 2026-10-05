import FilterCategory from "@/app/components/products/FIlterProducts/Category";
import InputFilter from "@/app/components/products/FIlterProducts/inputFilter";
import ProductItems from "@/app/components/products/productsItems";

export default function Products() {
  return (
    <div>
      <FilterCategory></FilterCategory>
      <InputFilter></InputFilter>
      <ProductItems></ProductItems>
    </div>
  );
}
