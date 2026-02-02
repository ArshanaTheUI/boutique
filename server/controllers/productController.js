import Product from "../models/Product.js";

// ADD PRODUCT (ADMIN)
export const addProduct = async (req, res) => {
  try {
    const { name, price, category, image } = req.body;

    if (!name || !price || !category || !image) {
      return res.status(400).json("All fields required");
    }

    const product = await Product.create({
      name,
      price,
      category,
      image,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json("Failed to add product");
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json("Product not found");
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json("Failed to update product");
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json("Product not found");
    }

    res.json("Product deleted");
  } catch (err) {
    res.status(500).json("Failed to delete product");
  }
};

// GET ALL PRODUCTS (USER + ADMIN)

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("❌ GET PRODUCTS ERROR:", err); // 👈 ADD THIS
    res.status(500).json("Failed to fetch products");
  }
};
