import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const routes = ["Home", "About", "Services", "Pricing", "Contact"];

function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center relative z-10">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* burger button */}
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className="lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* menu list */}
      <div
        className={`${mobileMenu ? "" : "hidden"} w-full lg:w-auto lg:block `}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg font-semibold border border-gray-100 lg:border-none lg:bg-transparent rounded-lg p-4">
          {routes.map((route, i) => (
            <li
              className={`hover:text-blue-500 py-2 px-3 lg:hover:bg-transparent ${
                i === 0
                  ? "bg-blue-500 lg:hover:text-blue-700 rounded lg:bg-transparent lg:text-blue-500 text-white hover:cursor-pointer hover:text-white"
                  : "hover:bg-gray-100 hover:cursor-pointer rounded"
              } ${(i === 3 || i === 4) && "lg:text-white "}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* cart button<TbShoppingBag /> */}
      <div className="btn-press-anim fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="cursor-pointer flex flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
