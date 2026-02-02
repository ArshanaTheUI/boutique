import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const addProductApi = async (data) => {
  const token = localStorage.getItem("token");

  const res = await axios.post("http://localhost:5000/api/products", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const deleteProductApi = async (id) => {
  const token = localStorage.getItem("token");

  await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProductApi = async (id, data) => {
  const token = localStorage.getItem("token");

  const res = await axios.put(`${API_URL}/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
export const getProductsApi = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
