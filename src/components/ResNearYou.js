import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/mockData";
import { useState } from "react";


const ResNearYou =()=>{
  const [listOfRes, setListOfRes] = useState(RES_LIST);

  return (
    <div className="res-near">
      <h1>Restaurants near you</h1>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
              console.log(filteredRes);
              setListOfRes(filteredRes);
          }}
        >
          Filter Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurants) => (
          // For each restaurants => return a (JSX) i.e <RestaurantCard /> (and pass data to it)
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
 }

 export default ResNearYou;