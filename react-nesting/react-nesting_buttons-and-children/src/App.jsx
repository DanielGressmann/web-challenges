import React, { Children } from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Home</Button>
      <Button>About Me</Button>
      <Button>Contact</Button>
      <Button>Impressum</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
