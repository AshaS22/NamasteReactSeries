import RestaurantCard from "./RestaurantCard";
import RestaurantsInfo from "./../../restaurants.json";
import { useState } from "react";

const Body = () => {
  const [restList, setRestList] = useState(RestaurantsInfo.restaurants); //Array destructuring
  //   const restList = RestaurantsInfo.restaurants;
  return (
    <div>
      <div className="filter_btn_container">
        <button className="filter_btn" onClick={() => {setRestList(restList.filter(res=>res.info.avgRating>4))}}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="body_container">
        {restList.map((restaurant) => {
          return <RestaurantCard resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
