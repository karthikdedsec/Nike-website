import { IoIosArrowDown } from "react-icons/io";

function Select({ title, options }) {
  return (
    <div className="relative">
      <select
        className="w-24 bg-white appearance-none border border-gray-300 p-4"
        defaultValue={""}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="absolute  inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
export default Select;
