import express from "express";
import {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { verifyToken, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public (users)
router.get("/", getProducts);

// Admin only
router.post("/", verifyToken, adminOnly, addProduct);
router.put("/:id", verifyToken, adminOnly, updateProduct);
router.delete("/:id", verifyToken, adminOnly, deleteProduct);

export default router;
