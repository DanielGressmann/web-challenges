import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductList() {
    const { data, error, isLoading } = useSWR("/api/products", fetcher);
  
    if (isLoading) return <p>Lade Daten...</p>;
    if (error) return <p>Fehler beim Laden der Daten</p>;
  
    return (
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    );
  }