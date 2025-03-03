import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // let isActive = false; --> ersetzten durch useState:
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    // // Check that the value changes correctly.
    // console.log(isActive); --> State-Update mit setIsActive:
    setIsActive(!isActive);
  }
  console.log(isActive); // HACKER BONUS --> State-Updates werden asynchron eingelesen. Die Veränderung wird erst beim neuen Rendern angezeigt - bessere Performance?
  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deaktivieren!" : "Aktivieren!"}
      </button>
    </main> //ternery nutzen für BONUS
  );
}
