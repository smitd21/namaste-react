import { CDN_URL } from "../utils/constants";

const FoodImg = (props) =>{
  const {food} = props;
  return (
    <div className="food-list">
      <img src={CDN_URL+ food.imageId} alt="" />
    </div>
  )
 }
 export default FoodImg;