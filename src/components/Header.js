import { IoCart,IoSearch , IoHelpBuoyOutline} from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isSignedIn , setIsSignedIn] = useState(false);

  console.log("RENDER HEADER COMPONENT");

 return (
   <div className="header">
     <div className="logo-container">
       <img className="logo" src={LOGO_URL} alt="logo" />
       <span>Kandivali, Mumbai <IoIosArrowDown/></span>
     </div>
     <div className="nav-items">
       <ul>
         <li><IoSearch/> Search</li>
         <li><BiSolidOffer/> Offers</li>
         <li><IoHelpBuoyOutline/> Help</li>
         <li onClick={()=>{
          !isSignedIn ? setIsSignedIn(true) : setIsSignedIn(false)
         }}><FaRegUser/>{ isSignedIn ? 'Sign Out' : 'Sign In'}</li>
         <li><IoCart/> Cart</li>
       </ul>
     </div>
   </div>
 );
}

export default Header;