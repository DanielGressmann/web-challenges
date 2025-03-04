import Card from "./components/Card";


export default function App() {
  const fruits = [
    {id: 1, name: "🍌 banana", color: "yellow" },
    {id: 2, name: "🍎 apple", color: "red" },
    {id: 3, name: "🍒 cherry", color: "magenta" },
    {id: 4, name: "🍉 melone", color: "green" },
    {id: 5, name: "🍊 orange", color: "orange" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
      <Card key={fruit.id} name={fruit.name} color={fruit.color} />
    ))}
      </div>
  );
}
