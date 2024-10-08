//Create a hello world using react

// const heading=React.createElement("h1",{},"Hello World from React !")
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

//created nested elements using React


import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "I am irfan koya"),
    React.createElement("h4", {}, "I am 2nd inside"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h5", {}, "I am 2 the inside"),
    React.createElement("h6", {}, "I am 3rd inside"),
  ]),
]);

const hello = ReactDOM.createRoot(document.getElementById("root"));



hello.render(heading);
