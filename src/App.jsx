import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalSection";
import ShoeDetail from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";

function App() {
  return (
    <div className="animate-fadeIn p-7 xl:px-24">
      <Nav />
      <ShoeDetail />
      <NewArrivalSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
