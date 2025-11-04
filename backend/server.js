import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("🌿 EcoExchange API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
