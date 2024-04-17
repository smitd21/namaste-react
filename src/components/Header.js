import { IoCart,IoSearch, IoCall} from "react-icons/io5";
import { FaRegUser, FaBuilding } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSignedIn , setIsSignedIn] = useState(false);

  const onlineStatus = useOnlineStatus();

  useEffect(()=>{
    console.log('Use Effect CB Fn. triggered!!');
  },[isSignedIn])

  console.log("RENDER HEADER COMPONENT");

  //! Read the Store
  // Header Component is subscribed to the store using a Selector (A Hook)
  const cartItems = useSelector((store) => store.cart.items); //* useSelector gives us access to the Store - We can tell them what portion of the store we need access/subscribe to (Cart)
  console.log(cartItems);
 return (
   <div className="header">
     <div className="logo-container">
      <Link to="/"><img className="logo" src={LOGO_URL} alt="logo" /></Link>
       <span>Kandivali, Mumbai <IoIosArrowDown/></span>
     </div>
     <div className="nav-items">
       <ul>
        <li>
          Online Status :<div className="online-status" style={{background: onlineStatus ? 'green' : 'red' }}>
          </div>
        </li>
         <li>
          <Link to="/"><IoSearch/> Search</Link>
          </li>
         <li>
          <Link to="/contact"><IoCall/> Contact</Link>
          </li>
         <li>
          <Link to="/about"><FaBuilding/> About</Link>
          </li>
         <li onClick={()=>{
          !isSignedIn ? setIsSignedIn(true) : setIsSignedIn(false)
         }}><Link to="/"><FaRegUser/>{ isSignedIn ? 'Sign Out' : 'Sign In'}</Link></li>
         <li>
          <Link to="/grocery"><IoCart/> Grocery</Link>
          <Link to="/cart"><IoCart/> Cart - ({cartItems?.length} Items)</Link>
          </li>
       </ul>
     </div>
   </div>
 );
}

export default Header;