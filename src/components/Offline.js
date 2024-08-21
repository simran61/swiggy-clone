import React from "react";
import offlineImg from "../assets/offline.jpg";

const Offline = () => {
  return (
    <div className="h-[85vh] text-center flex flex-col justify-center items-center">
      <img className="h-72" src={offlineImg} alt="" />
      <h1 className="mt-6 text-xl font-semibold text-[#535665]">
        Your internet is a little wonky
      </h1>
      <p className="text-[#7e808c] mt-2 w-[23%]">
        Try switching to a different connection or reset your internet to place
        an order.
      </p>
      <button className="mt-7 py-2 px-5 bg-[#ff5200] text-white font-semibold">
        RETRY
      </button>
    </div>
  );
};

export default Offline;
