import React, { useState } from "react";
import RestaurantSubCategory from "./RestaurantSubCategory";

const RestaurantNestedCategory = ({ data }) => {
  console.log(data);
  const nestedCategories = data?.categories;

  const [showIndex, setShowIndex] = useState(null);

  return (
    <div className="w-full my-5  mx-auto  ">
      <div className="h-4 bg-gray-100"></div>
      <div className="font-bold text-lg mx-4 my-5">
        {data.title} ({data.categories.length})
      </div>
      {nestedCategories &&
        nestedCategories.map((nestedCategory, index) => (
          <RestaurantSubCategory
            nestedItem={nestedCategory}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantNestedCategory;
