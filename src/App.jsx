import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";

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

  return (
    <div className="animate-fadeIn p-7 xl:px-24">
      <Nav onClickSidebar={() => setSidebar(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar isOpen={sidebar} onClickClose={() => setSidebar(!sidebar)}>
        <Cart cartItems={FAKE_CART_ITEM} />
      </Sidebar>
    </div>
  );
}

export default App;
