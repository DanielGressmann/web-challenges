function Smiley({ isHappy }) {
  return isHappy ? "😁" : "😢";
}

export default function App() {
  return <Smiley isHappy={true} />;
}
