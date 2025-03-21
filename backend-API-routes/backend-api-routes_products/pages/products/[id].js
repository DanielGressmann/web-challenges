import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (isLoading) return <p>Lade Produktdetails...</p>;
  if (error) return <p>Fehler beim Laden des Produkts</p>;

  return <h1>{product.name}</h1>;
}
