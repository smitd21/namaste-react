import { IoCart,IoSearch, IoCall} from "react-icons/io5";
import { FaRegUser, FaBuilding } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSignedIn , setIsSignedIn] = useState(false);


  useEffect(()=>{
    console.log('Use Effect CB Fn. triggered!!');
  },[isSignedIn])

  console.log("RENDER HEADER COMPONENT");

 return (
   <div className="header">
     <div className="logo-container">
      <Link to="/"><img className="logo" src={LOGO_URL} alt="logo" /></Link>
       <span>Kandivali, Mumbai <IoIosArrowDown/></span>
     </div>
     <div className="nav-items">
       <ul>
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
          <Link to="/cart"><IoCart/> Cart</Link>
          </li>
       </ul>
     </div>
   </div>
 );
}

export default Header;