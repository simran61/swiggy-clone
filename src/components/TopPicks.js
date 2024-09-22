import React from "react";
import { TOP_PICKS } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

import { useDispatch } from "react-redux";

const TopPicks = ({ topCard }) => {
  const dispatch = useDispatch();

  console.log(topCard);

  const handleAddItem = (item) => {
    dispatch(addItem(item?.dish?.info));
  };

  return (
    <div className="relative my-4">
      <img src={TOP_PICKS + topCard?.creativeId} alt="" />

      <span className="absolute bottom-4 left-4 font-semibold text-white">
        ₹
        {topCard?.dish?.info?.price / 100 ||
          topCard?.dish?.info?.defaultPrice / 100}
      </span>
      <button
        onClick={() => handleAddItem(topCard)}
        className="absolute bottom-4 right-10 py-1.5 px-6 rounded-md bg-white text-green-600 font-bold"
      >
        ADD
      </button>
    </div>
  );
};

export default TopPicks;
