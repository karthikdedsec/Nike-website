function Card({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className={`${item.className} shadow-lg max-w-xl cursor-pointer transform transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img className="absolute top-5 left-[40%] h-40 w-56" src={item.src} />
    </div>
  );
}
export default Card;
