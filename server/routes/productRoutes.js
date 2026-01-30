import express from "express";
import { addProduct, getProducts } from "../controllers/productController.js";
import { verifyToken, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin only
router.post("/", verifyToken, adminOnly, addProduct);

// Public (users)
router.get("/", getProducts);

export default router;
