import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

function Cartitem({ item: { product, qty, size } }) {
  return (
    <div className="cursor-pointer hover:bg-[#DAFFA2] space-y-2 p-2  bg-gray-50">
      <div className="flex  space-x-2">
        {/* image */}
        <img className="h-24" src={product.src} />
        <div className="space-y-3">
          {/* title & description*/}
          <div className="font-bold">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* price */}
        <div className="font-bold">{product.price}$</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-5">
          <div>
            <div className="font-bold">SIZE</div>
            <Select
              defaultValue={size}
              title=""
              options={SIZES}
              className={"w-16 p-1 pl-2"}
            />
          </div>
          <div>
            <div className="font-bold">QTY</div>
            <Select
              defaultValue={qty}
              title=""
              options={QTY}
              className={"w-16 p-1 pl-2"}
            />
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
