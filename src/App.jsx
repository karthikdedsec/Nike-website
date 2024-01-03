import { useState } from "react";
import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="animate-fadeIn p-7 xl:px-24">
      <Nav onClickSidebar={() => setSidebar(true)} />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar isOpen={sidebar} onClickClose={() => setSidebar(!sidebar)}>
        Hi
      </Sidebar>
    </div>
  );
}

export default App;
