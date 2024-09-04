import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "./EmptyCart";
import tick from "../assets/tick.png";
import delivery from "../assets/delivery.png";
import payment from "../assets/payment.png";
import offer from "../assets/offer.png";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (
      acc + item?.card?.info?.price / 100 ||
      item?.card?.info?.defaultPrice / 100 ||
      item?.card?.info?.finalPrice / 100
    );
  }, 0);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {!cartItems.length && <EmptyCart />}
      {cartItems.length > 0 && (
        <div className="bg-[#E9ECEE] p-8">
          <div className="w-4/5 flex justify-center m-auto">
            <div className="mr-5 relative">
              <div className="absolute left-[-13px] top-[35px]  h-60 w-1 border border-t-0 border-r-0 border-b-0 border-black border-dashed"></div>
              <div className="bg-white w-[779px] h-[219px] py-[34px] px-10 mb-5 relative">
                <div className="cart-steps absolute top-[34px] left-[-30px] bg-[#282c3f] h-10 w-10 flex justify-center items-center">
                  <img className="w-5" src={delivery} alt="" />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center mb-7">
                    <h1 className="mr-6 text-[17.2px] font-semibold">
                      Delivery address
                    </h1>
                    <img className="h-5" src={tick} alt="" />
                  </div>
                  <span className="text-sm text-[#ff5200] font-bold">
                    CHANGE
                  </span>
                </div>
                <h2 className="text-[17px] font-medium">Work</h2>
                <p className="text-[#93959F] text-sm w-[480px]">
                  603, 10/4, Moti Tabela, New Harsiddhi Nagar, Indore, Madhya
                  Pradesh 452007, India
                </p>
                <h5 className="text-[13px] font-semibold mt-3">32 MINS</h5>
              </div>
              <div className="bg-white p-9 h-[178px] flex justify-between flex-col relative">
                <div className="cart-steps absolute top-[34px] left-[-30px] bg-[#282c3f] h-10 w-10 flex justify-center items-center">
                  <img className="w-5" src={payment} alt="" />
                </div>
                <h1 className="mr-6 text-[17.2px] font-semibold text-black">
                  Choose payment Method
                </h1>
                <button className="bg-[#60b256] text-white w-full font-semibold h-[50px] flex justify-center items-center">
                  PROCEED TO PAY
                </button>
              </div>
            </div>

            <div className="w-[366px]">
              <div className="bg-white">
                <div className="flex justify-between items-center py-5 px-[30px]">
                  <div className="flex items-center">
                    <img
                      className="h-[50px]"
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_728301.JPG"
                      alt=""
                    />
                    <div className="ml-[14px]">
                      <div>
                        <h1 className="text-[17px] font-semibold">
                          Your Order
                        </h1>
                        <h4 className="text-[13px] text-[#686b78] -mt-1.5 mb-1">
                          Indore
                        </h4>
                      </div>

                      <div className="border-black border h-[0px] w-10"></div>
                    </div>
                  </div>
                  <img
                    onClick={handleClearCart}
                    className="w-4 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1oG15xO3ntA7XZjJvncQSxz4TSEV7aIr9g&s"
                    alt=""
                  />
                </div>
                <div className="h-[460px] overflow-y-scroll pl-[30px]">
                  <div className="pr-[30px]">
                    <CartItem items={cartItems} />

                    <div className="bg-[#f9f9f9] p-4 flex items-center mt-3">
                      <svg className="w-3" viewBox="0 0 32 32">
                        <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path>
                      </svg>
                      <input
                        className="outline-none bg-[#f9f9f9] text-[13px] ml-2 w-full"
                        type="text"
                        placeholder="Any suggestions? We will pass it on..."
                      />
                    </div>

                    <div className="flex items-baseline border border-gray-300 px-[15px] py-[5px] mt-4">
                      <input type="checkbox" name="" id="delivery" />
                      <div className="text-sm ml-3">
                        <label
                          className="text-[#3e4152] font-semibold"
                          htmlFor="delivery"
                        >
                          Opt in for No-contact Delivery{" "}
                        </label>

                        <div className="text-[#282c3f] font-normal opacity-60">
                          Unwell, or avoiding contact? Please select no-contact
                          delivery. Partner will safely place the order outside
                          your door (not for COD)
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-300 border-dashed my-4 px-4 flex items-center h-[55px]">
                      <img className="w-5 mr-3" src={offer} alt="" />
                      <p className="text-[#535665] text-sm font-semibold">
                        Apply Coupon
                      </p>
                    </div>

                    <div className="border-b-2 border-black pb-3">
                      <h5 className="text-[#282c3f] mb-2.5 text-[13px] font-semibold">
                        Bill Details
                      </h5>
                      <div className="text-[#686b78] text-[13px] flex justify-between">
                        <span className="my-1.5">Item Total</span>
                        <span className="my-1.5">₹{totalPrice}</span>
                      </div>
                      <div className="text-[#686b78] text-[13px] flex justify-between">
                        <span className="my-1.5">Delivery Fee | 1.8 kms</span>
                        <span className="my-1.5">₹47</span>
                      </div>
                      <hr className="my-2" />
                      <div className="text-[#686b78] text-[13px] flex justify-between">
                        <span className="my-1.5">Delivery Tip</span>
                        <span className="text-[#e46d47] my-1.5">Add tip</span>
                      </div>
                      <div className="text-[#686b78] text-[13px] flex justify-between">
                        <span className="my-1.5">Platform fee</span>
                        <span className="my-1.5">
                          <strike className="mr-2 text-[#d3d3d3]">₹7.00</strike>
                          6
                        </span>
                      </div>
                      <div className="text-[#686b78] text-[13px] flex justify-between">
                        <span className="my-1.5">
                          GST and Restaurant Charges
                        </span>
                        <span className="my-1.5">₹31.08</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-[30px] flex items-center justify-between font-bold text-sm shadow-sm h-[60px]">
                  <span>TO PAY</span>
                  <span>₹{totalPrice + 47 + 6 + 31.08}</span>
                </div>
              </div>

              <div className="bg-white px-[30px] py-4 mt-4">
                <div className="border rounded-sm p-4 flex flex-col justify-between">
                  <h1 className="text-[#3e4152] font-bold">
                    Review your order and address detailes to avoid
                    cancellations
                  </h1>
                  <p className="text-[#282c3f] pt-4 text-[13px]">
                    <span className="text-[#ff0000]">Note: </span>If you cancel
                    within 60 seconds of placing your order, a 100% refund will
                    be issued. No refund for cancellations made after 60
                    seconds.
                  </p>
                  <p className="text-[#808080] pt-6 text-[13px]">
                    Avoid cancellation as it leads to food wastage.
                  </p>
                  <div className="w-fit text-[#ff5200] text-sm pb-1 pt-4 border border-dotted border-b border-t-0 border-r-0 border-l-0 border-[#ff5200] font-semibold">
                    Read cancellation policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
