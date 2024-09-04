import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import HalfOfferCard from "./HalfOfferCard";
import menuLeft from "../assets/menu-left.png";
import menuRight from "../assets/menu-right.png";
import vegIcon from "../assets/veg.png";
import nonVeg from "../assets/non-veg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopPicks from "./TopPicks";
import RestaurantNestedCategory from "./RestaurantNestedCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  console.log(resInfo);
  // if (resInfo === null) return <Shimmer />;

  const {
    areaName,
    avgRating,
    city,
    locality,
    sla,
    totalRatingsString,
    veg,
    name,
    cuisines,
    costForTwoMessage,
    feeDetails,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  const { offers } =
    resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const nestedCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (nc) =>
        nc.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  const topPicks =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
    ) || [];

  const topBanners = topPicks[0]?.card?.card?.carousel;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.26,
    slidesToScroll: 1,
  };

  var settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col w-1/2 my-8 mx-auto">
      <div className="text-[10px]">
        <span className="text-[#93959f]">Home / {city} / </span>
        <span className="text-[#535665]">{name}</span>
      </div>

      <h1 className="font-extrabold mt-6 mb-4 text-2xl">{name}</h1>

      <div className="res-info-box-bg">
        <div className="bg-white p-4 mt-2 res-info-box rou">
          <div className="flex">
            <p className="flex items-center font-bold">
              <svg
                width="18"
                height="18"
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
              <span className="mx-1">{avgRating}</span>
              <span>({totalRatingsString})</span>
            </p>
            <span className="text-[#02060c72] mx-2">•</span>
            <p className="font-bold">{costForTwoMessage}</p>
          </div>
          <span className="text-[#ff5200] font-bold underline text-sm">
            {cuisines?.join(", ")}
          </span>
          <div className="flex my-3 w-full text-sm">
            <div class="sc-fmzyuX jICcAR mr-2">
              <div class="sc-cyRcrZ cAzFIF"></div>
              <div class="sc-kUdmhA gzkjpM"></div>
              <div class="sc-cyRcrZ cAzFIF"></div>
            </div>
            <div>
              <p>
                <span className="font-bold mr-2">Outlet </span>{" "}
                <span className="text-[#02060c99]">{areaName}</span>
              </p>
              <span className="font-bold">{sla?.slaString?.toLowerCase()}</span>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex items-center text-[#02060c99] text-sm font-medium">
            <img
              className="h-5"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
              alt="delivery"
            />
            <span className="ml-2">{sla?.lastMileTravelString} |</span>
            <span className="ml-1">
              ₹{feeDetails?.amount / 100} Delivery fee will apply
            </span>
          </div>
        </div>
      </div>

      {offers && (
        <div className="offer-container my-8">
          <h1 className="text-xl font-extrabold">Deals for you</h1>

          <Slider {...settings}>
            {offers.map((offer) => (
              <HalfOfferCard data={offer} />
            ))}
          </Slider>
        </div>
      )}

      <div>
        <div className="flex items-center justify-center mb-6">
          <img className="h-3" src={menuLeft} alt="" />
          <h1 className="text-[13px] mx-2 text-[#02060c99] font-medium tracking-widest">
            MENU
          </h1>
          <img className="h-3" src={menuRight} alt="" />
        </div>

        <div className="flex justify-between bg-gray-100 px-4 py-2.5 rounded-lg">
          <input
            className="bg-gray-100 w-[100%] text-center"
            type="text"
            placeholder="Search for dishes"
          />
          <button>
            <img
              className="h-4"
              src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
              alt=""
            />
          </button>
        </div>

        <div className="filter-btns flex my-6">
          <button className="text-green-700 flex items-center rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            <img className="h-4 mr-2" src={vegIcon} alt="" />
            Pure Veg
          </button>

          <button className="text-red-700 flex items-center rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            <img className="h-4 mr-2" src={nonVeg} alt="" />
            Non Veg
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Bestseller
          </button>
        </div>

        {topBanners && (
          <div className="banners-container">
            <hr />
            <h1 className="text-xl font-extrabold">Top Picks</h1>
            <Slider {...settings1}>
              {topBanners.map((banner) => (
                <TopPicks topCard={banner} />
              ))}
            </Slider>
          </div>
        )}

        {nestedCategories?.map((nestedCategory, index) => (
          <RestaurantNestedCategory
            key={nestedCategory?.card?.card?.title}
            data={nestedCategory?.card?.card}
          />
        ))}

        {categories?.map((category, index) => (
          <div>
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
