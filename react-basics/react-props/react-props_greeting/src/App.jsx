function Greeting({ name }) {
  return (
    <div className="root">
      {name == "Danny" ? "Hello, Coach!" : `Hello, ${name}`}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Greeting name="Björn" />
      <Greeting name="Danny" />
      <Greeting name="Arnold Peter der II" />
    </div>
  );
}
