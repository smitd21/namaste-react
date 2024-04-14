import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_RES_URL } from "../utils/constants";

const ResMenu = () => {

 const [resInfo, setResInfo] = useState(null);

 useEffect(()=>{
  fetchMenu();
 },[]) // This Callback Fn. will be executed only once - after the inital render

 const {resId} = useParams();

 const fetchMenu = async ()=>{
  const data = await fetch(`${SWIGGY_RES_URL}${resId.toString()}`);

  const json = await data?.json();
  setResInfo(json?.data)
 }

 if(resInfo === null) return <Shimmer/>;

 const { name, cuisines , locality, avgRatingString, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
 const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines}</p>
      <p>{locality}</p>
      <p>{avgRatingString}</p>
      <p>{totalRatingsString}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
   {/*  <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>  */}
      </ul>
    </div>
  );
};

export default ResMenu;
