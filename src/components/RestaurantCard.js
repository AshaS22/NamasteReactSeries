import { CDN_ID } from "../utils/constants";

const RestaurantCard = ({resData}) => {
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="rest_card">
      <img
        src={
          CDN_ID +
          cloudinaryImageId
        }
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

export default RestaurantCard;
