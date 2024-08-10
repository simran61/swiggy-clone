import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="item-info py-7 m-2 pb-10 border-gray-200 border-b-2 text-left flex items-center justify-between"
        >
          <div className="w-9/12">
            <h4 className="font-bold text-[#02060cbf]">
              {item.card.info.name}
            </h4>
            <div className="flex mb-2">
              <span className="mr-2">
                Rs{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>

              {item.card.info?.offerTags && (
                <p className="flex items-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.63362 8.39604C1.28368 8.7446 1.28368 9.30972 1.63362 9.65828L6.1293 14.1362C6.47924 14.4848 7.0466 14.4848 7.39654 14.1362L12.9543 8.60038C13.1228 8.43251 13.2173 8.20468 13.2168 7.96728L13.2069 3.49924C13.2058 3.00785 12.8061 2.60977 12.3128 2.60868L7.827 2.5988C7.58866 2.59828 7.35993 2.69235 7.1914 2.86022L1.63362 8.39604ZM10.8177 6.90055C11.3458 6.37452 11.3439 5.51976 10.8134 4.99139C10.283 4.46302 9.4248 4.46113 8.89668 4.98717C8.36856 5.5132 8.37045 6.36796 8.90092 6.89633C9.43138 7.4247 10.2895 7.42659 10.8177 6.90055Z"
                      fill="#1BA672"
                    ></path>
                  </svg>
                  <span className="font-bold text-xs text-[#02060c99]">
                    {item.card.info?.offerTags[0]?.title}{" "}
                    {item.card.info?.offerTags[0]?.subTitle}
                  </span>
                </p>
              )}
            </div>

            {item?.card?.info?.ratings?.aggregatedRating?.rating && (
              <div className="flex items-center mb-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  fillColor="#1BA672"
                >
                  <rect width="14" height="14" fill="white"></rect>
                  <path
                    d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                    fill="#1BA672"
                  ></path>
                </svg>
                <span className=" text-[13px] font-bold text-green-600 mx-1">
                  {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>
                <span className="text-[13px] text-[#02060c99]">
                  ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                </span>
              </div>
            )}

            <p>{item.card.info.description}</p>
          </div>

          <div className="w-[156px] relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-[144px] object-cover rounded-xl"
              alt=""
            />
            <button
              className="text-lg px-6 py-1 text-green-600 font-bold rounded-md bg-white shadow-md absolute -bottom-4 left-[23%] border"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
