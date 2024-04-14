import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResMenu from "./components/ResMenu";

const AppLayout = () => {
 return (
  <div className="app">
   <Header/>
   <Outlet/>
  </div>
 )
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
    element: <About/>
   }, 
   {
    path: '/contact',
    element: <Contact/>
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