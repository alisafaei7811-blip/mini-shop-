import { FaShoppingCart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
export default function Header() {
    return (
        <header className="fixed top-2 left-1/2 -translate-x-1/2 w-[40%] p-5 rounded-3xl flex justify-around items-center border-2">
          <section>
            <input
              type="text"
              placeholder="search your item"
              className="p-3"
            />
          </section>
      
          <section className="flex gap-5">
            <FaShoppingCart size={30} />
            <AiFillLike size={30} />
            <FaUserCircle size={30} />
          </section>
        </header>
      );
      
}
