import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { BiMoon, BiSun } from "react-icons/bi";

import Cart from "./components/Cart";

const FAKE_CART_ITEM = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

function App() {
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  return (
    <div className="animate-fadeIn p-7 xl:px-24">
      <Nav onClickSidebar={() => setSidebar(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar isOpen={sidebar} onClickClose={() => setSidebar(!sidebar)}>
        <Cart cartItems={FAKE_CART_ITEM} />
      </Sidebar>
      <div className="fixed   bottom-4 right-4 ">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 text-white px-4 py-2 rounded-full dark:bg-white dark:text-black"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
