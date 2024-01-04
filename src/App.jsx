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
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[1]);
  const [cartItem, setCartItem] = useState([]);
  console.log(cartItem);

  sidebar
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItem];
      const existingItemIndex = cartItem.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }
      setCartItem(updatedCartItems);
    }
  };

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
    <div className="animate-fadeIn p-7 xl:px-24 dark:bg-night-50">
      <Nav onClickSidebar={() => setSidebar(true)} />
      <ShoeDetail onClickAdd={addToCart} shoe={currentShoe} />
      <NewArrivalSection onClickCard={setCurrentShoe} items={SHOE_LIST} />
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
