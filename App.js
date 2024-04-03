import React from "react";
import ReactDOM from "react-dom/client";
// ! USING JS
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from JavaScript!";

// const root = document.getElementById("root");
// root.appendChild(heading); // appendChild is a method which is present for all HTML nodes

//* This document, createElement, innerHTML, etc are all superpowers which browsers already have in it. 
//* Browsers have a JS engine in it to execute all this JS


// ! USING REACT

const heading = React.createElement("h1", {id: 'heading', xyz: 'abc'}, "Hello World from React!");  //* Core React thing so it comes from React.
console.log(heading); // A React Element - JavaScript Object

// React needs to have a root where all React can run & where it can do all the DOM manipulation - so first we create a root
//* Creating a root & rending something inside it - job of ReactDOM.
const root = ReactDOM.createRoot(document.getElementById("root")); 

// root.render(heading);

// * NESTED HTML STRUCTURE USING REACT
const heading1 = React.createElement("h2", {id: 'heading1'}, "Hello Mumbai from React🚀");
const child = React.createElement("div", {id: 'child'}, [heading, heading1]); // To create sibling - use ARRAY of children
const child1 = React.createElement("div", {id: 'child1'}, [heading, heading1]);
const parent = React.createElement("div", {id: 'parent'}, [child, child1]);

root.render(parent); // React Element (JS Obj) => HTML ELEMENT (div) which browser understands

console.log(parent); // it's children inside the props object will be the array of obj - child element & the child1 element (siblings)
console.log(child); // it's children inside the props object will be the  array of obj - heading element & the heading1 element (siblings)
console.log(heading); // it's children inside the props object will be it's inner HTML
console.log(heading1); // it's children inside the props object will be it's inner HTML


// All this become very tedious - SO THAT'S WHY WE USE JSX

//! JSX

//React Element
const jsxHeading = <h1 className="headings" tabIndex="1">Namaste React using JSX!!🚀</h1>;
console.log('JSX Heading', jsxHeading);  // React Element (JS Obj)
root.render(jsxHeading);  //* Render React Element on to web-page

// React Element inside React Element
const reactEle = <span>React element {jsxHeading}</span>;

// React Functional Component
// Included React Component, React Elements & some piece of JS inside it
const Title = () =>{
 return <h1>Namaste React!!!!! 🚀🚀</h1>
}
// React Component inside React Element
const reactEleNComp = <span>React element {<Title/>}</span>;

const number = 1000;
const HeadingComponent = () => {
 return (
  <div>
   <h2>{ number+ 's' + 200 }</h2>
   {console.log(number)}
   {jsxHeading}
   {reactEle}
   {reactEleNComp}
   <Title/>
   <Title></Title>
   {Title()}
   <h2 className="headings">Functional Component with Nested Structure</h2>
  </div>
 );
}

root.render(<HeadingComponent />);  //* Render React Functional Component RFC on to web-page


// const data = api.getData();
// const Content = () => {
//  return (
//  <div>
//   <h1>Namaste React! 🚀</h1>
//   <p>{data}</p>  // JSX will sanitize this data (so any malicious data cannot be just blindly executed)
//  </div>
//  );
// }