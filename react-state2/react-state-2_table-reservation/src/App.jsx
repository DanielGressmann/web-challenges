import { useState } from "react"; // 1. useState importieren
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(2);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAdding={() => setPeople(people + 1)}
        onDelete={() => setPeople(people > 1 ? people - 1 : 1)}
      />
      <p>You are going to reserve a table for 2 people.</p>
    </div>
  );
}
