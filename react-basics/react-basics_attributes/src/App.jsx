import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Der Allosaurus</h2>
      <section>
        Allosaurus (griechisch für andersartige Echse) ist eine Gattung von
        theropoden Dinosauriern. Sie lebte im Zeitalter des Oberjura und ist in
        Nordamerika und Südeuropa durch Funde nachgewiesen.
        <br />
        <br />
        Frühere zu der Gattung gestellte Funde aus dem Oberjura von Tansania
        lassen sich nicht sicher zuordnen, solche aus der Unterkreide von
        Australien konnten inzwischen mit Sicherheit einer anderen Gattung
        zugeschrieben werden.
        <br />
        <br />
        Othniel Charles Marsh gab in seiner Erstbeschreibung von 1877 der
        Gattung ihren Namen nach der Anatomie der Wirbelknochen, die anders als
        die bis dahin bekannten Dinosaurierwirbel gestaltet waren.
        <br />
        <br />
        Allosaurus gehörte zu den größten fleischfressenden Dinosauriern seiner
        Zeit und wird, je nach Rekonstruktion, auf eine Körperlänge zwischen
        6,36 m und 10,4 m, meist 7,4 m und eine Körpermasse von 700 bis 2900 kg
        geschätzt.
      </section>
      <label htmlFor="text">
        <input type="text" id="text" placeholder="Hier enfügen" />
      </label>
      <a
        href="https://de.wikipedia.org/wiki/Allosaurus"
        className="article__link"
        target="blank"
      >
        Mehr informationen
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
