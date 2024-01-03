import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const routes = ["Home", "About", "Services", "Pricing", "Contact"];

function Nav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center">
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
        className={`${mobileMenu ? "" : "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg font-semibold border border-gray-100 lg:border-none lg:bg-transparent rounded-lg p-4">
          {routes.map((route, i) => (
            <li
              className={`py-2 px-3 ${
                i === 0
                  ? "bg-blue-500 rounded lg:bg-transparent lg:text-blue-500 text-white hover:cursor-pointer"
                  : "hover:bg-gray-100 hover:cursor-pointer rounded"
              }`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* cart button<TbShoppingBag /> */}
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="flex flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
