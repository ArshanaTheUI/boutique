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

// GET ALL PRODUCTS (USER + ADMIN)
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json("Failed to fetch products");
  }
};
