import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const ItemList = ({ items, dummy }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="py-7 m-2 border-gray-200 border-b-2 text-left flex items-center justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-semibold">
                {" - Rs "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-24 object-cover "
              alt=""
            />
            <button
              className="text-xs px-4 py-2 text-green-600 font-bold rounded-md bg-white shadow-lg absolute -bottom-3 left-[30%]"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
