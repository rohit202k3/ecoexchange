import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  condition: String,
  location: String,
  status: { type: String, default: "available" },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);
export default Item;
