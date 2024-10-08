import React from "react";

const HalfOfferCard = ({ data }) => {
  return (
    <div className="border rounded-2xl p-3 mr-4 my-4 flex items-center">
      <img
        className="w-12 mx-2"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
        alt=""
      />
      <div className="ml-1">
        <h3 className="font-extrabold">{data?.info?.header}</h3>
        <span className="text-sm font-bold text-[#02060c72]">
          {data?.info?.couponCode}
        </span>
      </div>
    </div>
  );
};

export default HalfOfferCard;
