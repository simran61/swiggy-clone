import React from "react";
import ItemList from "./ItemList";

const RestaurantSubCategory = ({ nestedItem, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  console.log(nestedItem);

  return (
    <div className="mx-4 cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between items-center py-3">
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
      <hr />
    </div>
  );
};

export default RestaurantSubCategory;
