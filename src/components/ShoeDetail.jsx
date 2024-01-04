import nike1 from "../assets/n1-min.png";
import Select from "./Select";
import { QTY } from "../constant";
import { SIZES } from "../constant";
import { useState } from "react";

function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({ qty: null, size: null });
  return (
    <div className="mt-4 flex flex-col lg:flex-row lg:flex-row-reverse space-y-4 dark:text-white">
      {/* shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img className="animate-float" src={shoe.src} alt="" />
        </div>
      </div>
      {/* shoe description */}
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        <div className="flex space-x-5">
          <div className="text-3xl font-extrabold md:text-6xl">
            {shoe.price} $
          </div>
          <Select
            onChange={(qty) => setForm({ ...form, qty })}
            title={"QTY"}
            options={QTY}
          />
          <Select
            onChange={(size) => setForm({ ...form, size })}
            title={"SIZE"}
            options={SIZES}
          />
        </div>

        {/* addto bag button */}
        <div className="space-x-8">
          <button
            onClick={() => onClickAdd(shoe, form.qty, form.size)}
            className="btn-press-anim h-14 w-44 dark:bg-white dark:text-black bg-black text-white hover:bg-gray-900 active:bg-gray-700"
          >
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            view details
          </a>
        </div>
      </div>
    </div>
  );
}
export default ShoeDetail;
