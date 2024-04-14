import { useRouteError } from "react-router-dom";

const Error = ()=>{
 const err = useRouteError(); //! A hook provided by React Router DOM which gives us all info. about the Error occured

 console.log(err);
 return(
  <div>
   <h1>Oops!!</h1>
   <h3>Something went wrong!!</h3>
   <h2>{err?.status} - {err?.statusText}</h2>
  </div>
 )
}
export default Error;