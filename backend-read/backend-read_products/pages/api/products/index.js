import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const data = await Product.find();
    console.log(data);
    response.status(200).json(data);
    return;
  }

  return response.status(405).json({ message: "Method not allowed" });
}
