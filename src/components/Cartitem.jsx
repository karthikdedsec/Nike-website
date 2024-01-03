import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

function Cartitem({ item }) {
  return (
    <div className="cursor-pointer hover:bg-[#DAFFA2] space-y-2 p-2  bg-gray-50">
      <div className="flex  space-x-2">
        {/* image */}
        <img className="h-24" src={item.src} />
        <div className="space-y-3">
          {/* title & description*/}
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </div>
        {/* price */}
        <div className="font-bold">{item.price}$</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-5">
          <div>
            <div className="font-bold">SIZE</div>
            <Select title="" options={SIZES} />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select title="" options={QTY} />
          </div>
        </div>
        <button className="pl-2">
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}
export default Cartitem;
