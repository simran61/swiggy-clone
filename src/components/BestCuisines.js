import React, { useState } from "react";
import { Link } from "react-router-dom";

const BestCuisines = ({ cuisines }) => {
  const { brands, title } = cuisines;
  const [visible, setVisible] = useState(11);
  const [showBtn, setShowBtn] = useState(true);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + (brands.length - visible));
    setShowBtn(false);
  };

  return (
    <div className="my-8">
      <h1 className="font-bold text-xl py-3">{title}</h1>
      <div className="grid grid-cols-4">
        {brands.slice(0, visible).map((city) => (
          <Link to={city.link}>
            <button className="btn-tab border rounded-lg py-3  px-4  my-2 w-[270px] font-semibold">
              {city.text}
            </button>
          </Link>
        ))}
        {showBtn && (
          <button
            className="flex items-center justify-center border rounded-lg py-3 my-2 w-[270px] font-semibold"
            onClick={showMoreItems}
          >
            <span className="font-bold">Show More</span>
            <img
              className="h-5 ml-2"
              src="https://static.thenounproject.com/png/1123247-200.png"
              alt=""
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default BestCuisines;
