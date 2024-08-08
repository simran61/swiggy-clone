import React from "react";
import { Link } from "react-router-dom";

const BestRestaurants = ({ bestRes }) => {
  const { brands, title } = bestRes;
  return (
    <div>
      <h1 className="font-bold text-xl py-3">{title}</h1>
      <div className="grid grid-cols-4">
        {brands.map((city) => (
          <Link to={city.link}>
            <button className="border rounded-lg py-3 my-2 w-[270px] font-semibold">
              {city.text}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestRestaurants;
