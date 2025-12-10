import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import User from "./models/User.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use("/api", authRoutes);

app.get("/auth/verify", async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(200).json({ error: "No token found", authenticated: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);

        return res.status(200).json({
            authenticated: true,
            user,
        });


    } catch (err) {
        return res.status(200).json({ error: err.message, authenticated: false });
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});