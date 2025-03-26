import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);

  console.log(product);

  if (!product) {
    response.status(404).json({ message: "404 winter is coming" });
    return;
  }

  response.status(200).json(product);
}
