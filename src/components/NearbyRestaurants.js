import React from "react";
import { Link } from "react-router-dom";

const NearbyRestaurants = ({ nearBy }) => {
  const { brands, title } = nearBy;
  return (
    <div>
      <h1 className="font-bold text-xl py-3">{title}</h1>
      <div className="grid grid-cols-2">
        {brands.map((nearMe) => (
          <Link to={nearMe.link}>
            <button className="border rounded-lg py-3 my-2 w-[570px] font-semibold">
              {nearMe.text}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NearbyRestaurants;
