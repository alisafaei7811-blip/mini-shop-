import Image from "next/image";
import Link from "next/link";
import img from "../../img/Hero.png";
export default function Hero() {
  return (
    <div className="w-[80%] m-auto mt-20">
      <Link href="/Products">
        <Image src={img} alt="Hero" draggable="false"></Image>
      </Link>
    </div>
  );
}
