import Cartitem from "./Cartitem";

function Cart({ cartItems }) {
  return (
    <div>
      <h2 className="dark:text-white mb-5 text-4xl font-bold">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <Cartitem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
