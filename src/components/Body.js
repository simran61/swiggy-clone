import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import CarouselDish from "./CarouselDish";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestRestaurants from "./BestRestaurants";
import BestCuisines from "./BestCuisines";
import NearbyRestaurants from "./NearbyRestaurants";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // setCarouselDishes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setCarouselDishes(json?.data?.cards[0]?.card?.card);
    setTopRestaurants(json?.data?.cards[1]?.card?.card);
    setBestRestaurants(json?.data?.cards[6]?.card?.card);
    setBestCuisines(json?.data?.cards[7]?.card?.card);
    setNearBy(json?.data?.cards[8]?.card?.card);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };

  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  const onlineStatus = useOnlineStatus();

  const dish = carouselDishes?.imageGridCards?.info;
  const topRes = topRestaurants?.gridElements?.infoWithStyle?.restaurants;

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-40">
      {/* carousel dishes */}
      <div>
        <h1 className="font-bold text-xl">{carouselDishes.header.title}</h1>
        <div className="mx-10  my-14">
          <Slider {...settings}>
            {dish.map((d) => (
              <CarouselDish dishData={d} />
            ))}
          </Slider>
        </div>
      </div>

      <hr />

      {/* top restaurants carousel */}
      <div>
        <h1 className="font-bold text-xl">{topRestaurants?.header?.title}</h1>
        <div className="mx-10  my-14">
          <Slider {...settings1}>
            {topRes.map((res) => (
              <RestaurantCard resData={res?.info} />
            ))}
          </Slider>
        </div>
      </div>

      <hr />

      {/* <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Seach Restaurant Name..."
            className="border border-solid border-black p-1.5 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-red-200 rounded-lg m-4"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg m-4"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <label>UserName: </label>
          <input
            type="text"
            className="border border-solid border-black p-1.5 rounded-lg"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <hr /> */}

      <div>
        <h1 className="font-bold text-xl">
          Restaurants with online food delivery in Indore
        </h1>

        <div className="filter-btns flex my-3">
          <button className="flex items-center rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Filter{" "}
            <img
              className="h-3 ml-2"
              src="https://static-00.iconduck.com/assets.00/filter-icon-2048x1617-97le7v6v.png"
              alt=""
            />
          </button>

          <button className="flex items-center rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Sort By{" "}
            <img
              className="h-4 ml-2"
              src="https://static.thenounproject.com/png/1123247-200.png"
              alt=""
            />
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Fast Delivery
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            New on Swiggy
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Rating 4.0+
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Pure Veg
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Offers
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Rs 300-Rs 600
          </button>

          <button className="rounded-full py-2 px-3 mr-3 text-sm text-[rgba(2,6,12,0.75)] font-semibold">
            Less than Rs 300
          </button>
        </div>

        <div className="flex flex-wrap justify-between mx-4">
          {filteredRestaurant.map((restaurant) => (
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
