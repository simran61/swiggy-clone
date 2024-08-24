import React, { useEffect, useState } from "react";
import useCuisines from "../utils/useCuisines";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CUISINE_IMG, SEARCH_RESULTS_IMG } from "../utils/constants";
import { SUGGESTION_IMG } from "../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import veg from "../assets/veg-icon.png";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchedResults, setSearchedResults] = useState(false);

  const cuisinesInfo = useCuisines();

  const cuisines =
    cuisinesInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.8,
    slidesToScroll: 3,
  };

  useEffect(() => {
    getSearchSuggestions();
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=22.7195687&lng=75.8577258&str=${searchQuery}&trackingId=undefined&includeIMItem=true`
    );
    const json = await data.json();
    setSuggestions(json?.data?.suggestions);
  };

  const searchResults = async (searchName) => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=22.7195687&lng=75.8577258&str=${searchName}&trackingId=null&submitAction=SUGGESTION&queryUniqueId=9375ec94-48ff-c677-9afe-3e101dd72dec&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22athbxylw1pvnebsbosky%22%2C%22dishFamilyId%22%3A%22846649%22%2C%22dishFamilyIds%22%3A%5B%22846649%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`
    );
    const json = await data.json();
    const dishes =
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Dish"
      );
    setSearchResult(dishes);
    setShowSuggestions(false);
    setSearchedResults(true);
  };

  const handleOnSuggestionClick = (suggestionName) => {
    searchResults(suggestionName);
  };

  const handleOnEnter = (e) => {
    if (e.key === "Enter") {
      searchResults(e.target.value);
    }
  };

  return (
    <div className="w-[860px] mx-auto my-12">
      <div className="border p-2.5 flex items-center justify-between">
        <input
          className="w-3/4 outline-none"
          placeholder="Search for restaurant and foods"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyUp={handleOnEnter}
        />
        <button onClick={() => searchResults(searchQuery)}>
          <svg viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
          </svg>
        </button>
      </div>

      {showSuggestions && (
        <div className="m-4">
          {suggestions?.map((s) => (
            <div
              className="flex items-center py-2 hover:bg-blue-50"
              onClick={() => handleOnSuggestionClick(s?.text)}
            >
              <img
                className="h-16 w-16 object-cover rounded-[4px] mr-4"
                src={SUGGESTION_IMG + s?.cloudinaryId}
                alt=""
              />
              <div>
                <h2 className="text-[15px] text-[#282c3f]">{s?.text}</h2>
                <h4 className="text-sm text-[#686b78]">{s?.tagToDisplay}</h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {searchedResults && (
        <div>
          <div className="my-4">
            <button className="text-[#282c3f] font-semibold py-2 px-3.5 mr-2 text-sm border rounded-full">
              Restaurants
            </button>
            <button className="bg-[#282c3f] text-white font-semibold py-2 px-3.5 mr-2 text-sm border rounded-full">
              Dishes
            </button>
          </div>

          <div className="bg-[#f5f6f8]">
            <div className="flex gap-3 bg-white py-4 border-t mb-8">
              <div className=" pr-3 border-gray-400 border-r border-dashed">
                <button className="flex items-center bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                  Sort by
                  <img
                    className="ml-1 h-4"
                    src="https://static.thenounproject.com/png/1123247-200.png"
                    alt=""
                  />
                </button>
              </div>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Fast Delivery
              </button>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Veg
              </button>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Non-Veg
              </button>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Rated 4+
              </button>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Rs 100-Rs 250
              </button>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Less than Rs 100
              </button>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Gourmet
              </button>
              <button className="bg-[#fafafa] rounded-md text-xs font-medium px-[10px] py-[5px] text-[#686b78] border">
                Spicy
              </button>
            </div>

            <div className="flex flex-wrap justify-between m-3">
              {searchResult.map((c) => (
                <div className="dish-card w-[410px] h-[277px] bg-white py-6 px-4 rounded-3xl mb-6">
                  <div className="flex justify-between items-center border-b border-dotted pb-3">
                    <div className="">
                      <h3 className="text-[#686b78] font-bold text-sm">
                        {c?.card?.card?.restaurant?.info?.name}
                      </h3>
                      <div className="flex items-center text-[13px] text-[#7e808c]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          fillColor="#686b78"
                        >
                          <rect width="12" height="12" fill="white"></rect>
                          <path
                            d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                            fill="#686b78"
                          ></path>
                        </svg>
                        <span className="ml-1">
                          {
                            c?.card?.card?.info?.ratings?.aggregatedRating
                              ?.rating
                          }
                        </span>
                        <span className="mx-1"> . </span>
                        <span>
                          {c?.card?.card?.restaurant?.info?.sla?.slaString}
                        </span>
                      </div>
                    </div>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.2307 5.53999C12.9769 5.28615 12.5653 5.28615 12.3115 5.53999C12.0576 5.79383 12.0576 6.20539 12.3115 6.45923L17.2019 11.3496L5.39414 11.3496C5.03516 11.3496 4.74414 11.6406 4.74414 11.9996C4.74414 12.3586 5.03516 12.6496 5.39414 12.6496L17.2019 12.6496L12.3115 17.54C12.0576 17.7938 12.0576 18.2054 12.3115 18.4592C12.5653 18.7131 12.9769 18.7131 13.2307 18.4592L18.949 12.741C19.3584 12.3315 19.3584 11.6677 18.949 11.2583L13.2307 5.53999Z"
                        fill="#868891"
                      ></path>
                    </svg>
                  </div>

                  <div className="flex justify-between items-center my-6">
                    <div>
                      <img className="h-4" src={veg} alt="" />
                      <h1 className="font-bold text-lg text-[#02060cbf]">
                        {c?.card?.card?.info?.name}
                      </h1>
                      <h2 className="font-bold tracking-[-0.5px]">
                        ₹ {c?.card?.card?.info?.price / 100}
                      </h2>
                      <button className="flex items-center border rounded-full font-bold mt-3 py-1 px-2 text-[#02060c99] text-[13px] ">
                        More Details
                        <img
                          className="h-2.5 ml-1 opacity-50"
                          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
                          alt=""
                        />
                      </button>
                    </div>

                    <div className="relative">
                      <img
                        className="w-[156px] h-[144px] rounded-lg"
                        src={SEARCH_RESULTS_IMG + c?.card?.card?.info?.imageId}
                        alt=""
                      />
                      <button className="text-lg px-7 py-1 text-green-600 font-bold rounded-md bg-white shadow-sm absolute -bottom-4 left-[19%] border">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="flex justify-between items-center my-8 mx-2">
          <h1 className="text-[#3d4152] font-bold text-lg">Recent Searches</h1>
          <span className="text-[#ff5200] font-bold text-xs">SHOW MORE</span>
        </div>

        <div className="w-full flex items-center">
          <svg viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
          </svg>
          <p className="text-[#686b78] font-medium w-full ml-4 py-4 border-b-2">
            Oye24 Bhawarkuwa
          </p>
        </div>

        <div className="w-full flex items-center">
          <svg viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
          </svg>
          <p className="text-[#686b78] font-medium w-full ml-4 py-4 border-b-2">
            KFC
          </p>
        </div>

        <div className="w-full flex items-center">
          <svg viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
          </svg>
          <p className="text-[#686b78] font-medium w-full ml-4 py-4 ">
            Gurukripa Restaurant - Sarwate
          </p>
        </div>
      </div>

      <div className="mt-4 mb-14">
        <h1 className="font-extrabold text-2xl">
          {cuisinesInfo?.data?.cards[1]?.card?.card?.header?.title}
        </h1>
        <div className="mr-4">
          <Slider {...settings}>
            {cuisines?.map((c) => (
              <img src={CUISINE_IMG + c?.imageId} alt="" />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Search;
