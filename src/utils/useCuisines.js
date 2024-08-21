import React, { useEffect, useState } from "react";
import { CUISINES } from "./constants";

const useCuisines = () => {
  const [cuisinesInfo, setCuisinesInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CUISINES);
    const json = await data.json();
    setCuisinesInfo(json);
    console.log(json);
  };
  return cuisinesInfo;
};

export default useCuisines;
