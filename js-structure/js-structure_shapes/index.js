import Circle from "./components/Circle/Circle.js";
import { Square } from "./components/Square/Square.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
console.clear();

const root = document.getElementById("root");

console.log("Hallo");
root.append(Circle(), Square(), Pentagon());
