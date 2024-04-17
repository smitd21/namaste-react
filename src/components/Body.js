import useOnlineStatus from "../utils/useOnlineStatus";
import ResCarousel from "./ResCarousel";
import ResNearYou from "./ResNearYou";

const Body = () =>{
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return ( <h1>Looks like your offline, Please re-connect! Play the below game until then</h1> )
 return (
   <div className="main-body">
     <ResCarousel/>
     <ResNearYou/>
   </div>
 );
}

export default Body;