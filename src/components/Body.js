import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import CarouselDish from "./CarouselDish";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestRestaurants from "./BestRestaurants";
import BestCuisines from "./BestCuisines";
import NearbyRestaurants from "./NearbyRestaurants";
import Offline from "./Offline";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [carouselDishes, setCarouselDishes] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [bestResturants, setBestRestaurants] = useState([]);
  const [bestCuisines, setBestCuisines] = useState([]);
  const [nearBy, setNearBy] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://localhost:5000/api/restaurants"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCarouselDishes(json?.data?.cards[0]?.card?.card);
    setTopRestaurants(json?.data?.cards[1]?.card?.card);
    setBestRestaurants(json?.data?.cards[6]?.card?.card);
    setBestCuisines(json?.data?.cards[7]?.card?.card);
    setNearBy(json?.data?.cards[8]?.card?.card);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.8,
    slidesToScroll: 3,
  };

  var settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.7,
    slidesToScroll: 3,
  };

  const onlineStatus = useOnlineStatus();

  const dish = carouselDishes?.imageGridCards?.info;
  const topRes = topRestaurants?.gridElements?.infoWithStyle?.restaurants;

  if (onlineStatus === false) return <Offline />;

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-40">
      <div className="mt-4 mb-14 mx-10">
        <h1 className="font-extrabold text-2xl">
          {carouselDishes.header.title}
        </h1>
        <div className="mr-4">
          <Slider {...settings}>
            {dish?.map((d) => (
              <CarouselDish dishData={d} />
            ))}
          </Slider>
        </div>
      </div>

      <hr />

      <div className="my-9 mx-10">
        <h1 className="font-extrabold text-2xl py-3">
          {topRestaurants?.header?.title}
        </h1>
        <div className="">
          <Slider {...settings1}>
            {topRes?.map((res) => (
              <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                <div className="w-[273px]">
                  <RestaurantCard resData={res?.info} />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      <hr />

      <div className="my-9 mx-10">
        <h1 className="font-extrabold text-2xl">
          Restaurants with online food delivery in Indore
        </h1>

        <div className="filter-btns flex my-3">
          <button
            className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (res) => res.info.sla.deliveryTime < 30
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Fast Delivery
          </button>

          <button
            className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Rating 4.0+
          </button>

          <button
            className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter(
                (res) => res.info.veg == true
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Pure Veg
          </button>

          <button
            className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter((res) =>
                res.info.aggregatedDiscountInfoV3 == undefined ? null : res
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Offers
          </button>

          <button
            className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter((res) => {
                const costParts = res.info.costForTwo.split(" ");
                const costNumber = parseInt(costParts[0].replace("₹", ""), 10);
                return costNumber >= 300 && costNumber <= 600 ? res : null;
              });
              setFilteredRestaurant(filteredList);
            }}
          >
            Rs 300-Rs 600
          </button>

          <button
            className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold"
            onClick={() => {
              console.log(listOfRestaurants);
              const filteredList = listOfRestaurants?.filter((res) => {
                const costParts = res.info.costForTwo.split(" ");
                const costNumber = parseInt(costParts[0].replace("₹", ""), 10);
                return costNumber < 300 ? res : null;
              });

              setFilteredRestaurant(filteredList);
              console.log(filteredList);
            }}
          >
            Less than Rs 300
          </button>

          <div className="rounded-full flex items-center justify-between px-4 py-1 mr-3 bg-gray-100 w-64">
            <input
              className="bg-gray-100 outline-none placeholder:text-[rgba(2,6,12,0.75)] w-60"
              type="text"
              placeholder="Seach for restaurant name..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filteredRestaurant = listOfRestaurants?.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );

                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              <svg
                className="ml-3"
                viewBox="5 -1 12 25"
                height="17"
                width="17"
                fill="#686b78"
              >
                <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
              </svg>
            </button>
          </div>

          <button
            className="rounded-full py-2 px-3 mr-3 text-sm text-[#ff5200] font-semibold"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurants);
            }}
          >
            Clear Filters
          </button>
        </div>

        <div className="grid grid-cols-4 ">
          {filteredRestaurant?.map((restaurant) => (
            <div className="res-card w-[254px]">
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant.info.isNewlyOnboarded ? (
                  <RestaurantCardPromoted resData={restaurant?.info} />
                ) : (
                  <RestaurantCard resData={restaurant?.info} />
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <BestRestaurants bestRes={bestResturants} />
      <BestCuisines cuisines={bestCuisines} />
      <NearbyRestaurants nearBy={nearBy} />
    </div>
  );
};

export default Body;
