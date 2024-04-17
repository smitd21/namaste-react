import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore(
 {
  // reducer of entire store => consists of reducers of all its slices (each slice will have its own reducer)
  reducer : {  // App's Store reducer
   
   cart: cartReducer, // cart slice reducer
   // user: userReducer // user slice reducer
  }
 }
);

export default appStore;