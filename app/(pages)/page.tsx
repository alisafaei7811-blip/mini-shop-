import Category from "../components/Home/Category";
import Features from "../components/Home/features";
import Hero from "../components/Home/Hero";
import Products from "../components/Home/Products";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Products></Products>
      <Category></Category>
      <Features></Features>
    </div>
  );
}
