// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    locality,
  } = resData;

  return (
    <div className="res-card m-2 mb-5 w-[245px]" data-testid="resCard">
      <div className="relative">
        <img
          className="res-img rounded-xl h-[170px] object-cover w-full"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <div className="res-img-overlay"></div>
        <h1 className="absolute bottom-2 left-3 text-xl font-black text-white">
          {aggregatedDiscountInfoV3?.header +
            " " +
            aggregatedDiscountInfoV3?.subHeader}
        </h1>
      </div>
      <h3 className="res-name font-bold pt-2 text-lg">{name}</h3>
      <div className="flex">
        <span className="flex items-center">
          <svg
            className="mr-1"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            strokeColor="rgba(2, 6, 12, 0.92)"
            fillColor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#21973B"></stop>
                <stop offset="1" stop-color="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          {avgRating}
        </span>
        <span className="mx-1">•</span>
        <span>{sla?.slaString}</span>
      </div>
      <p className="light-card-info">{cuisines.join(", ")}</p>
      <p className="light-card-info">{locality}</p>
      {/* <h4>{costForTwo}</h4> */}
      {/* <h4 className="font-bold">User: {loggedInUser}</h4> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-500 text-white px-2 left-8 top-4 font-bold">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
