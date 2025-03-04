import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {name}
    </p>
  ); //--> Option A mit inline JS
  // return <p className={`card ${color}`}>{name}</p>; --> Option B - hierbei mit müssten noch für jede Farbe eine eigene CSS Klasse hinzugefügt werden
}
