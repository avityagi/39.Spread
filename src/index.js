import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
const fruits = ["banana", "apple", "mango"];
const others = ["pomegranate", ...fruits, "grapes", "banana"];
console.log(others);
const cars = { name: "tesla", color: "blue" };
const otherCars = { speed: "40km", speed: "50km" };
console.log(otherCars);
