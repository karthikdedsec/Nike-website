import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import Cartitem from "./components/Cartitem";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="animate-fadeIn p-7 xl:px-24">
      <Nav onClickSidebar={() => setSidebar(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar isOpen={sidebar} onClickClose={() => setSidebar(!sidebar)}>
        <h2 className="text-2xl font-bold mb-10">Cart</h2>
        <Cartitem item={SHOE_LIST[0]} />
        <Cartitem item={SHOE_LIST[1]} />
        <Cartitem item={SHOE_LIST[2]} />
      </Sidebar>
    </div>
  );
}

export default App;
