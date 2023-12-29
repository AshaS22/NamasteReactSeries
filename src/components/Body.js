import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restList, setRestList] = useState([]); //Array destructuring
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setRestList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, []);
  return (
    <div>
      <div className="action_container">
        <div className="search_container">
          <input
            className="search_box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search_btn"
            onClick={() => {
              setFilteredRest(
                restList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="filter_btn_container">
          <button
            className="filter_btn"
            onClick={() => {
              setFilteredRest(restList.filter((res) => res.info.avgRating > 4));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="body_container">
        {restList.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRest.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
