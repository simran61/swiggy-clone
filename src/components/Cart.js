import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length > 0 && (
        <>
          <h1 className="text-2xl font-bold">Cart</h1>
          <div className="w-6/12 m-auto">
            <button
              className="px-4 py-2 bg-red-200 rounded-lg m-4"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <ItemList items={cartItems} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
