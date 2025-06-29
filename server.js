import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/auth.js";
import contactRoutes from "./src/routes/contact.routes.js";

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", contactRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
console.log("jai shree ram");
console.log("jai mata di");

});



