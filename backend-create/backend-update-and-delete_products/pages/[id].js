import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/products/${id}` : null);

  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return;
  }

  // Funtion zum Bearbeiten des Produktes
  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      console.error("Update failed", response.status);
      return;
    }

    mutate(); // Aktualisierte Daten abrufen
    setIsEditMode(false); // Bearbeitungsmodus beendet
  }

  // DELETE Product Function

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Delete failed", response.status);
      return;
    }
    router.push("/");
  }

  return (
    <ProductCard>
      <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
        {isEditMode ? "Cancel Edit" : "Edit Product"}
      </button>

      {isEditMode && (
        <>
          <h2>Edit Product</h2>
          <ProductForm
            onSubmit={handleEditProduct}
            title="Edit Product"
            defaultValues={product}
          />
        </>
      )}

      {!isEditMode && (
        <>
          <h2>{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>
            Price: {product.price} {product.currency}
          </p>
          <StyledLink href="/">Back to all</StyledLink>
          <button type="button" onClick={() => handleDeleteProduct(id)}>
            Delete Button
          </button>
        </>
      )}
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
