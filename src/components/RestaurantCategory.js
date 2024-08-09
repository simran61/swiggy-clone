import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full my-5  mx-auto  ">
      <div className="h-4 bg-gray-100"></div>
      <div
        className="flex justify-between items-center mx-4 my-5 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <img
          className="h-6"
          src="https://static.thenounproject.com/png/1123247-200.png"
          alt=""
        />
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
