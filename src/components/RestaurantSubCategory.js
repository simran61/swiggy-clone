import React from "react";
import ItemList from "./ItemList";

const RestaurantSubCategory = ({ nestedItem, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  console.log(nestedItem);

  return (
    <div
      className="sub-item-info mx-4 cursor-pointer  border-b-2"
      onClick={handleClick}
    >
      <div className="flex justify-between items-center my-4">
        <span className="font-bold text-base">
          {nestedItem?.title} ({nestedItem?.itemCards?.length})
        </span>
        <img
          className="h-6"
          src="https://static.thenounproject.com/png/1123247-200.png"
          alt=""
        />
      </div>
      {showItems && <ItemList items={nestedItem.itemCards} />}
    </div>
  );
};

export default RestaurantSubCategory;
