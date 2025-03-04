import { useState } from "react"; // useState importieren
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0); // State für den Counter
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      {/* {count als value übergeben} */}
      {/* <ColoredNumber value={0} /> --> */} <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setCount(count + 1)} // Counter um 1 erhöhen
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)} // Counter um 1 verringern
        >
          -
        </button>
      </div>
    </div>
  );
}
