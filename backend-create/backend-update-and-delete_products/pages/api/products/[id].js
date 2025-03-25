import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  if (request.method === "PUT") {
    const updatedProduct = request.body;
    const product = await Product.findByIdAndUpdate(id, updatedProduct);

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }
    response.status(200).json({ status: "Product successfully updated" });
  }

  if (request.method === "DELETE") {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json({ status: "Product successfully deleted." });
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
