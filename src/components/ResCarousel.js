import { SWIGGY_URL } from "../utils/constants";
import FoodImg from "./FoodImg";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResCarousel = () =>{
  const [foodList, setFoodList] = useState([]);

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async ()=>{
    const data = await fetch(SWIGGY_URL);

    const json = await data.json();
    setFoodList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }

  // Conditional Rendering
  // if(foodList.length ===0){
  //   return <Shimmer/>
  // }

  return foodList.length === 0 ? <Shimmer/> : (
    <div className="food-container container">
      <h1>What's on your mind?</h1>
      <div className="foods">
      {foodList.map((food) => (
           <FoodImg key={food.id} food={food} />
         ))}
      </div>
    </div>
  )
}
export default ResCarousel;