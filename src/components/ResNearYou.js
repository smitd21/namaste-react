import { SWIGGY_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const ResNearYou =()=>{
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(()=>{
    console.log("Use Effect Callback function Called!");
    fetchData();
  }, [])

  const fetchData = async ()=>{
    // fetch is given us by Browser's JS engine - It will return a Promise
    const data = await fetch(SWIGGY_URL);
    // await for data to come from API
    
    
    // await for Promise to get resolved & convert the data to JSON
    const json = await data.json();
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // ! Optional Chaining is important
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfRes.length === 0 ? <Shimmer/> : ( // * Conditional Rendering -> Load A Shimmer UI - Good Practise ✅
    <div className="res-near">
      <h1>Restaurants near you</h1>
      <div className="search-container">
        <input type="text" value={searchText} placeholder="Search for any cuisine or restaurant name" onChange={
          (e)=>{
            setSearchText(e.target.value);
          }
        }/>
        <button onClick={
          ()=>{
            const searchedRes = listOfRes.filter((res) => {
                return res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()) || 
                (res.info.cuisines && res.info.cuisines.map(cuisine => cuisine.toLowerCase()).includes(searchText?.toLowerCase()))
            }) 
            if(searchedRes.length > 0 && searchText){
              setFilteredRes(searchedRes);
            } else {
              fetchData();
            }
          }
        }>Search</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRes = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
              console.log(filteredRes);
              setFilteredRes(filteredRes);
          }}
        >
          Filter Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurants) => (
          // For each restaurants => return a (JSX) i.e <RestaurantCard /> (and pass data to it)
          <Link key={restaurants.info.id} to={`restaurant/${restaurants.info.id}`} style={{textDecoration: 'none', color: "#000"}}>
            <RestaurantCard resData={restaurants} />
          </Link>
        ))}
      </div>
    </div>
  );
 }

 export default ResNearYou;