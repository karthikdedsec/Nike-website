function Select({ title, options }) {
  return (
    <div>
      <select className="w-24" defaultValue={""}>
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
export default Select;
