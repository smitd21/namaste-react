import { useEffect, useState } from "react";
import { SWIGGY_RES_URL } from "./constants";

const useRestaurantMenu = (resId) =>{

 const [resInfo, setResInfo] = useState(null);

 useEffect(()=>{
  fetchMenu();
 },[]);

 const fetchMenu = async () =>{
  const data  = await fetch(`${SWIGGY_RES_URL}${resId}`);

  const json = await data.json()
  setResInfo(json?.data);
 }

 return resInfo;
}

export default useRestaurantMenu;