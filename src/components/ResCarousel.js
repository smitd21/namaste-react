import FoodImg from "./FoodImg";
import { FOOD_LIST } from "../utils/mockData";

const ResCarousel = () =>{
  return (
    <div className="food-container container">
      <h1>What's on your mind?</h1>
      <div className="foods">
      {FOOD_LIST.map((food) => (
           <FoodImg key={food.id} food={food} />
         ))}
      </div>
    </div>
  )
}
export default ResCarousel;