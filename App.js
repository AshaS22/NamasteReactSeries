import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/chef_food.png";
import RestaurantsInfo from "./restaurants.json";

// Header
//  - Logo
//  - Navitems
// Body
//  - Search bar
//  - Restaurant list container
// Footer
//  - Copyright, Link, Address

const Header = () => (
  <div className="header_container">
    <div className="logo_container">
      <img className="logo" src={Logo} alt="Logo"></img>
    </div>
    <div className="nav_container">
      <ul className="nav_items">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    props.resData.info;
  return (
    <div className="rest_card">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
        alt=""
        className="rest_image"
      ></img>
      <h2 className="rest_name">{name}</h2>
      <h3 className="cuisine">{cuisines.join(", ")}</h3>
      <h4 className="rating">{avgRating}</h4>
      <h4 className="Delivery Time">{costForTwo}</h4>
    </div>
  );
};
const RestaurantContainer = () => {
  const restList = RestaurantsInfo.restaurants;
  return (
    <div className="rest_container">
      {restList.map((restaurant) => {
        return <RestaurantCard resData={restaurant} />;
      })}
    </div>
  );
};
const Body = () => (
  <div className="app_body">
    <RestaurantContainer />
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
