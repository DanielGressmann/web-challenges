import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>Hier wird ein Text stehen</p>
      <button>Nicht drücken!</button>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
