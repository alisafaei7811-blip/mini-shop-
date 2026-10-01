import Image from "next/image";
import Link from "next/link";
import img from "../../img/Hero.png";
export default function Hero() {
  return (
    <div className="w-[80%] m-44">
      <Link href="/products">
        <Image src={img} alt="Hero"></Image>
      </Link>
    </div>
  );
}
