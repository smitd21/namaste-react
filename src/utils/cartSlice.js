import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
 name: 'cart',
 initialState: {
  items: []
 },
 reducers: {
  addItem : (state, action)=>{
   //! We have to Mutate the state here (Directly modifying)
   //! Redux TKT uses IMMER Behind the Scenes
   state.items.push(action.payload);
  },
  removeItem: (state, action) =>{
   state.items.pop();
  },
  clearCart : (state)=>{
   // no need for action payload here as we are just emptying the cart
   console.log(current(state)); // To get Value of state we use current (or else it will give Proxy Object)
   state.items.length = 0; //! [] - ALWAYS DO THIS WAY ✅ & not state = [] ❌

   // return [];//*This new array will be replaced inside original State - This also works ✅ As RTK advices you to Mutate the state directly or return new State
  }
 }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;