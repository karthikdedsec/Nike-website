function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div
      className={`p-5 fixed top-0 right-0 h-full w-full shadow-lg md:w-[50%] lg:w-[35%] bg-white z-50 transition transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={onClickClose}
        className="absolute right-4 top-4 p-2 text-black font-bold"
      >
        x
      </button>
      {children}
      <div></div>
    </div>
  );
}
export default Sidebar;
