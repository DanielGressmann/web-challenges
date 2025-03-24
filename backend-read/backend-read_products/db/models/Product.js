import mongoose from "mongoose";

const { Schema } = mongoose;

const fishShopSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", fishShopSchema);

export default Product;
