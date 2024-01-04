import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

function Select({ title, options, className, defaultValue, onChange }) {
  return (
    <div className="relative dark:text-black">
      <select
        onChange={(e) => onChange(e.target.value)}
        className={twMerge(
          `w-24 bg-white appearance-none border border-gray-300 p-4 ${className} `
        )}
        defaultValue={defaultValue || ""}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute  inset-y-0 right-0 flex-center pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
export default Select;
