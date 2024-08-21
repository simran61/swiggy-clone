import React, { useEffect, useState } from "react";
import useCuisines from "../utils/useCuisines";
// import CarouselCuisine from "./CarouselCuisine";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CUISINE_IMG } from "../utils/constants";
import { SUGGESTION_IMG } from "../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cuisinesInfo = useCuisines();
  console.log(cuisinesInfo);

  const cuisines =
    cuisinesInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
  console.log(cuisines);

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
    console.log(json?.data?.suggestions);
  };

  return (
    <div className="w-7/12 mx-auto my-12">
      <div className="border p-2.5 flex items-center justify-between">
        <input
          className="w-3/4 outline-none"
          placeholder="Search for restaurant and foods"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        <button>
          <svg viewBox="5 -1 12 25" height="17" width="17" fill="#686b78">
            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
          </svg>
        </button>
      </div>

      {showSuggestions && (
        <div className="m-4">
          {suggestions?.map((s) => (
            <div className="flex items-center py-2 hover:bg-blue-50">
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
