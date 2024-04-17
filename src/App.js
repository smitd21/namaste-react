import React, { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About"; // We'll not import About using normal import
import Contact from "./components/Contact";
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResMenu from "./components/ResMenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from './components/Grocery'; // We'll not import Grocery using normal import

// Lazy load our Grocery Component
const Grocery = lazy(()=> import('./components/Grocery'));
const About = lazy(()=> import('./components/About'));

const AppLayout = () => {
 return (
   <Provider store={appStore}>
     <div className="app">
       <Header />
       <Outlet />
     </div>
   </Provider>
 );
}
// createBrowserRouter takes in Array of objects
const appRouter = createBrowserRouter([
 {
  path: '/',
  element: <AppLayout/>,
  children: [
   {
   path: '/',
   element: <Body/>
   },
   {
    path: '/about',
    element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
   }, 
   {
    path: '/contact',
    element: <Contact/>
   },
   {
    path: '/cart',
    element: <Cart/>
   },
   {
    path: '/grocery',
    element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
   },
   {
    path: '/restaurant/:resId',
    element: <ResMenu/>
   }
  ],
  errorElement: <Error/> //If you have error -> Show Error page  eg: http://localhost:1234/random-url
 }
])

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);