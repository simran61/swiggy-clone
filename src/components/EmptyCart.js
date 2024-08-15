import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 ">
      <img
        className="w-[271px]"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt=""
      />
      <h1 className="mt-6 text-xl font-semibold text-[#535665]">
        Your cart is empty
      </h1>
      <h4 className="text-[#7e808c] mt-2">
        You can go to home page to view more restaurants
      </h4>
      <Link to="/">
        <button className="mt-7 py-3 px-5 bg-[#ff5200] text-white font-semibold">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
