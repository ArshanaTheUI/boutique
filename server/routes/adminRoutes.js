import express from "express";
import { verifyToken, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// Only ADMIN can access this
router.get("/dashboard", verifyToken, adminOnly, (req, res) => {
  res.json("Welcome Admin");
});

export default router;
