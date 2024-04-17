import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = ()=>{
 const cartItems = useSelector((store) => store.cart.items);
 const dispatch = useDispatch();

 const handleClearCart = () => {
  dispatch(clearCart());
 }

 return (
  <div className="cart">
   <h1 className="cartHeading">Cart</h1>

   <button onClick={handleClearCart}>Clear Cart</button>

   <h2>{cartItems?.length === 0 ? "Please Add Items to cart" : `Cart Qty : ${cartItems?.length}`}</h2>
   
   {cartItems.map((item)=> <li key={item.card.info.id}>{item.card.info.name}</li>)}
  </div>
 )
}

export default Cart;