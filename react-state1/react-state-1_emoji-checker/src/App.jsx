import { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState(""); // state initialisieren

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    console.log(emoji);
    console.log(code);
    setCode(code + emoji); // state aktualisieren
  }

  function handleReset() {
    console.log("Reset");
    setCode(""); // Code zurücksetzen
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
