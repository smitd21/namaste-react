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