import React from "react";
import { CAROUSEL_DISHES } from "../utils/constants";

const CarouselDish = ({ dishData }) => {
  return (
    <div className="m-1">
      <img src={CAROUSEL_DISHES + dishData.imageId} alt="" />
    </div>
  );
};

export default CarouselDish;
