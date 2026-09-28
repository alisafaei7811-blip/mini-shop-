export default function InputFilter() {
  return (
    <div className="flex flex-wrap gap-4 mt-10">

      <select className="rounded-xl border text-white bg-black px-4 py-3">
        <option value="">Sort by</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="name">Name</option>
      </select>

      <select className="rounded-xl border px-4 py-3 text-white bg-black">
        <option value="">Price</option>
        <option value="0-50">$0 - $50</option>
        <option value="50-100">$50 - $100</option>
        <option value="100+">$100+</option>
      </select>
    </div>
  );
}
