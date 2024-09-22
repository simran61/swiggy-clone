import React from "react";
import veg from "../assets/veg-icon.png";

const CartItem = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div className="flex justify-between py-2.5">
          <div className="flex basis-3/5 items-center">
            <img className="h-4" src={veg} alt="" />
            <h5 className="text-sm ml-[10px]">{item?.name}</h5>
          </div>
          <div className="flex items-center justify-between basis-5/12">
            <div className="flex justify-around items-center font-bold border text-[#60b246] w-[70px] h-[30px] mr-2">
              <button>-</button>
              <span className="text-xs">1</span>
              <button>+</button>
            </div>
            <h5 className="text-[#535665] text-[13px]">
              ₹
              {item?.price / 100 ||
                item?.defaultPrice / 100 ||
                item?.finalPrice / 100}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
